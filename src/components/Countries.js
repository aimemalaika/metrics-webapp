import React, { Component } from 'react';
import FirstCountry from './FirstCountry';
import Header from './Header';
import CountryCard from './CountryCard';

class Countries extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <Header />
        <FirstCountry />
        <p className="titles-paragraph">Stats By Countries</p>
        <div className="listed-countrises">
          <CountryCard name="small-card-country pink" />
          <CountryCard name="small-card-country pinker" />
          <CountryCard name="small-card-country pinker" />
          <CountryCard name="small-card-country pink" />
          <CountryCard name="small-card-country pink" />
          <CountryCard name="small-card-country pinker" />
          <CountryCard name="small-card-country pinker" />
          <CountryCard name="small-card-country pink" />
        </div>
      </>
    );
  }
}

export default Countries;
