import React from "react";
import { AppHeader, Counters } from "./components";
import { fetchData } from "./api";

class App extends React.Component {
  state = {
    data: {},
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    console.log("yoohoo", fetchedData);
    this.setState({ data: fetchedData });
    console.log("state data", this.state.data);
  }

  render() {
    return (
      <div>
        {" "}
        <AppHeader />
        <Counters data={this.state.data} />
      </div>
    );
  }
}

export default App;
