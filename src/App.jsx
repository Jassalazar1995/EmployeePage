import { Fragment, useEffect, useState } from 'react'
import EmployeeList from './Components/EmployeeList';
import EmployeePage from './pages/EmployeePage';
import { Link, useNavigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Form from './Components/Form';

function App() {

  
  const [users, setUsers] = useState([]);
  

  

  

  useEffect(() => {
    async function getData() {
      try {
        let userList = await fetch("https://reqres.in/api/users?page=2")
        userList = await userList.json();
        setUsers(userList.data); // All employees
      }
      catch (error) {
        console.log(error);
      }
    }

    getData();


  }, [])

  function removeFunction() {
    // return (<button>Remove</button>)

    setShowRemove(!showRemove);
  }


  return (
    <div className='all-holder'>
      <Routes>
        <Route path='/' element = {<EmployeeList users = {users}/>} />
        <Route path='/employeepage/:employee' element = {<EmployeePage />}/>
      </Routes>
    </div>
  ) 
}

export default App