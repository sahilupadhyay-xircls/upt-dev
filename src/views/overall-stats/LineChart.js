import React from 'react'
import { Line } from 'react-chartjs-2'

const LineChart = (props) => {
  let {campaign} = props
  campaign = campaign.replace(" ", "_")

  const campaignData = {
    All_Campaigns: {
      data: [1000, 1500, 1500, 2300, 2800, 3200],
      backgroundColor: 'rgba(70, 141, 224, 0.3)',
      borderColor: 'rgba(70, 141, 224, 1)'
    },
    Broadcast_Campaign: {
      data: [1000, 1500, 1500, 2300, 2800, 3200],
      backgroundColor: 'rgba(255, 182, 114, 0.3)',
      borderColor: 'rgba(255, 182, 114, 1)'
    },
    Triggered_Campaign: {
      data: [1000, 1500, 1500, 2300, 2800, 3200],
      backgroundColor: 'rgba(116, 105, 239, 0.3)',
      borderColor: 'rgba(116, 105, 239, 1)'
    },
    Segmented_Campaign: {
      data: [1000, 1500, 1500, 2300, 2800, 3200],
      backgroundColor: 'rgba(90, 200, 140, 0.3)',
      borderColor: 'rgba(90, 200, 140, 1)'
    },
    Campaign4: {
      data: [1000, 1500, 1500, 2300, 2800, 3200],
      backgroundColor: 'rgba(236, 107, 108, 0.3)',
      borderColor: 'rgba(236, 107, 108, 1)'
    },
    Campaign5: {
      data: [1000, 1500, 1500, 2300, 2800, 3200],
      backgroundColor: 'rgba(255, 255, 56, 0.3)',
      borderColor: 'rgba(255, 255, 56, 1)'
    }

  }

  const createGradient = (bgColor) => {
    const ctx = document.createElement('canvas').getContext('2d')
    const gradient = ctx.createLinearGradient(0, 0, 0, 200)
    gradient.addColorStop(0, bgColor)
    gradient.addColorStop(1, 'rgba(255, 255,255, 1)')
    return gradient
  }

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: campaign,
        data: campaignData[campaign]?.data,
        backgroundColor: createGradient(campaignData[campaign]?.backgroundColor),
        borderColor: campaignData[campaign]?.borderColor,
        borderWidth: 2,
        fill: true,
        pointBackgroundColor: (context) => {
          const index = context.dataIndex
          return index === context.dataset.data.length - 1 ? campaignData[campaign]?.borderColor : 'transparent'
        }, // Set color for the last point
        pointBorderWidth: 2,
        pointRadius: (context) => {
          const index = context.dataIndex
          return index === context.dataset.data.length - 1 ? 4 : 0
        }
      }
    ]
  }

  const options = {
    maintainAspectRatio: false,
    scales: {
      x: {
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
    <div className='h-75' style={{width: "60%"}}>
      <Line data={data} options={options} />
    </div>
  )
}

export default LineChart
