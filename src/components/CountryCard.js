import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

class CountryCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { name } = this.props;
    return (
      <div className={name}>
        <FontAwesomeIcon className="go-to-page" icon={faArrowCircleRight} />
        <p>Rwanda</p>
        <p>20-03-2022</p>
        <p>John Hopkins University</p>
      </div>
    );
  }
}

CountryCard.propTypes = {
  name: PropTypes.string.isRequired,
};

export default CountryCard;
