// LineChart.js
import React, { useState } from 'react'
import { Line } from 'react-chartjs-2'
import './LineChart.css'

const LineChart = () => {
  const [selectedData, setSelectedData] = useState('delivered') // Default selection

  const datasets = {
    delivered: {
      label: 'Delivered',
      data: [50, 75, 60, 90, 120], // Example data for delivered
      borderColor: '#007bff' // Example line color
    },
    uniqueClicks: {
      label: 'Unique Clicks',
      data: [30, 45, 35, 60, 80], // Example data for unique clicks
      borderColor: '#28a745' // Example line color
    },
    uniqueConversions: {
      label: 'Unique Conversions',
      data: [10, 15, 12, 20, 25], // Example data for unique conversions
      borderColor: '#dc3545' // Example line color
    },
    revenue: {
      label: 'Revenue',
      data: [100, 150, 130, 180, 220], // Example data for revenue
      borderColor: '#ffc107' // Example line color
    }
  }

  const selectedDataset = datasets[selectedData]

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'], // Example labels
    datasets: [selectedDataset]
  }

  const handleRadioChange = (event) => {
    setSelectedData(event.target.value)
  }

  return (
    <div className="line-chart">
      <div className="radio-buttons">
        {Object.keys(datasets).map((key) => (
          <label key={key}>
            <input
              type="radio"
              value={key}
              checked={selectedData === key}
              onChange={handleRadioChange}
            />
            {datasets[key].label}
          </label>
        ))}
      </div>
      <Line data={data} />
    </div>
  )
}

export default LineChart
