import React from 'react'
import ReactApexChart from 'react-apexcharts'

export const SfDashboardBarChart = (props) => {
  const data_keys = Object.keys(props.data ? props.data : 'nothing')
  const data_value = Object.values(props.data ? props.data : 'nothing')
  console.log(props.data, "ppp")

  const state = {
    series: [
      {
        name: 'Activities',
        data: data_value,
        color: "#6d82f3"
      }
    ],
    options: {
      chart: {
        height: 350,
        type: 'bar'
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          dataLabels: {
            position: 'top' // top, center, bottom
          }
        }
      },
      title: {
        // text: 'Monthly Inflation in Argentina, 2002',
        floating: true,
        offsetY: 330,
        align: 'center',
        style: {
          color: '#444'
        }
      },
      dataLabels: {
        enabled: true,
        // formatter: function (val) {
        //   return val + "%"
        // },
        offsetY: -20,
        style: {
          fontSize: '12px',
          colors: ["#6d82f3"]
        }
      },
      xaxis: {
        categories: data_keys,
        // ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        position: 'top',
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        crosshairs: {
          fill: {
            type: 'gradient',
            gradient: {
              colorFrom: '#6d82f3',
              colorTo: '#6d82f3',
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5
            }
          }
        },
        tooltip: {
          enabled: true
        }
      },
      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false
        //   formatter: function (val) {
        //     return val + "%"
        //   }
        }
      }
    }
  }

  return (
    <div id="chart" className='bar-chart'>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="bar"
        height={220}
      />
    </div>
  )
}

export default SfDashboardBarChart