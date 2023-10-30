import React from 'react'
import ReactApexChart from 'react-apexcharts'

export default function Sales() {

    function generateData(count, yrange) {
        var i = 0;
        var series = [];
        while (i < count) {
          var x = "w" + (i + 1).toString();
          var y =
            Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    
          series.push({
            x: x,
            y: y
          });
          i++;
        }
        return series;
      }
    const series = [{
        name: 'Metric1',
        data: generateData(8, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Metric2',
        data: generateData(8, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Metric3',
        data: generateData(8, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Metric4',
        data: generateData(8, {
          min: 0,
          max: 90
        })
      },
     
      
      ]
      const options = {
        chart: {
          height: 350,
          width:400,
          type: 'heatmap',
          toolbar: {
            show: false,}
        },
        dataLabels: {
          enabled: false
        },
        colors: ["#000"],
        title: {
          text: 'Sales HeatMap',
          align: 'left',
          margin: 10,
          offsetX: 0,
          offsetY: 0,
          floating: false,
          style: {
            fontSize:  '14px',
            fontWeight:  'normal',
            color:  '#263238'
          },
        },
        xaxis:{
            labels:{
                show:false
            }
        },
        yaxis:{
            labels:{
                show:false
            }
        }

      }
  return (
    <div>
        <h1>Sales</h1>
        <ReactApexChart options={options} series={series} type="heatmap" height={350} />
    
    </div>
  )
}
