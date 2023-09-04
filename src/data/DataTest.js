import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';

Chart.register(CategoryScale);

function DataTest() {
  const [serverData, setServerData] = useState([]);
  const [historicalData, setHistoricalData] = useState({});
  const chartRefs = useRef({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/servers');
        const newServerData = response.data;

        // 서버 데이터를 ID별로 그룹화
        const groupedData = newServerData.reduce((acc, server) => {
          const { id } = server;
          if (!acc[id]) {
            acc[id] = [];
          }
          acc[id].push(server);
          return acc;
        }, {});

        // 현재 시각을 생성
        const currentTime = new Date().toLocaleTimeString();

        // 현재 데이터를 이전 데이터와 결합
        setHistoricalData((prevData) => {
          // 이전 데이터 복사
          const newData = { ...prevData };

          // 새 데이터 추가 또는 업데이트
          Object.keys(groupedData).forEach((id) => {
            if (!newData[id]) {
              newData[id] = [];
            }
            // 현재 데이터에 시간 정보 추가
            const newDataPoints = groupedData[id].map((server) => ({
              ...server,
              time: currentTime,
            }));
            newData[id] = [...newData[id], ...newDataPoints];

            // 최대 10개의 데이터만 유지
            newData[id] = newData[id].slice(-4);
          });

          return newData;
        });

        setServerData(newServerData);
      } catch (error) {
        console.error('Error fetching server data:', error);
      }
    };

    fetchData(); // 초기 데이터 가져오기

    const interval = setInterval(() => {
      fetchData(); // 3초마다 데이터 가져오기
    }, 1000);

    return () => {
      clearInterval(interval); // 컴포넌트 언마운트 시 clearInterval 호출
    };
  }, []);

  // 각 서버 ID에 대한 차트 데이터 생성
  const chartDataByServer = Object.keys(historicalData).map((serverId) => {
    return {
      labels: historicalData[serverId].map((server) => server.time), // 시간 정보를 레이블로 사용
      datasets: [
        {
          label: `CPU Usage (Server ${serverId})`,
          data: historicalData[serverId].map((server) => server.cpuUsage),
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
        {
          label: `Memory Usage (Server ${serverId})`,
          data: historicalData[serverId].map((server) => server.memoryUsage),
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
        },
        {
          label: `RAM Usage (Server ${serverId})`,
          data: historicalData[serverId].map((server) => server.ramUsage),
          backgroundColor: 'rgba(255, 205, 86, 0.2)',
          borderColor: 'rgba(255, 205, 86, 1)',
          borderWidth: 1,
        },
      ],
    };
  });

  // y축 스케일 설정
  const options = {
    scales: {
      y: {
        min: 0,
        max: 100,
        ticks: {
          stepSize: 5, // y축 간격 조절
        },
        title: {
          display: true,
          text: 'Usage (%)', // y축 라벨
        },
      },
    },
  };

  // 각 서버 ID에 대한 차트를 렌더링
  return (
    <div>
      <h1>실시간 서버 확인</h1>
      <div className="row">
        {Object.keys(historicalData).map((serverId, index) => (
          <div key={serverId} className='serverChart' style={{width:'33.3333%'}}>
            <Line data={chartDataByServer[index]} ref={(ref) => (chartRefs.current[serverId] = ref)} options={options} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default DataTest;
