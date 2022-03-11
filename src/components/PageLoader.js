import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaSpinner } from 'react-icons/fa';

class PageLoader extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { loading } = this.props;
    return (
      <div className={loading}>
        <FaSpinner icon="spinner" className="spinner" />
        Loading ...
      </div>
    );
  }
}

PageLoader.propTypes = {
  loading: PropTypes.string.isRequired,
};

export default PageLoader;
