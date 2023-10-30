import React from 'react'
import ReactApexChart from 'react-apexcharts'

export default function S4() {
    const series = [88, 75];
    const options = {
        chart: {
            height: 300,
            type: 'radialBar',
            width: 150
        },
        plotOptions: {
            radialBar: {

                dataLabels: {
                    name: {
                        fontSize: '5px',
                        fontWeight: 400

                    },
                    value: {
                        fontSize: '25px',
                        fontWeight: 700,
                        color: "#3085C3"
                    },
                    total: {
                        show: true,
                        label: 'Total',
                        color:'black',
                        formatter: function (w) {
                            // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                            return 130
                        }
                    }
                },
                hollow: {
                    margin: 10,
                    size: '80%',

                },
                track: {
                    show: true,
                    background: '#F0F0F0',
                    strokeWidth: '97%',
                    opacity: 1,
                    // margin: 15,
                },


            }
        },
        fill: {
            type: 'solid',
            colors: ['#7D7C7C', '#3085C3'],

        },
        stroke: {
            lineCap: 'round'
        },
        labels: ['Apples', 'Oranges'],
    }
    return (
        <div>
            <h2>S4</h2>



            <ReactApexChart options={options} series={series} type="radialBar" height={300} width={300} />
        </div>

    )
}
