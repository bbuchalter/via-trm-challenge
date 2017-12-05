import React, { Component } from 'react';
import './App.css';
import MonthRangePicker from './MonthRangePicker.js';

class App extends Component {
  render() {
    return (
      <div>
        <MonthRangePicker years="2017,2018,2019" />
      </div>
    );
  }
}

export default App;
