import React from 'react'
import ReactApexChart from 'react-apexcharts'

export default function SfOrderAndRevenuePolarChart() {

    const options = {
        series: [14, 23, 21, 17, 15, 10],
        labels: ['Loyalty Program', 'Email Marketing', 'Pop Ups', 'Loyalty Program', 'Email Marketing', 'Pop Ups'],
        chart: {
            type: 'polarArea'
        },
        fill: {
            opacity: 0.8
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: 150
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        ]
    }

    return (
        <div><ReactApexChart options={options} series={options.series} type={'polarArea'} height={350} /></div>
    )
}
