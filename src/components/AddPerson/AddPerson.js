import React, {useState} from 'react';
import './AddPerson.css'


function AddPerson (props) {
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);

    return (
        <div className="AddPerson">
            <input name="Name" placeholder="Enter name" value={name} onChange={event => setName(event.target.value)} />
            <input name="Age" placeholder="Enter age" value={age} onChange={event => setAge(event.target.value)} />
            <button onClick={() => props.added(name, age)}>Add Person</button>
        </div>
    )
}

export default AddPerson;