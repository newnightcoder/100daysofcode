import React from "react";
import styled from "styled-components";
import DateAndTime from "./DateAndTime";
import img from "../img/nightcoder.jpg";

const AppHeader = styled.div`
  //width: 100%;
  background: url(${img}) no-repeat center/cover;
  display: grid;
  grid-template-rows: 2;
  grid-template-columns: repeat(3, 1fr);
  justify-items: left;
  align-items: center;
  grid-row: 1/3;
  color: white;
  font-size: 2.75rem;
  font-weight: light;
  padding: 1vh 0 0.5vh 1vw;
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

const BtnGroup = styled.div`
  width: 8vw;
  height: 15vh;
  //background-color: white;
  grid-column: 3;
  grid-row: 1;
  align-self: end;
  justify-self: end;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  // border: 1px solid red;
`;

const Btn = styled.button`
  width: 100%;
  height: 3vh;
  background-color: rgba(255, 255, 255, 0.5);
  font-size: 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  color: white;
  font-style: italic;
  clip-path: polygon(10% 0, 100% 0%, 100% 100%, 0% 100%);
  &:hover {
    cursor: pointer;
    background-color: rgb(255, 255, 255);
    color: gray;
    // transform: scale(1.1) translateX(-5px);
  }
`;

const Header = ({ todos, all, done, notDone }) => (
  <AppHeader>
    things.
    {/* <br></br> */}
    {/* <span style={{ fontSize: "1rem" }}>your things to do.</span> */}
    <BtnGroup>
      <Btn onClick={() => all()}>show all</Btn>
      <Btn onClick={() => done()} color="none">
        done
      </Btn>
      <Btn onClick={() => notDone()} color="none">
        to do
      </Btn>
      <Btn color="none">delete all</Btn>
    </BtnGroup>
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
