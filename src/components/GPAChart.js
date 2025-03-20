import React, { useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const GPAChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartInstance = chartRef.current;

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);

  const chartData = {
    labels: data.map((trend) => trend.semester),
    datasets: [
      {
        label: 'Average GPA',
        data: data.map((trend) => trend.average_gpa),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      title: {
        display: true,
        text: 'GPA Trends Over Time',
      },
    },
    scales: {
      x: {
        type: 'category',
        title: {
          display: true,
          text: 'Semester',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Average GPA',
        },
        min: 0,
        max: 4,
      },
    },
  };

  return <Line ref={chartRef} data={chartData} options={options} />;
};

export default GPAChart;