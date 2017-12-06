import React, { Component } from 'react';
import countries from 'node-countries';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';

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
      return <MenuItem key={country.name} primaryText={country.name} value={country.name} />
    })

    const usStateOptions = countries.US.provinces.map((state) => {
      return <MenuItem key={country.name} primaryText={state.name} value={state.name} />
    })

    return (
      <div>
        <SelectField
          floatingLabelText="Country"
          autoWidth={true}
          value={country}
          maxHeight={200}
          onChange={(e,index,value) => this.selectCountry(value)}>
          <MenuItem value={null} primaryText="" />
          <MenuItem value="United States" primaryText="United States" />
          {countryOptions}
        </SelectField>
        <br/>
        { this.state.country === 'United States' ? (
          <SelectField
            floatingLabelText="State"
            autoWidth={true}
            value={region}
            maxHeight={200}
            onChange={(e,index,value) => this.selectRegion(value)}>
            <MenuItem value={null} primaryText="" />
            {usStateOptions}
          </SelectField>
        ) : (
          <TextField floatingLabelText="Region" value={region} onChange={(e ,value) => this.selectRegion(value)} />
        )}
      </div>
    );
  }
}

export default AddressForm;
