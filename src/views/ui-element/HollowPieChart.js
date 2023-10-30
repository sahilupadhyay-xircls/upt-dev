import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import './HollowPieChart.css' // Import your CSS file

const HollowPieChart = ({ percentage, percentage1, color1, color2, color3}) => {
  const data = {
    datasets: [
      {
        data: [percentage, 100 - percentage, percentage - percentage1],
        backgroundColor: [color1, color2, color3], // Adjust colors as needed
        borderWidth: 0
      }
    ]
  }

  const options = {
    cutout: '72%', // Adjust the inner radius for the hollow effect
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: false
      }
    }
  }

  return (
    <div className="hollow-pie-chart">
      <div className="percentage">{percentage}%</div>
      <Doughnut data={data} options={options} />
    </div>
  )
}

export default HollowPieChart
