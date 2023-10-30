import React from 'react'
import ReactApexChart from 'react-apexcharts'

export default function SfDashboardLineChart (props) {
  // const data_keys = Object.keys(props.data ? props.data : 'nothing')
  const data_value = Object.values(props.data ? props.data : 'nothing')
  console.log(props.data, "ppp")

  const series = [
    {
    name: 'Revenue',
    data: data_value,
    color: '#0143ff'
  }
]
    const options = {
    chart: {
      height: 350,
      type: 'area'
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    grid: {
          row: {
            colors: ['#f8f8f891', 'transparent'],
            opacity: 0.1
          }
        },
    xaxis: {
      // type: 'datetime',
      //   categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
    },
    tooltip: {
      // x: {
      //   format: 'dd/MM/yy HH:mm'
      // },
    }
  }
  return (
    <div id="chart" className='line-chart'>
      <ReactApexChart options={options} series={series} type="area" height={140} />
    </div>
  )
}