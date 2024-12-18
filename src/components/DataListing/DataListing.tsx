import  {  useEffect, useState } from "react";
import { getData } from "../../apiCall/apiCall";
import CovidTable from "../DataListing/DataTable";
import { useDispatch } from "react-redux";
import { setCovidDataAction } from "../../redux/covidDataSlice";
import Loader from "../Loader/Loader";

const DataListing = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch(); // Initialize Redux dispatch

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await getData();
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
    return <Loader />;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <CovidTable />
    </div>
  );
};

export default DataListing;
