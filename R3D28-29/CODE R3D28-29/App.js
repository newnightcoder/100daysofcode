import React from "react";
import { AppHeader, Counters, CountryTable } from "./components";
import { fetchBrief, fetchCountries } from "./api";

class App extends React.Component {
  state = {
    data: {},
    countries: [],
  };

  async componentDidMount() {
    const fetchedData = await fetchBrief();
    // console.log("yoohoo", fetchedData);
    this.setState({ data: fetchedData });
    // console.log("state data", this.state.data);

    const fetchedCountries = await fetchCountries();
    // console.log(
    //   "yay fetched countries app level!",
    //   fetchedCountries.countries[0]
    // );

    this.setState({ countries: fetchedCountries });
  }

  render() {
    return (
      <div>
        {" "}
        <AppHeader />
        <Counters data={this.state.data} />
        <CountryTable data={this.state.countries} />
      </div>
    );
  }
}

export default App;
