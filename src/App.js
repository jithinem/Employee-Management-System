import './App.css';
import './bootstrap.min.css'
import Home from './components/Home';
import Edit from './components/Edit';
import Add from './components/Add';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/add' element={<Add/>} />
            <Route path='/edit' element={<Edit/>} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
