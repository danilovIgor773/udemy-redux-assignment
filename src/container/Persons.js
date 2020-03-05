import React, {Component} from 'react';
import AddPerson from '../components/AddPerson/AddPerson';
import Person from '../components/Person/Person';


class Persons extends Component{

    addPersonTemp = () => alert("Added");

    removeHandlerTemp = () => alert("removed");

    render(){
        return(
            <div>
                <AddPerson added={this.addPersonTemp}/>
                <Person name="Igor" age="29" clicked={this.removeHandlerTemp}/>
            </div>
        )
    }
}

export default Persons;
