import React from "react";

function Data(props) {
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.firstName}</td>
            <td>{props.lastName}</td>
            <td>{props.gender}</td>
            <td>{props.age}</td>
            <td>{props.emailAddress}</td>
        </tr>
    )
}

export default Data;