import React from "react";
import "./index.css";
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import employees from '../../assets/employees.json';

function revertSortFunc(a, b, order) {
    if (order === 'desc') {
        return a.id - b.id;
    } else {
        return b.id - a.id;
    }
}

function sortFunc(a, b, order) {
    if (order === 'desc') {
        return a.age - b.age;
    } else {
        return b.age - a.age;
    }
}

class Columns extends React.Component {

    render() {
        return (
            <div id="table" className="justify-content-center align-self-center">
                <BootstrapTable data={employees}>
                    <TableHeaderColumn width="100px" isKey dataField="id" dataSort sortFunc={revertSortFunc}>Id<i class="fas fa-sort"></i></TableHeaderColumn>
                    <TableHeaderColumn width="300px" dataField="firstName" filter={{ type: 'TextFilter', delay: 1000 }}>First Name</TableHeaderColumn>
                    <TableHeaderColumn width="300px" dataField="lastName" filter={{ type: 'TextFilter', delay: 1000 }}>Last Name</TableHeaderColumn>
                    <TableHeaderColumn width="100px" dataField="gender">Gender</TableHeaderColumn>
                    <TableHeaderColumn width="100px" dataField="age" dataSort sortFunc={sortFunc}>Age<i class="fas fa-sort"></i></TableHeaderColumn>
                    <TableHeaderColumn dataField="emailAddress">Email Address</TableHeaderColumn>
                </BootstrapTable>
            </div>
        )
    }
}

export default Columns;