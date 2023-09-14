import React, { Component } from 'react';
import 'tui-chart/dist/tui-chart.css';
import { ColumnLineChart } from '@toast-ui/react-chart';


class MyChartComponent extends Component {
  render() {
    const data = {
      categories: ['1월', '2월', '3월', '4월', '5월'],
      series: [
        {
          name: '매출',
          data: [3000, 5000, 7000, 6000, 8000],
          type: 'column'
        },
        {
          name: '이익',
          data: [800, 1000, 1500, 2000, 1300],
          type: 'line'
        }
      ]
    };

    const options = {
      chart: {
        width: 700,
        height: 400,
        title: '매출 및 이익'
      }
    };

    return (
      <ColumnLineChart
        data={data}
        options={options}
      />
    );
  }
}

export default MyChartComponent;
