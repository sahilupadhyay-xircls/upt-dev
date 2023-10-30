import React from 'react'
import ReactApexChart from 'react-apexcharts'

export default function SfDashboardAOVRadialChart({aov}) {
  // console.log({aov}, 'dddd')

  const options = {
    series: [aov],
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
    labels: ['AOV']
  }

  return (
    <div>
      <ReactApexChart options={options} series={options.series} type={'radialBar'} height={150} />
    </div>
  )
}
