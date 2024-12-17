import React, { memo } from "react";
import { CovidTableProps } from "../../types/type";

const CovidTable: React.FC<CovidTableProps> = ({ data }) => {


    
  return (
    <div>
      <h1>COVID-19 Cases in India</h1>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          margin: "20px 0",
          fontSize: "18px",
          textAlign: "left",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#f4f4f4" }}>
            <th style={{ border: "1px solid #dddddd", padding: "12px" }}>State</th>
            <th style={{ border: "1px solid #dddddd", padding: "12px" }}>Total Cases</th>
            <th style={{ border: "1px solid #dddddd", padding: "12px" }}>Active Cases</th>
            <th style={{ border: "1px solid #dddddd", padding: "12px" }}>Recovered</th>
            <th style={{ border: "1px solid #dddddd", padding: "12px" }}>Deaths</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              style={{ backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#fff" }}
            >
              <td style={{ border: "1px solid #dddddd", padding: "12px" }}>{row.state}</td>
              <td style={{ border: "1px solid #dddddd", padding: "12px" }}>
                {row.totalCases.toLocaleString()}
              </td>
              <td style={{ border: "1px solid #dddddd", padding: "12px" }}>
                {row.activeCases.toLocaleString()}
              </td>
              <td style={{ border: "1px solid #dddddd", padding: "12px" }}>
                {row.recovered.toLocaleString()}
              </td>
              <td style={{ border: "1px solid #dddddd", padding: "12px" }}>
                {row.deaths.toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default  memo( CovidTable);
