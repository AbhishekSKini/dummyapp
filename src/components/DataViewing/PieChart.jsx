import React from 'react';
import Plot from 'react-plotly.js';

const PieChart = ({ data }) => {
    // Calculate total for percentage calculation
    const total = data.totalCases + data.activeCases + data.recovered + data.deaths;

    // Calculate percentages
    const values = [
        (data.activeCases / total) * 100,
        (data.recovered / total) * 100,
        (data.deaths / total) * 100
    ];

    const labels = ['Active Cases', 'Recovered', 'Deaths'];
    const colors = ['#FFB347', '#77DD77', '#FF6961'];

    return (
        <div className="pie-chart-container">
            <Plot
                data={[
                    {
                        values: values,
                        labels: labels,
                        type: 'pie',
                        hole: 0.4,
                        marker: {
                            colors: colors
                        },
                        textinfo: 'label+percent',
                        hoverinfo: 'label+value+percent',
                        textposition: 'outside',
                    }
                ]}
                layout={{
                    title: `COVID-19 Statistics Distribution for ${data.state}`,
                    height: 400,
                    width: 500,
                    showlegend: true,
                    legend: {
                        orientation: 'v',
                        y: -0.1
                    }
                }}
                config={{
                    responsive: true,
                    displayModeBar: false
                }}
            />
        </div>
    );
};

export default PieChart;