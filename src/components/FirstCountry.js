import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import Flag from '../image/rwanda.png';

class FirstCountry extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="big-first-country">
        <FontAwesomeIcon className="go-to-page" icon={faArrowCircleRight} />
        <div className="item">
          <img src={Flag} alt="rwanda Flag" />
          <div className="data-sets">
            <h2 className="country">Rwanda</h2>
            <p>12-403-2022</p>
            <p>John Hopkins University</p>
          </div>
        </div>
      </div>
    );
  }
}

export default FirstCountry;
