import Plot from 'react-plotly.js';
import { ChartProps } from "../../types/type";

const PieChart: React.FC<ChartProps> = ({ data }) => {
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
        <div className=" bg-white p-4  rounded-lg shadow-md  mt-2">
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
                    width: 1100,
                    showlegend: true,
                    legend: {
                        orientation: 'v',
                        y: -0.1,
                        x: 0
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