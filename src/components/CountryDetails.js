import React, { Component } from 'react';
import DataGraph from './DataGraph';
import FirstCountry from './FirstCountry';
import Header from './Header';

class CountryDetails extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <Header />
        <FirstCountry />
        <p className="titles-paragraph">More details</p>
        <div className="graph-section">
          <DataGraph />
        </div>
        <p className="text-paragraph pink">More details</p>
        <p className="text-paragraph pinker">More details</p>
        <p className="text-paragraph pink">More details</p>
        <p className="text-paragraph pinker">More details</p>
        <p className="text-paragraph pink">More details</p>
      </>
    );
  }
}

export default CountryDetails;
