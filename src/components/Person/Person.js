import React from 'react';
import './Person.css';

const person = (props) => {
    return(
        <div className="Person" onClick={props.clicked}>
            <h1>{props.name}</h1>
            <p>Age is: {props.age}</p>
        </div>
    )
}

export default person;