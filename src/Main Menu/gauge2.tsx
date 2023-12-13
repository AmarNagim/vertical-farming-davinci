import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';
import ApexCharts from 'apexcharts';

interface State {
  options: ApexCharts.ApexOptions;
  series: number[];
}

class GaugeChart extends Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      options: {
        chart: {
          type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            hollow: {
              margin: 15,
              size: '55%',
            },
            dataLabels: {
              show: true,
              name: {
                fontSize: '24px',
              },
              value: {
                fontSize: '20px',
              },
            },
          },
        },
        labels: ['Humidity'],
        stroke: {
          lineCap: 'round', // Use 'round' to make it a stroked gauge
        },
        
      },
      series: [48], // Initial value for the gauge
    };
  }

  render() {
    const gaugeContainerStyle: React.CSSProperties = {
      display: 'flex',
      flexDirection: 'column',
    };

    const apexChartContainerStyle: React.CSSProperties = {
      marginTop: '-50px', // Adjust this value to move the gauge closer to the text
      color: '#FF000', // Set the color you want
    };

    return (
      <div style={gaugeContainerStyle}>
        <h2>Humidity Gauge</h2>
        <p>Layer 1 </p>

        <div style={apexChartContainerStyle}>
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="radialBar"
            height={300}
          />
        </div>
      </div>
    );
  }
}

export default GaugeChart;
