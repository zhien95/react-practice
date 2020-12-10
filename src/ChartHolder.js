import {Chart} from 'react-google-charts'

import React, { Component } from 'react'

export class ChartHolder extends Component {
  render() {
    return (
      <div>
      <Chart
        width={'100%'}
        height={350}
        chartType="CandlestickChart"
        loader={<div>Loading Chart</div>}
        data={[
          ['day', 'a', 'b', 'c', 'd'],
          ['Mon', 20, 28, 38, 40],
          ['Tue', 31, 38, 55, 66],
          ['Wed', 50, 55, 77, 80],
          ['Thu', 77, 77, 66, 50],
          ['Fri', 68, 66, 22, 15],
        ]}
        options={{
          legend: 'none',
        }}
        rootProps={{ 'data-testid': '1' }}
      />
      </div>
    )
  }
}

export default ChartHolder

