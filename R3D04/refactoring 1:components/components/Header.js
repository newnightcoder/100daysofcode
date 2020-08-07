import React, { Component } from "react";
import "./Header.scss";

class Header extends Component {
  render() {
    return (
      <div className="header">
        {/* <div className="logo"></div> */}
        <h1>Welcome to your TO-DO app!</h1>
      </div>
    );
  }
}
export default Header;
