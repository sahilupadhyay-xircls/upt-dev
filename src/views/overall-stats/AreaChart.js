import React from 'react'
import { Line } from 'react-chartjs-2'

const AreaChart = () => {
  const createGradient = () => {
    const ctx = document.createElement('canvas').getContext('2d')
    const gradient = ctx.createLinearGradient(200, 0, 0, 0)
    gradient.addColorStop(0, 'rgba(70, 141, 224, 0.6)')
    gradient.addColorStop(0.3, 'rgba(70, 141, 224, 0.4)')
    gradient.addColorStop(0.7, 'rgba(70, 141, 224, 0.2)')
    gradient.addColorStop(1, 'rgba(70, 141, 224, 0)')
    return gradient
  }

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Area',
        data: [4000, 2500, 1700, 1300, 1000, 800, 700],
        backgroundColor: createGradient(), 
        borderColor: 'rgba(70, 141, 224, 1)', 
        borderWidth: 2,
        fill: 'start',
        tension: 0.4 
      }
    ]
  } 

  const options = {
    maintainAspectRatio: false,
    scales: {
      x: {
        display: false,
        beginAtZero: false,
        grid: {
          display: false
        }
      },
      y: {
        display: false,
        beginAtZero: false,
        grid: {
          display: false
        }
      }
    },
    plugins: {
      legend: {
        display: false
      }
    },
    elements: {
      point: {
        radius: 0 // Remove circles at intersection points
      }
    }
  } 

  return (
    <div className=' mt-2' style={{height: "300px"}}>
      <Line data={data} options={options} />
    </div>
  ) 
} 

export default AreaChart 

