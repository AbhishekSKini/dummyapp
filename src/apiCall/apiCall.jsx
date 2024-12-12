import axios from "axios";

const URL = "http://localhost:5000/covidData";

export function getData() {
  return axios.get(URL);
}
