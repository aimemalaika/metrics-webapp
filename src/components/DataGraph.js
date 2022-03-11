import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import PropTypes from 'prop-types';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

class DataGraph extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { dataperiod, figures } = this.props;
    const data = {
      labels: dataperiod.split(','),
      datasets: JSON.parse(figures),
    };
    return (
      <Line data={data} />
    );
  }
}

DataGraph.propTypes = {
  dataperiod: PropTypes.string.isRequired,
  figures: PropTypes.string.isRequired,
};

export default DataGraph;
