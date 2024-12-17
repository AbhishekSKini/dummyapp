import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import PieChart from './PieChart';
import LineChart from "./LineChart"
import MapView from './MapView';
import { RootState } from '../../redux/store';
import { CovidDataItem } from "../../types/type";
const DataView = () => {
    const [selectedState, setSelectedState] = useState<string>("Countrywide");
    
    // UseSelector with RootState to get the typed state
    const covidDataFromStore = useSelector((state: RootState) => state.covidDataStore.data);

    const [covidData, setCovidData] = useState<CovidDataItem[]>([]);

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

   

    return (
        <div className=' ml-10 mr-10 mt-10'>
           <h1 className='text-gray-700 text-lg font-normal flex justify-center mb-5 text-[20px]'>COVID-19 Statistics</h1>
            
            {/* Dropdown Filter */}
            <div className=" mb-10 mt-5 flex justify-center">
    <label htmlFor="stateFilter" className="mr-2 text-gray-700 ">Filter by State:</label>
    <select
      id="stateFilter"
      className="bg-gray-100 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
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
            
            <div  className='flex flex-wrap  gap-5 w-full  '>
                {/* Cards */}
                <div    className='flex  flex-wrap gap-20 '>
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
                <div >
                    <PieChart data={filteredData} />
                </div>

                {/* Map View */}
          
                <MapView data={filteredData} />
          
       

                {/*Line Chart */}
                <div >
                    <LineChart data={filteredData} />
                </div>
            </div>
        </div>
    );
}

export default DataView;
