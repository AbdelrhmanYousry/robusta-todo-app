import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import {Route} from 'react-router-dom';

import Todos from './containers/TodosContainer'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Robusta To-Do App</h1>
        </header>
        <Todos />

      </div>
    );
  }
}

export default App;
