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

function sortFuncName(a, b, order) {
    if (order === 'desc') {
        return a.lastName - b.lastName;
    } else {
        return b.lastName - a.lastName;
    }
}

class Columns extends React.Component {

    

    render() {
        return (
            
            <BootstrapTable data={ employees }>
                <TableHeaderColumn isKey dataField="id" dataSort sortFunc={ revertSortFunc }>Employee ID<i class="fas fa-sort"></i></TableHeaderColumn>
                <TableHeaderColumn dataField="firstName">First Name<i class="fas fa-sort"></i></TableHeaderColumn>
                <TableHeaderColumn dataField="lastName" dataSort sortFunc={ sortFuncName }>Last Name<i class="fas fa-sort"></i></TableHeaderColumn>
                <TableHeaderColumn dataField="gender">Gender</TableHeaderColumn>
                <TableHeaderColumn dataField="age">Age<i class="fas fa-sort"></i></TableHeaderColumn>
                <TableHeaderColumn dataField="emailAddress">Email Address</TableHeaderColumn>
            </BootstrapTable>
        )
    }
}

export default Columns;