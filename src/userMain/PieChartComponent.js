import React from 'react';

import Chart from 'tui-chart'; // tui-chart의 모듈을 가져옴
import 'tui-chart/dist/tui-chart.css';
// import { PieChart } from '@toast-ui/chart';

class PieChartComponent extends React.Component {
    componentDidMount() {
        const container = document.getElementById('chart-area'); // 차트를 렌더링할 DOM 요소 선택
        const data = {
            categories: ['총 프로젝트 현황'],
            series: [
                {
                    name: '정기점검',
                    data: 54.12,
                },
                {
                    name: '장애대응',
                    data: 20.47,
                },
                {
                    name: '계약종료',
                    data: 17.71,
                },
                {
                    name: '승인요청',
                    data: 7.71,
                }
            ],
        };
        const options = {
            chart: {
                width: 480,
                height: 233,
            },series: {
                showLabel: false,
                dataLabels: {
                    visible: true,
                    pieSeriesName: {
                        visible: true,
                        anchor: 'outer',
                    },
                    
                },
            },
        };

        const chart = new Chart.pieChart(container, data, options); // tui-chart 인스턴스 생성
    }

    render() {
        return <div id="chart-area" />;
    }
}


export default PieChartComponent;