import React, { Component } from 'react';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

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
    return (
      <div>
        <CountryDropdown
          value={country}
          onChange={(val) => this.selectCountry(val)} />
        { this.state.country === 'United States' ? (
          <RegionDropdown
          country={country}
          value={region}
          onChange={(val) => this.selectRegion(val)} />
        ) : (
          <input type="text" value={region} onChange={(e) => this.selectRegion(e.target.value)} />
        )}
      </div>
    );
  }
}

export default AddressForm;
