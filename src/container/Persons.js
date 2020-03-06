import React, {Component} from 'react';
import AddPerson from '../components/AddPerson/AddPerson';
import Person from '../components/Person/Person';
import {connect} from 'react-redux';

import * as actions from '../store/actions';

class Persons extends Component{

    //addPersonTemp = () => alert("Added");

    //removeHandlerTemp = () => alert("removed");

    render(){
        return(
            <div>
                <AddPerson added={this.props.onAddedPerson}/>
                {this.props.pers.map(person => 
                    <Person 
                        key={person.id}
                        name={person.name}
                        age={person.age}
                        clicked={() => this.props.onRemovedPerson(person.id)}/>    
                )}
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        pers: state.persons
    }    
}

const mapDispatchToProps = dispatch => {
    return {
        onAddedPerson: () => dispatch({type: actions.ADD_PERSON}),
        onRemovedPerson: (id) => dispatch({type: actions.REMOVE_PERSON, persId: id})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
