import { useState } from "react";
import Form from "./Form";
import { Navigate, useNavigate, Link, useParams } from "react-router-dom";



function EmployeeList({ users }) {

    const [input, setInput] = useState("");
    const [showForm, setShowForm] = useState(false);

    let { employee } = useParams();
    let filteredEmployees = users.filter((emp) => emp.first_name.toLowerCase().includes(input.toLowerCase()) || emp.last_name.toLowerCase().includes(input.toLowerCase()));
    let navigate = useNavigate();

    function handleSearch(e) {
        let input2 = e.target.value;
        setInput(input2);
    }

    function showUsers(user) {
        return (
            <Link to={`/employeepage/${user.first_name}`} state={{user: user}} key={user.id}>
                <div className='employee' >
                    <div className='picture'>
                        <img src={user.avatar} alt="face" />
                    </div>
                    <div className='bio-box'>
                        <h3>{user.first_name} {user.last_name}</h3>
                        <h4>{user.email}</h4>
                    </div>
                </div>
            </Link>
        )
    }

    function handleForm() {
        setShowForm(!showForm);

    }

    function addUser(user) {
        setUsers([...users, user])
    }



    return (
        <div className="all-holder">
            <div className='people'>
                <h1>Employee Directory</h1>
                <div className='serch-bar'>
                    <input type="text" placeholder='Search Employee' onChange={handleSearch} value={input} />
                </div>
                {filteredEmployees.map(showUsers)}

                <br />
            </div>
            <button onClick={handleForm}>{showForm ? "Hide" : "Add"} Employee</button>
            {showForm &&
                <div className="form">
                    <Form addUser={addUser} />
                    {/* <Form addUser={addUser}/> */}
                </div>
            }
        </div>


    );
}

export default EmployeeList;