import React from 'react'
import ReactApexChart from 'react-apexcharts'

export default function S3() {
    const series = [{
        name: 'Day',
        data: [440, 550, 570, 560, 610, 580, 630, 600, 660, 440, 550, 570, 560, 610, 560, 610, 580, 630, 600, 660, 440, 550, 570, 580, 630, 600, 660, 440, 550, 570, 560, 610, 580, 630, 600, 660],
        color: "#687EFF"
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
                columnWidth: '25px',
                endingShape: 'rounded',
                borderRadius: 5,
            },
        },
        dataLabels: {
            enabled: false
        },

        xaxis: {
            type:'datetime',
            categories: ['2020-04-10T01:28:14.0406387Z', '2020-04-12T01:28:14.0406387Z', '2020-04-14T01:28:14.0406387Z', '2020-04-16T01:28:14.0406387Z', '2020-04-18T01:28:14.0406387Z',  '2020-04-20T01:28:14.0406387Z', '2020-04-22T01:28:14.0406387Z','2020-04-24T01:28:14.0406387Z', '2020-04-26T01:28:14.0406387Z', '2020-04-28T01:28:14.0406387Z',  '2020-04-30T01:28:14.0406387Z', '2020-04-22T01:28:14.0406387Z',
            '2020-05-02T01:28:14.0406387Z','2020-05-04T01:28:14.0406387Z','2020-05-08T01:28:14.0406387Z','2020-05-10T01:28:14.0406387Z', '2020-05-12T01:28:14.0406387Z', '2020-05-16T01:28:14.0406387Z', '2020-05-18T01:28:14.0406387Z',  '2020-05-20T01:28:14.0406387Z', '2020-05-22T01:28:14.0406387Z'],
            tickPlacement: 'on',
        },
        fill: {
            opacity: .8,

        },
        legend: {
            show: true,
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
            <h4>S3</h4>
            <div id="chart">
                <ReactApexChart options={options} series={series} type="bar" height={350} />
            </div>
        </div>
    )
}
