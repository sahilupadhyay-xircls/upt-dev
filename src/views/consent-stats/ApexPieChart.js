import React from 'react'
import Chart from 'react-apexcharts'

const ApexPieChart = () => {
  const options = {
    chart: {
      type: 'pie'
    },
    labels: ['Category 1', 'Category 2', 'Category 3', 'Category 4']
  }

  const series = [300, 50, 100, 230]

  return (
    <div className='d-flex justify-content-center'>
      <Chart options={options} series={series} type='pie' width={400} />
    </div>
  )
}

export default ApexPieChart
