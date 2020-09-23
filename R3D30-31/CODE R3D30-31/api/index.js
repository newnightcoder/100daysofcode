import axios from "axios";

const brief = "https://disease.sh/v3/covid-19/all";

export const fetchBrief = async () => {
  const { data } = await axios.get(brief);
  console.log("api function data", data);
  const briefData = {
    confirmed: data.cases,
    deaths: data.deaths,
    recovered: data.recovered,
    todayConfirmed: data.todayCases,
    todayDeaths: data.todayDeaths,
    todayRecovered: data.todayRecovered,
    update: data.updated,
    critical: data.critical,
    tests: data.tests,
  };
  console.log(briefData);
  return briefData;
};

const countries = "https://disease.sh/v3/covid-19/countries";

export const fetchCountries = async () => {
  const { data } = await axios.get(countries);
  // const test = {
  //   countries: data.map(({ country }) => country),
  //   flags: data.map(({ countryInfo }) => countryInfo.flag),
  // };
  // console.log("countries du fetch", typeof test.countries);
  return data;
};
