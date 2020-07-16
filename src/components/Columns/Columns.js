import React from "react";
import "./Columns.css";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

function Columns() {
    return (
        
        <BootstrapTable className="table">
            <TableHeaderColumn isKey dataField="id">Employee ID<i class="fas fa-sort"></i></TableHeaderColumn>
            <TableHeaderColumn dataField="firstName">First Name<i class="fas fa-sort"></i></TableHeaderColumn>
            <TableHeaderColumn dataField="lastName">Last Name<i class="fas fa-sort"></i></TableHeaderColumn>
            <TableHeaderColumn dataField="gender">Gender</TableHeaderColumn>
            <TableHeaderColumn dataField="age">Age<i class="fas fa-sort"></i></TableHeaderColumn>
            <TableHeaderColumn dataField="emailAddress">Email Address</TableHeaderColumn>
        </BootstrapTable>
    )
}

export default Columns;