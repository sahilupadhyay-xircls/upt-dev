import React, { Component } from "react"
import Chart from "react-apexcharts"

class Charts extends Component {
  constructor(props) {
    super(props)
    console.log(this.props.color)

    this.state = {
          
        series: [70],
        options: {
            colors: [this.props.color],
            chart: {
            height: 150,
            type: 'radialBar'
          },
          plotOptions: {
            radialBar: {
              hollow: {
                size: '65%'
              }
            }
          },
          stroke: {
                lineCap: 'round'
            },
          labels: []
        }
      }
    }

  render() {
    return (
        <Chart
            options={this.state.options}
            series={this.state.series}
            type="radialBar"
            height={150}
        />
    )
  }
}

export default Charts