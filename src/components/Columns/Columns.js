import React from "react";
import "./Columns.css";
import employees from "./employees.json";
import Data from "../Data/Data";

function Columns() {
    return (
        
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Employee ID <i class="fas fa-sort"></i></th>
                    <th scope="col">First Name <i class="fas fa-sort"></i></th>
                    <th scope="col">Last Name <i class="fas fa-sort"></i></th>
                    <th scope="col">Gender</th>
                    <th scope="col">Age <i class="fas fa-sort"></i></th>
                    <th scope="col">Email Address</th>
                    <button id="filter"><i class="fas fa-filter"></i></button>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map((employee) => <Data 
                        id={employee.id}
                        firstName={employee.firstName} 
                        lastName={employee.lastName} 
                        gender={employee.gender} 
                        age={employee.age} 
                        emailAddress={employee.emailAddress}
                        />)
                }
            </tbody>
        </table>
    )
}

export default Columns;