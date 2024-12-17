import React from 'react';
import Plot from 'react-plotly.js';
import { ChartProps } from '../../types/type';
import { Data, Layout } from 'plotly.js';


const LineChart:React.FC<ChartProps> = ({ data }) => {
  // Create x-axis points (using the same value for start and end to create horizontal lines)
  const xValues = [0, 1]; // This will create horizontal lines

  const traces: Data[] = [
    {
      name: 'Total Cases',
      x: xValues,
      y: [data.totalCases, data.totalCases], // Same y-value for horizontal line
      type: 'scatter',
      mode: 'markers', // Correct mode for markers
      line: {
        color: '#36A2EB',
        width: 5,
      },
    },
    {
      name: 'Active Cases',
      x: xValues,
      y: [data.activeCases, data.activeCases],
      type: 'scatter',
      mode: 'lines',
      line: {
        color: '#FFB347',
        width: 5,
      },
    },
    {
      name: 'Recovered',
      x: xValues,
      y: [data.recovered, data.recovered],
      type: 'scatter',
      mode: 'lines',
      line: {
        color: '#77DD77',
        width: 5,
      },
    },
    {
      name: 'Deaths',
      x: xValues,
      y: [data.deaths, data.deaths],
      type: 'scatter',
      mode: 'lines',
      line: {
        color: '#FF6961',
        width: 5,
      },
    },
  ];

  const layout: Partial<Layout> = {
    title: `Current COVID-19 Statistics for ${data.state}`,
    height: 400,
    width:1100,
    margin: { l: 50, r: 50, t: 50, b: 50 },
    xaxis: {
      showgrid: false,
      zeroline: false,
      showticklabels: false, // Hide x-axis labels since they're not meaningful
      fixedrange: true, // Disable x-axis zooming
    },
    yaxis: {
      title: 'Number of Cases',
      showgrid: true,
      gridcolor: '#E1E1E1',
      zeroline: false,
    },
    showlegend: true,
    legend: {
      orientation: 'h',
      yanchor: 'bottom',
      y: -0.2,
      xanchor: 'center',
      x: 0.5,
    },
    hovermode: 'closest',
    // Add shapes for dotted vertical lines (optional)
    shapes: [
      {
        type: 'line',
        x0: 0,
        x1: 0,
        y0: 0,
        y1: Math.max(data.totalCases, data.activeCases, data.recovered, data.deaths),
        line: {
          color: '#E1E1E1',
          width: 1,
          dash: 'dot',
        },
      },
      {
        type: 'line',
        x0: 1,
        x1: 1,
        y0: 0,
        y1: Math.max(data.totalCases, data.activeCases, data.recovered, data.deaths),
        line: {
          color: '#E1E1E1',
          width: 1,
          dash: 'dot',
        },
      },
    ],
  };

  const config = {
    responsive: true,
    displayModeBar: false,
    staticPlot: false, // Makes it non-interactive if set to true
  };

  return (
    <div className=" bg-white p-4  rounded-lg shadow-md w-90  mt-2   ">
      <Plot data={traces} layout={layout} config={config} />
    </div>
  );
};

export default LineChart;
