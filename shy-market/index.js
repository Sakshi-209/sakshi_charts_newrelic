import React from 'react';

// https://docs.newrelic.com/docs/new-relic-programmable-platform-introduction
import Linechart from './chart1';
import Piechart from './chart3';
import Areachart from './chart2';
export default class HomeNerdlet extends React.Component {
  render() {
    return (
      <div>
        <h2>Line Chart</h2>
        <Linechart />
        <h2>Pie chart</h2>
        <Piechart />
        <h2>Area Chart</h2>
        <Areachart />

      </div>
    );
  }
}
