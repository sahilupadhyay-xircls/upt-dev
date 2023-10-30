import React from 'react'
import { Bar } from 'react-chartjs-2'

const DoubleBarChart = () => {
  const data = {
    labels: ['Category 1', 'Category 2', 'Category 3'],
    datasets: [
      {
        label: 'Value 1',
        data: [100, 150, 150],
        backgroundColor: 'rgba(70, 141, 224, 0.6)',
        borderColor: 'rgba(70, 141, 224, 1)',
        borderWidth: 1
      },
      {
        label: 'Value 2',
        data: [80, 120, 180],
        backgroundColor: 'rgba(97, 213, 227, 0.6)',
        borderColor: 'rgba(97, 213, 227, 1)',
        borderWidth: 1
      }
    ]
  }

  const options = {
    maintainAspectRatio: false,
    indexAxis: 'x', 
    responsive: true,
    scales: {
      x: {
        stacked: false,
        grid: {
          display: false
        }
      },
      y: {
        stacked: false  
      }
    },
    plugins: {
        legend: {
          display: false
        }
    }
  }

  return (
    <div className='d-flex justify-content-center mt-2' style={{height: "450px"}}>
      <Bar data={data} options={options} />
    </div>
  )
}

export default DoubleBarChart
