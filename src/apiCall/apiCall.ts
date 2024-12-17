import { CovidDataItem } from "../types/type";

const URL = "http://localhost:5000/covidData";

// Assuming getData is fetching an API and returning data of type { data: CovidDataItem[] }
export const getData = async (): Promise<{ data: CovidDataItem[] }> => {
  const response = await fetch(URL);
  const data = await response.json();
  return { data };
};
