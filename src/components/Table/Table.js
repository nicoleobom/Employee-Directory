import React from "react";
import Data from "../Data/Data";
import employees from "../employees.json";

function Table(props) {
    return (
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
    )
}

export default Table;
