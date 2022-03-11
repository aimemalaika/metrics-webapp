import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

class CountryCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      classname, country, date, source, cid,
    } = this.props;
    const pathname = `/details/${cid}`;
    return (
      <Link to={pathname} className={classname}>
        <div>
          <FontAwesomeIcon className="go-to-page" icon={faArrowCircleRight} />
          <p>{country}</p>
          <p>{date}</p>
          <p>{source}</p>
        </div>
      </Link>
    );
  }
}

CountryCard.propTypes = {
  classname: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  cid: PropTypes.string.isRequired,
};

export default CountryCard;
