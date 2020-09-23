import React from "react";
import { AppHeader, Counters, CountryTable, Search, More } from "./components";
import { fetchBrief, fetchCountries } from "./api";
// import { More } from "./components";

class App extends React.Component {
  state = {
    data: {},
    countries: [],
    showMore: false,
    btnText: "more",
  };

  async componentDidMount() {
    const fetchedData = await fetchBrief();
    this.setState({ data: fetchedData });

    const fetchedCountries = await fetchCountries();
    this.setState({ countries: fetchedCountries });
  }

  toggleMore = () => {
    this.setState({ showMore: !this.state.showMore });
    if (this.state.showMore) {
      this.setState({ btnText: "more" });
    } else this.setState({ btnText: "close" });
  };

  more = () => {
    if (this.state.showMore) {
      return <More data={this.state.data} />;
    }
  };

  render() {
    return (
      <div>
        {" "}
        <AppHeader data={this.state.data} />
        <Counters
          btnText={this.state.btnText}
          toggleMore={this.toggleMore}
          data={this.state.data}
        />
        {this.more()}
        <Search />
        <CountryTable data={this.state.countries} />
      </div>
    );
  }
}

export default App;
