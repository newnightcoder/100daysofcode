import axios from "axios";

const urlBrief =
  "https://master-covid-19-api-laeyoung.endpoint.ainize.ai/jhu-edu/brief";

export const fetchData = async () => {
  const { data } = await axios.get(urlBrief);
  console.log("api function data", data);
  const briefData = {
    confirmed: data.confirmed,
    deaths: data.deaths,
    recovered: data.recovered,
  };
  return briefData;
};

// const fetchData2 = async () => {
//   const data = await axios.get(urlBrief);
//   console.log(data);
// };
// fetchData2();
