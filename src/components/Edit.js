import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import Employee from './Employee';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Edit() {
    let history=useNavigate();
    const [id,setId]=useState('');
    const [empname,setEmpname]=useState('');
    const [age,setAge]=useState('');
    const [designation,setDesignation]=useState('');
    const [salary,setSalary]=useState('');
    const params=useParams();
    console.log(params.id);
    const fetchEmployee=async()=>{
      const result=await axios.get('http://localhost:8000/getanemployee/'+params.id)
      console.log(result.data.employees);
      setId(result.data.id)

    }
    useEffect(()=>{
        // setId(localStorage.getItem('ID'));
        // setEmpname(localStorage.getItem('NAME'));
        // setAge(localStorage.getItem('AGE'));
        // setDesignation(localStorage.getItem('DESIGNATION'));
        // setSalary(localStorage.getItem('SALARY'));
        fetchEmployee()
    },[])
    // console.log(id);
    // console.log(empname);
    // var index=Employee.map(item=>item.id).indexOf(id);
    // console.log(index);
    const handleUpdate=async(e)=>{
        e.preventDefault();//avoiding refresh
        // console.log(e);
        // let emp=Employee[index];//full details of employee when button clicked
        // console.log(emp);
        // emp.id=id;
        // emp.empName=empname;
        // emp.age=age;
        // emp.designation=designation;
        // emp.salary=salary;
        // console.log(emp);
           const body={
            id,empname,age,designation,salary
           }
           const result=await axios.post('http://localhost:8000/updateEmployee',body)
        history('/');

    }


  return (
    <>
        <h1 className='text-primary text-center m-4'>Employee Management System</h1>
        <p className='p-2'>
            Employee management is a practice that helps a manager improve employee productivity and satisfaction to help an organisation reach its goals. Human resources (HR) professionals often use an employee management system (EMS), including recruitment, offboarding and performance management. Using a dedicated EMS can help an HR manager streamline the hiring process and improve workplace efficiency. In this article, we discuss what an employee management systems is, outline its benefits and types and list some examples of employee management software tools.
        </p>
        <Row>
            <Col>
               <img src='data:image/png;base64,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'></img>
            </Col>
            <Col>
               <Form className='border border-3 border-dark p-5 me-3'>
                    <Form.Group className="mb-3 " >
                      <Form.Label>ID</Form.Label>
                      <Form.Control 
                      value={id} type="text" placeholder="Enter your id"
                      onChange={(e)=>setId(e.target.value)}
                      required
                       />
                    </Form.Group>
                    <Form.Group className="mb-3 " >
                      <Form.Label>Name</Form.Label>
                      <Form.Control 
                      value={empname} type="text" placeholder="Enter your name"
                      onChange={(e)=>setEmpname(e.target.value)}
                      required 
                      />
                    </Form.Group>
                    <Form.Group className="mb-3 " >
                      <Form.Label>Age</Form.Label>
                      <Form.Control 
                      value={age} type="text" placeholder="Enter your age"
                      onChange={(e)=>setAge(e.target.value)} 
                      required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3 " >
                      <Form.Label>Designation</Form.Label>
                      <Form.Control 
                      value={designation} type="text" placeholder="Enter your designation" 
                      onChange={(e)=>setDesignation(e.target.value)}
                      required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3 " >
                      <Form.Label>Salary</Form.Label>
                      <Form.Control 
                      value={salary} type="text" placeholder="Enter your salary" 
                      onChange={(e)=>setSalary(e.target.value)}
                      required
                      />
                    </Form.Group>
                    <Link to={'/add'} ><Button onClick={(e)=>handleUpdate(e)} variant="success">Update</Button></Link>

               </Form>
            </Col>
        </Row>

    </>
  )
}

export default Edit