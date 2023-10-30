import React from 'react'
import ReactApexChart from 'react-apexcharts'

export default function S1() {
    const series = [{
        name: 'Day',
        data: [44000, 55000, 57000, 56000, 61000, 58000, 63000, 60000, 66000],
        color: "#000"
    }, {
        name: 'Week',
        data: [76000, 85000, 101000, 98000, 87000, 105000, 91000, 114000, 94000],
        color: "#F99417"
    }, {
        name: 'Month',
        data: [35000, 41000, 36000, 26000, 45000, 48000, 52000, 53000, 41000],
        color: "#6499E9"
    }]
    const options = {
        chart: {
            type: 'bar',
            height: 500,
            toolbar: {
                show: false,
            }
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '30px',
                endingShape: 'rounded'
            },
        },
        dataLabels : {
          enabled:false,
          
        },
        stroke: {
            show: true,
            width: 5,
            colors: ['transparent']
        },
        xaxis: {
            categories: ['12.00', '12.00', '13.00', '14.00', '15.00', '16.00', '17.00', '18.00', '19.00'],
        },
        fill: {
            opacity: .7,
            colors: ['#000', '#F99417', '#6499E9']
        },
        legend: {
            show:true,
            position: 'top',
            horizontalAlign: 'right',
            markers: {
                width: 25,
                height: 8,
                strokeWidth: 0,
                radius: 8,
                onClick: undefined,
                offsetX: 0,
                offsetY: 0
            },
        }

    }
    return (
        <div>
            <div id="chart">
                <ReactApexChart options={options} series={series} type="bar" height={350} />
            </div>
        </div>
    )
}
