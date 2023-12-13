import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';
import ApexCharts from 'apexcharts';


interface State {
  series: {
    name: string;
    data: number[];
  }[];
  options: ApexCharts.ApexOptions;
}

class LineChart extends Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      series: [
        {
          name: 'Series 1',
          data: [12, 13, 16, 18, 21, 23, 22, 20],

        },
      ],
      options: {
        chart: {
          type: 'line',
          width: '0%', 
          height: 100, 
        },
        xaxis: {
          categories: ['03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:10'],
          title: {
            text: 'Time', // X-axis label
            offsetY: -10,
          },
        },
        yaxis: {
          title: {
            text: 'Temperature', // Y-axis label
          },
        },
        fill: {
            colors: ['#ff0000'],
          },
        },
        stroke: {
            colors: ['#FF000'], // Change this color to the desired line color
          },
          dataLabels: {
            style: {
              colors: ['#FF000'],
            },
        },
    };
  }

  render() {
    return (
      <div>
        <h2>Temperature</h2>
        <p>Layer 1 </p>
        
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="area"
          height={200}
        />
      </div>
    );
  }
}






export default LineChart;
