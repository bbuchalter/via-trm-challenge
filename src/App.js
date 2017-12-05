import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CalendarYear from './CalendarYear.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
       <CalendarYear year="2017" />
       <CalendarYear year="2018" />
       <CalendarYear year="2019" />
      </div>
    );
  }
}

export default App;
