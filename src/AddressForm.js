import React, { Component } from 'react';
import countries from 'node-countries';

class AddressForm extends Component {
  constructor (props) {
    super(props);
    this.state = { country: '', region: '' };
  }

  selectCountry (val) {
    this.setState({ country: val, region: '' });
  }

  selectRegion (val) {
    this.setState({ region: val });
  }

  render () {
    const { country, region } = this.state;

    const countryOptions = countries.JSON.map((country) => {
      return <option value={country.name}>{country.name}</option>
    })

    const usStateOptions = countries.US.provinces.map((state) => {
      return <option value={state.name}>{state.name}</option>
    })

    return (
      <div>
        <select
          value={country}
          onChange={(e) => this.selectCountry(e.target.value)}>
          <option value=""></option>
          {countryOptions}
        </select>
        { this.state.country === 'United States' ? (
          <select
            value={region}
            onChange={(e) => this.selectRegion(e.target.value)}>
            <option value=""></option>
            {usStateOptions}
          </select>
        ) : (
          <input type="text" value={region} onChange={(e) => this.selectRegion(e.target.value)} />
        )}
      </div>
    );
  }
}

export default AddressForm;
