import * as actions from './actions';
import uuid from 'uuid-random';
//import randomName from 'random-name';

const initialState = {
    persons: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actions.ADD_PERSON:
            const personObjTemp = {
                id: uuid(),
                name: action.personData.name,
                age: action.personData.age
            };
            return {
                ...state,
                persons: state.persons.concat(personObjTemp)
            };
        case actions.REMOVE_PERSON:
            return {
                ...state,
                persons: state.persons.filter(pers => pers.id !== action.persId)
            };
        default: 
            return state;
    }
}

export default reducer;