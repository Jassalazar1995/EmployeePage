import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function EmployeePage(props) {

    const data = useLocation();
    console.log(data.state.user);
    let employee = data.state.user;
    let navigate = useNavigate();
    // console.log(props.location)
    return (
        <div>
            <button onClick={() => navigate("/")}> Return </button>
            <img src={employee.avatar}/>
            <h1>{employee.first_name} {employee.last_name}</h1>
            <h2>{employee.email}</h2>
        </div>
    );
}

export default EmployeePage;