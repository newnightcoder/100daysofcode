import React, { Component } from "react";
import "./Footer.scss";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        Built with React by Nightcoder&nbsp;
        <span role="img" aria-label="sunglasses emoji">
          {" "}
          😎
        </span>
      </div>
    );
  }
}

export default Footer;
