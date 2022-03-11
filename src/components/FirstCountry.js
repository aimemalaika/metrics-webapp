import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import Flag from '../image/rwanda.png';

class FirstCountry extends Component {
  constructor() {
    super();
    this.state = { };
  }

  render() {
    const { timing } = this.props;
    return (
      <div className="big-first-country">
        <FontAwesomeIcon className="go-to-page" icon={faArrowCircleRight} />
        <div className="item">
          <img src={Flag} alt="rwanda Flag" />
          <div className="data-sets">
            <h2 className="country">Made in Rwanda</h2>
            <p>{timing}</p>
            <p>Made by Aime Malaika</p>
          </div>
        </div>
      </div>
    );
  }
}

FirstCountry.propTypes = {
  timing: PropTypes.string.isRequired,
};

export default FirstCountry;
