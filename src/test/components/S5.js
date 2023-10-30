import React from 'react'
import ReactApexChart from 'react-apexcharts'

export default function S5() {

    const series = [{
        name: 'series1',
        data: [10, 20, 30, 40, 50, 20, 10]
    }, {
        name: 'series2',
        data: [10, 15, 20, 25, 30, 15, 10]

    }]
    const options = {
        chart: {
            height: 350,
            type: 'area',
            toolbar: {
                show: false,}
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight'
        },
        xaxis: {
            type: 'year',
            categories: ["2023", "2024", "2025", "2026", "2027", "2028", "2029"]
        },
        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm'
            },
        },
        plotOptions: {
            area: {
                fillTo: 'end',
            }
        },
        legend: {
            show:true,
            position: 'top',
            horizontalAlign: 'center',
            markers: {
                width: 25,
                height: 8,
                strokeWidth: 0,
                radius: 8,
                onClick: undefined,
                offsetX: 0,
                offsetY: 0
            },
        },
       
    }
    return (
        <div> 
            <h1>S5</h1>
            <h4 className='ms-2' style={{marginBottom:"-20px"}}>Status : <span className='btn btn-sm bg-success text-white px-1 fs-6  rounded-3' >On Target</span> </h4>
            <ReactApexChart options={options} series={series} type="area" height={350} />
        </div>
    )
}
