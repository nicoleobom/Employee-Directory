import React from "react";
import "./Columns.css";
import ".../employees.json";
import Data from "../Data/Data";

function Columns() {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Age</th>
                    <th scope="col">Email Address</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map((employee) => <Data firstName={employee.firstName} lastName={employee.lastName} gender={employee.gender} age={employee.age} emailAddress={employee.emailAddress}/>)
                }
            </tbody>
        </table>
    )
}

export default Columns;