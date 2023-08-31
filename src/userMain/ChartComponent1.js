import React from 'react';

import Chart from 'tui-chart'; // tui-chart의 모듈을 가져옴
import 'tui-chart/dist/tui-chart.css';

class ChartComponent1 extends React.Component {
    componentDidMount() {
      const container = document.getElementById('chart-area');
      const data = {
        categories: ['A프로젝트', 'B프로젝트', 'C프로젝트', 'D프로젝트'],
        series: [
          {
            name: '정기점검',
            data: [10, 7, 8, 6],
          },
          {
            name: '장애대응',
            data: [6, 7, 8, 10],
          },
          {
            name: '긴급출동',
            data: [5, 2, 6, 3],
          }
          
        ],
      };
      const options = {
        chart: { title: '', width: 900, height: 400 },
      };

      const chart = new Chart.columnChart( container, data, options);

    }

    render() {
        return <div id="chart-area" />;
    }
}


export default ChartComponent1;