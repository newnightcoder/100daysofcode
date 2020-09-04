import React from "react";
import styled from "styled-components";
import DateAndTime from "./DateAndTime";
import img from "../img/nightcoder.jpg";

const AppHeader = styled.div`
  //width: 100%;
  background: url(${img}) no-repeat center/cover;
  display: grid;
  grid-template-rows: 2;
  grid-template-columns: 1fr;
  justify-items: left;

  grid-row: 1/3;
  color: white;
  font-size: 2rem;
  font-weight: light;
  padding: 0 0.5vw;
  position: relative;
  animation: intro 1000ms forwards;
  @keyframes intro {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Header = () => (
  <AppHeader>
    things.
    <DateAndTime />
  </AppHeader>
);

export default Header;

// import React from "react";
// // import { MDBBtn } from "mdbreact";
// import "./Header.scss";

// const Header = () => (
//   <div className="header">
//     {/* <div className="logo"></div> */}
//     <h1>Welcome to your TO-DO app!</h1>
//   </div>
// );

// export default Header;
