import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faCog, faMicrophone } from '@fortawesome/free-solid-svg-icons';

class Header extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <ul className="app-header">
        <li>
          <FontAwesomeIcon icon={faAngleLeft} />
          <span className="page-title">Statistic by country</span>
        </li>
        <li>
          <FontAwesomeIcon className="icons" icon={faMicrophone} />
          <FontAwesomeIcon className="icons" icon={faCog} />
        </li>
      </ul>
    );
  }
}

export default Header;
