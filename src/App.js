import React, { Component } from 'react';
import './App.css';
import MonthRangePicker from './MonthRangePicker.js';
import AddressForm from './AddressForm.js';

class App extends Component {
  render() {
    return (
      <div>
        <h2>Challenge 1: Month Range Picker</h2>
        <MonthRangePicker years="2017,2018,2019" />

        <h2>Challenge 2: Dynamic Address Form</h2>
        <AddressForm />
      </div>
    );
  }
}

export default App;
