import React, { useEffect, useRef, useState } from 'react';
import Chart from 'tui-chart'; // tui-chart의 모듈을 가져옴
import 'tui-chart/dist/tui-chart.css';

const EnglChartComponent = ({ periodic, disability, maintenance }) => {

  const containerRef = useRef(null);

  useEffect(() => {
 
    const container = containerRef.current;
    const data = {
      categories: ['6월', '7월', '8월', '9월'],
      series: [
        {
          name: '정기점검',
          // data: periodic==null?[0,0,0,0]:periodic,
          data:periodic.length !== 0 ? periodic : [0, 0, 0, 0]
        },
        {
          name: '장애대응',
          // data: disability==null?[0,0,0,0]:disability,
          data:disability.length !== 0 ? disability : [0, 0, 0, 0],
        },
        {
          name: '긴급출동',
          // data: maintenance==null?[0,0,0,0]:maintenance,
          data:maintenance.length !== 0 ? maintenance : [0, 0, 0, 0],
        },
      ],
    };
    const options = {
      chart: { title: '', width: 900, height: 400 },
    };

    const chart = new Chart.columnChart(container, data, options);
    
    return () => {
      // 컴포넌트 언마운트 시에 필요한 정리 작업 수행
      chart.destroy();
    };
  }, [periodic, disability, maintenance]);

  return <div ref={containerRef} id="chart-area" />;
};

export default EnglChartComponent;