import React, { memo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const CovidTable: React.FC = () => {
   // UseSelector with RootState to get the typed state
   const covidDataFromStore = useSelector((state: RootState) => state.covidDataStore.data);
  return (
    <div className="w-[90%] m-5 bg-white">
     <h1 className='text-gray-700 text-lg font-normal flex justify-center mb-5 text-[20px]'>COVID-19 Cases in India</h1>
      <table className="w-full border-collapse border border-gray-300 m-4 text-lg">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">State</th>
            <th className="border border-gray-300 px-4 py-2">Total Cases</th>
            <th className="border border-gray-300 px-4 py-2">Active Cases</th>
            <th className="border border-gray-300 px-4 py-2">Recovered</th>
            <th className="border border-gray-300 px-4 py-2">Deaths</th>
          </tr>
        </thead>
        <tbody>
  {covidDataFromStore.map((row, index) => (
    <tr
      key={index}
      className={`border border-gray-300 hover:bg-gray-100 ${
        index % 2 === 0 ? 'bg-gray-50' : ''
      }`}
    >
      <td className="border border-gray-300 px-4 py-2">{row.state}</td>
      <td className="border border-gray-300 px-4 py-2">{row.totalCases.toLocaleString()}</td>
      <td className="border border-gray-300 px-4 py-2">{row.activeCases.toLocaleString()}</td>
      <td className="border border-gray-300 px-4 py-2">{row.recovered.toLocaleString()}</td>
      <td className="border border-gray-300 px-4 py-2">{row.deaths.toLocaleString()}</td>
    </tr>
  ))}
</tbody>
      </table>
    </div>
  );
};

export default memo(CovidTable);
