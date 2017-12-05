import React, { Component } from 'react';
import './App.css';
import CalendarYear from './CalendarYear.js';

class App extends Component {
  render() {
    return (
      <div>
       <CalendarYear year="2017" />
       <CalendarYear year="2018" />
       <CalendarYear year="2019" />
      </div>
    );
  }
}

export default App;
