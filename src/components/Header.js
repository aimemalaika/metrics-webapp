import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faCog, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

class Header extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { content, pth } = this.props;
    return (
      <ul className="app-header">
        <li>
          <Link to={pth}>
            <FontAwesomeIcon icon={faAngleLeft} />
            <span className="page-title">{content}</span>
          </Link>
        </li>
        <li>
          <FontAwesomeIcon className="icons" icon={faMicrophone} />
          <FontAwesomeIcon className="icons" icon={faCog} />
        </li>
      </ul>
    );
  }
}

Header.propTypes = {
  content: PropTypes.string.isRequired,
  pth: PropTypes.string.isRequired,
};
export default Header;
