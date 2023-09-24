import React, { useEffect, useRef } from 'react';
import Chart from 'tui-chart';
import 'tui-chart/dist/tui-chart.css';

const ChartComponent1 = ({ periodic, disability, maintenance, mainProjectList }) => {
  const containerRef = useRef(null);
  console.log(mainProjectList);
  const uniqueCategories = [...new Set(mainProjectList.map(item => item.pro_name))];

  
  useEffect(() => {
    const container = containerRef.current;
    
    const data = {
      categories: uniqueCategories, // Corrected property name
      series: [
        {
          name: '정기점검',
          data: periodic.length !== 0 ? periodic : [0, 0, 0, 0],
        },
        {
          name: '장애대응',
          data: disability.length !== 0 ? disability : [0, 0, 0 ,0],
        },
        {
          name: '긴급점검',
          data: maintenance.length !== 0 ? maintenance : [0, 0, 0 ,0],
        },
      ],
    };
    const options = {
      chart: { title: '', width: 1100, height: 400 },
    };

    const chart = new Chart.columnChart(container, data, options);

    return () => {
      // Component cleanup: destroy the chart
      chart.destroy();
    };
  }, [periodic, disability, maintenance, mainProjectList]);

  return <div ref={containerRef} id="chart-area" />;
};

export default ChartComponent1;
