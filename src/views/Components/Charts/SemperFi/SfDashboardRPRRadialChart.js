import React from 'react'
import ReactApexChart from 'react-apexcharts'

export default function SfDashboardRPRRadialChart() {
  const options = {
    series: [70],
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
    labels: ['RPR']
  }

  return (
    <div>
      <ReactApexChart options={options} series={options.series} type={'radialBar'} height={150} />
    </div>
  )
}
