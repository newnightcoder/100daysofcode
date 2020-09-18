import React from "react";
import styled from "styled-components";

const Header = styled.div`
  /* border: 1px solid blue; */
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: dimgray;
  /* background-color: white; */
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
      <i style={{ fontSize: "2rem" }} class="fas fa-virus"></i>
      <Title>covid-19 dashboard</Title>{" "}
    </Header>
  );
};

export default AppHeader;
