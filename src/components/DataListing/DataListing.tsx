import React, { useEffect, useState } from "react";
import { getData } from "../../apiCall/apiCall";
import CovidTable from "./DataTable";
import { useDispatch } from "react-redux";
import { setCovidDataAction } from "../../redux/covidDataSlice";
import { CovidDataItem } from "../../types/type";

const DataListing = () => {
  const [covidData, setCovidData] = useState<CovidDataItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch(); // Initialize Redux dispatch
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await getData();
        setCovidData(response.data);
        dispatch(setCovidDataAction(response.data)); // Dispatch the data to Redux store
      } catch (err) {
        setError("Failed to fetch data");
        console.error("Error fetching data:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <CovidTable data={covidData} />
    </div>
  );
};

export default DataListing;
