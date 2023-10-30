import React from 'react'
import ReactApexChart from 'react-apexcharts'

export default function SfDashboardCERadialChart() {
  const options = {
    series: [46],
    chart: {
    //   height: 50,
      type: 'radialBar',
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 3000
      }
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: '70%'
        }
      }
    },
    labels: ['CE']
  }

  return (
    <div>
      <ReactApexChart options={options} series={options.series} type={'radialBar'} height={150} />
    </div>
  )
}
