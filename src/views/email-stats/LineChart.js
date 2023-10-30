import React from 'react'
import { Line } from 'react-chartjs-2'

const LineChart = (props) => {
  const { selectedOptions } = props

  const optionsList = []
  const datasets = []
  const dataList = [
    [1200, 1800, 3800, 3000, 1500, 3500, 2500, 4000],
    [500, 1500, 3300, 1100, 2000, 3800, 1200, 2800],
    [500, 2500, 3500, 1900, 2300, 3300, 1300, 2200],
    [800, 1800, 3300, 1200, 2800, 3200, 1800, 2800],
    [700, 1400, 3400, 1900, 2600, 3700, 1900, 2300],
    [600, 1600, 3600, 1800, 2400, 3900, 1700, 2500],
    [300, 1700, 3700, 1300, 2200, 3500, 1500, 2600],
    [900, 1900, 3200, 1500, 2700, 3800, 1600, 2900],
    [800, 1500, 2800, 1700, 2900, 3100, 1100, 2700],
    [600, 1100, 3300, 1600, 2100, 3600, 1200, 2100]
  ]

  const chartOptions = [
    { 
        title:"Sends",
        color: 'rgba(70, 141, 224, 255)'
    },
    { 
        title:"Deliveries",
        color: 'rgba(97, 213, 227, 255)'
    },
    { 
        title:"Total Opens",
        color: 'rgba(246, 191, 51, 255)'
    },
    { 
        title:"Unique Opens",
        color: 'rgba(205, 121, 196, 255)'
    },
    { 
        title:"Unique Clicks",
        color: 'rgba(238, 138, 88, 255)'
    },
    { 
        title:"Other Clicks",
        color: 'rgba(66, 115, 173, 255)'
    },
    { 
        title:"Bounces",
        color: 'rgba(71, 165, 178, 255)'
    },
    { 
        title:"Unsubscribes",
        color: 'rgba(178, 221, 167, 255)'
    }
]

  selectedOptions?.forEach(element => {
    const findOptions = chartOptions.find(ele => ele.title === element)
    optionsList.push(findOptions)
  })

  optionsList.forEach((ele, index) => {
    const details = {
      label: ele.title,
        data: dataList[index],
        borderColor: ele.color,
        borderWidth: 2
    }
    datasets.push(details)
  })

  const data = {
    labels: ['Jun 26', 'Jun 27', 'Jun 28', 'Jun 29', 'Jun 30', 'Jul 1', 'Jul 2', 'Jul 3'],
    datasets
  }

  const options = {
    maintainAspectRatio: true,
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          display: false 
        },
        title: {
          display: true,
          text: 'Date'
        }
      },
      y: {
        beginAtZero: true,
        grid: {
          display: false 
        },
        title: {
          display: true,
          text: 'Value' 
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
        radius: 0
      }
    }
  }

  return (
    <div className='w-75'>
      <Line data={data} options={options} />
    </div>
  )
}

export default LineChart
