import React from "react";
import "./Columns.css"

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
        </table>
    )
}

export default Columns;