import React from 'react'
import Employee from './Employee'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { FaEdit } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState,useEffect } from 'react';



function Home() {
  const [allEmployees,setAllEmployees]=useState([]);
  const fetchData=async()=>{
    const result=await axios.get('http://localhost:8000/allemployees')
    // console.log(result);
    // console.log(result.data.employees);
    setAllEmployees(result.data.employees)
  }
  useEffect(()=>{
    fetchData()
  },[])
  // console.log(allEmployees);
  const history=useNavigate();
  const handleDelete=async(id)=>{
    // alert('delete')//for checking only
    // console.log(Employee.map(item=>item.id).indexOf(id));//for checking only
    // var index=Employee.map(item=>item.id).indexOf(id);
    // Employee.splice(index,1);//item removed
    // console.log(Employee);//array position with remaining items
    // history('/');
       const result=await axios.delete('http://localhost:8000/deleteemployee/'+id)
       alert(result.data.message)
  }
  const handleEdit=(id,empName,age,designation,salary)=>{
    localStorage.setItem("ID",id);
    localStorage.setItem("NAME",empName);
    localStorage.setItem("AGE",age);
    localStorage.setItem("DESIGNATION",designation);
    localStorage.setItem("SALARY",salary);

  }
  return (
    <>
    <h1 className='text-primary text-center m-4'>Employee Management System</h1>
    <p className='p-2'>
    Employee management is a practice that helps a manager improve employee productivity and satisfaction to help an organisation reach its goals. Human resources (HR) professionals often use an employee management system (EMS), including recruitment, offboarding and performance management. Using a dedicated EMS can help an HR manager streamline the hiring process and improve workplace efficiency. In this article, we discuss what an employee management systems is, outline its benefits and types and list some examples of employee management software tools.
    </p>
    <Link to={'/add'} ><Button variant="success">Add Employee <FaUser/></Button></Link>
    
    <h2 className='my-5'>List of employees</h2>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Employee Name</th>
          <th>Age</th>
          <th>Designation</th>
          <th>Salary</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
            // Employee && Employee.length>0?
            // Employee.map((item)=>(
            allEmployees.map((item)=>(

                <tr>
                <td>{item.id}</td>
                <td>{item.empname}</td>
                <td>{item.age}</td>
                <td>{item.designation}</td>
                <td>{item.salary}</td>
                <td>
                  <Link to={'/edit/'+item.id} ><Button onClick={()=>handleEdit(item.id,item.empName,item.age,item.designation,item.salary)} className='me-3' variant="primary">Edit <FaEdit/> </Button></Link>
                  <Button onClick={()=>handleDelete(item.id)} variant="danger">Delete <FaTrashAlt/></Button>
                </td>
              </tr>      
            ))
            // :'No data available'
        }
      </tbody>
    </Table>
    </>
  )
}

export default Home