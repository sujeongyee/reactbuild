import React, { useEffect, useRef } from 'react';
import Chart from 'tui-chart'; // tui-chart의 모듈을 가져옴
import 'tui-chart/dist/tui-chart.css';


const LineChart = ({ contracts, expiration}) => {

  const containerRef = useRef(null);

  useEffect(() => {
 
        const container = containerRef.current; 
        const data = {
            categories: ['May', 'June', 'July', 'Aug', 'Sep'],
    series: [
      {
        name: '계약건수',
        data: contracts,
      },
      {
        name: '만료건수',
        data: expiration,
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
        return () => {
          // 컴포넌트 언마운트 시에 필요한 정리 작업 수행
          chart.destroy();
        };
      }, [contracts, expiration]);
    
        return <div id="chart-area2" ref={containerRef}/>;
    
}



export default LineChart;