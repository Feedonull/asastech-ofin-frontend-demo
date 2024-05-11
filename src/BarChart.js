// BarChart.js
import React from 'react';
import { Bar as HorizontalBar } from 'react-chartjs-2';

const BarChart = ({ data }) => {
  const chartData = {
    labels: data.map(item => item.year),
    datasets: [
      {
        label: 'Percentage Increase',
        backgroundColor: 'rgba(75,192,192,0.6)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        data: data.map(item => item.percentageIncrease)
      }
    ]
  };

  return (
    <div>
      <HorizontalBar
        data={chartData}
        options={{
          scales: {
            xAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }}
      />
    </div>
  );
};

export default BarChart;
