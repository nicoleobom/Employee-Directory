import React from "react";
import "./Columns.css";
// import employees from "./employees.json";
// import Data from "../Data/Data";
import Table from "../Table/Table"

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
            <Table />
        </table>
    )
}

export default Columns;