import React from 'react';

import Chart from 'tui-chart'; // tui-chart의 모듈을 가져옴
import 'tui-chart/dist/tui-chart.css';

class LineChart extends React.Component {
    componentDidMount() {
        const container = document.getElementById('chart-area2'); // 차트를 렌더링할 DOM 요소 선택
        const data = {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    series: [
      {
        name: '계약건수',
        data: [10, 15, 13, 17, 20],
      },
      {
        name: '만료건수',
        data: [5, 7, 8, 10, 15],
      },
    ],
        };
        const options = {
            chart: {
                width: 480,
                height: 233,
              title: '',
            },
          };

        const chart = new Chart.lineChart(container, data, options); // tui-chart 인스턴스 생성
    }

    render() {
        return <div id="chart-area" />;
    }
}



export default LineChart;