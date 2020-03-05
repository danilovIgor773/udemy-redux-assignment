import React, {Component} from 'react';
import './App.css';
import Persons from '../src/container/Persons';

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1>Hello There</h1>

        <Persons />
      </div>
    )
  }
}

export default App;
