import React from "react";
import "./Columns.css"

function Data(props) {
    return (
        <tr>
            <td>{props.firstName}</td>
            <td>{props.lastName}</td>
        </tr>
    )
}

export default Data;