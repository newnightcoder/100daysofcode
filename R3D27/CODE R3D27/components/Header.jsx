import React from "react";
import styled from "styled-components";

const Header = styled.div`
  /* border: 1px solid blue; */
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: dimgray;
  margin-top: 5vh;
  @keyframes bleep {
    0% {
      opacity: 1;
    }
    75% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 900;
  text-transform: uppercase;
  margin-left: 1vw;
`;

const AppHeader = () => {
  return (
    <Header>
      <i
        style={{ animation: "bleep 3000ms infinite", fontSize: "3rem" }}
        className="fas fa-virus"
      ></i>
      <Title>covid-19 info</Title>{" "}
    </Header>
  );
};

export default AppHeader;
