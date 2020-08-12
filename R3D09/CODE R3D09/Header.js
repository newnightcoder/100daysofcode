import React from "react";
import styled from "styled-components";

const AppHeader = styled.div`
  background-color: #2196f3;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  grid-row: 1;
  color: white;
  font-size: 2.5rem;
  font-weight: bold;
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

const Header = () => <AppHeader>Welcome to your TO-DO app!</AppHeader>;

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
