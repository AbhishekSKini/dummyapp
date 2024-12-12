import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import PieChart from './PieChart';
import LineChart from './LineChart';
import MapView from './MapView';

const DataView = () => {
    const [selectedState, setSelectedState] = useState("Countrywide");
    const covidDataFromStore = useSelector((state)=>state.covidDataStore.data);
    const [covidData, setCovidData] = useState([]);

    useEffect(()=>{
        setCovidData(covidDataFromStore);
    },[covidDataFromStore])

    // Get countrywide total by summing up all state values
    const countrywideData = {
        state: "Countrywide",
        totalCases: covidData.reduce((sum, data) => sum + (data.totalCases || 0), 0),
        activeCases: covidData.reduce((sum, data) => sum + (data.activeCases || 0), 0),
        recovered: covidData.reduce((sum, data) => sum + (data.recovered || 0), 0),
        deaths: covidData.reduce((sum, data) => sum + (data.deaths || 0), 0),
    };
  
    const filteredData = selectedState === "Countrywide" 
        ? countrywideData 
        : (covidData.find((data) => data.state === selectedState) || {
            totalCases: 0,
            activeCases: 0,
            recovered: 0,
            deaths: 0,
        });

    // Prepare time series data for the selected state
    const getTimeSeriesData = () => {
        if (selectedState === "Countrywide") {
            // Return countrywide aggregated data
            return covidData.map(data => ({
                totalCases: data.totalCases,
                activeCases: data.activeCases,
                recovered: data.recovered,
                deaths: data.deaths
            }));
        } else {
            // Return data for selected state
            return [filteredData];
        }
    };

    return (
        <div style={{ padding: "20px" }}>
            <h1>COVID-19 Statistics</h1>
            
            {/* Dropdown Filter */}
            <div style={{ marginBottom: "20px" }}>
                <label htmlFor="stateFilter">Filter by State: </label>
                <select
                    id="stateFilter"
                    value={selectedState}
                    onChange={(e) => setSelectedState(e.target.value)}
                >
                    <option value="Countrywide">Countrywide</option>
                    {covidData.map((data) => (
                        <option key={data.state} value={data.state}>
                            {data.state}
                        </option>
                    ))}
                </select>
            </div>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                {/* Cards */}
                <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                    <div className="card">
                        <h2>Total Cases</h2>
                        <p>{filteredData.totalCases.toLocaleString()}</p>
                    </div>
                    <div className="card">
                        <h2>Active Cases</h2>
                        <p>{filteredData.activeCases.toLocaleString()}</p>
                    </div>
                    <div className="card">
                        <h2>Recovered</h2>
                        <p>{filteredData.recovered.toLocaleString()}</p>
                    </div>
                    <div className="card">
                        <h2>Deaths</h2>
                        <p>{filteredData.deaths.toLocaleString()}</p>
                    </div>
                </div>

                {/* Pie Chart */}
                <div style={{ marginTop: '20px', width: '100%' }}>
                    <PieChart data={filteredData} />
                </div>

                {/* Map View */}
                <MapView data={filteredData} />

                {/* Add Line Chart */}
                <div style={{ marginTop: "30px" }}>
                    <LineChart data={filteredData} />
                </div>
            </div>
        </div>
    );
}

export default DataView;
