import React from 'react';
import './AddPerson.css'


const addPerson = (props) => {
    return (
        <div className="AddPerson">
            <button onClick={props.added}>Add Person</button>
        </div>
    )
}

export default addPerson;