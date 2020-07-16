import React from "react";
import "./Columns.css";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import employees from '../employees.json';

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
            <div>
            <BootstrapTable data={ employees }>
                <TableHeaderColumn width="100px" isKey dataField="id" dataSort sortFunc={ revertSortFunc }>Id<i class="fas fa-sort"></i></TableHeaderColumn>
                <TableHeaderColumn width="150px" dataField="firstName">First Name</TableHeaderColumn>
                <TableHeaderColumn width="150px" dataField="lastName">Last Name</TableHeaderColumn>
                <TableHeaderColumn width="100px" dataField="gender">Gender</TableHeaderColumn>
                <TableHeaderColumn width="100px" dataField="age" dataSort sortFunc={ sortFunc }>Age<i class="fas fa-sort"></i></TableHeaderColumn>
                <TableHeaderColumn dataField="emailAddress">Email Address</TableHeaderColumn>
            </BootstrapTable>
            </div>
        )
    }
}

export default Columns;