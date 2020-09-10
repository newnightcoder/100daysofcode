import React, { useState } from "react";
import styled, { css } from "styled-components";
import DateAndTime from "./DateAndTime";
import img from "../img/header.gif";

const AppHeader = styled.div`
  height: 21vh;
  background: url(${img}) no-repeat center/cover;
  display:flex;
  flex-direction:row;
  align-items:flex-start;
  justify-content:space-between;
  position: relative;
  white-space: nowrap;
  }
`;

const TitleWrapper = styled.div`
  height: 15vh;
  padding: 1vh 0 0 1vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
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
const Title = styled.h1`
  color: white;
  font-size: 2.75rem;
  font-weight: light;
`;
const Subtitle = styled.p`
  color: white;
  font-size: 1rem;
  // font-style: italic;
  font-weight: 600;
  padding-top: 0.5vh;
`;

const BtnGroup = styled.div`
  width: 100px;
  height: 15vh;
  padding: 0;
  margin-top: 2vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const theme = {
  blue: {
    default: "#64b5f6",
    hover: "#2196f3",
    active: "white",
  },
  pink: {
    default: "#f06292",
    hover: "#e91e63",
    active: "white",
  },
  orange: {
    default: "#ffb74d",
    hover: "#ff9800",
    active: "white",
  },
  green: {
    default: "#81c784",
    hover: "#4caf50",
    active: "white",
  },
};

const Btn = styled.button`
  width: 100%;
  height: 3vh;
  background-color: ${(props) => theme[props.theme].default};
  font-size: 0.75rem;
  font-style: italic;
  font-weight: bold;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  border: 2px solid ${(props) => theme[props.theme].default};
  transition: all 250ms ease-in;

  clip-path: polygon(10% 0, 100% 0%, 100% 100%, 0% 100%);
  // &:active {
  //   background-color: ${(props) => theme[props.theme].hover};
  // }
  &:hover {
    cursor: pointer;
    background-color: ${(props) => theme[props.theme].hover};
    font-weight: bold;
    color: white;
    border-top: 2px solid ${(props) => theme[props.theme].hover};
    border-right: 2px solid ${(props) => theme[props.theme].hover};
    border-bottom: 2px solid ${(props) => theme[props.theme].active};
    border-left: 2px solid ${(props) => theme[props.theme].hover};
  }
`;
Btn.defaultProps = { theme: "blue" };
const types = ["show all", "done", "to do", "delete all"];

const BtnToggle = styled(Btn)`
  background-color: ${(props) => theme[props.theme].default};
  ${({ active }) =>
    active &&
    css`
      font-weight: bold;
      color: white;
      background-color: ${(props) => theme[props.theme].hover};
      border-top: 2px solid ${(props) => theme[props.theme].hover};
      border-right: 2px solid ${(props) => theme[props.theme].hover};
      border-bottom: 2px solid ${(props) => theme[props.theme].active};
      border-left: 2px solid ${(props) => theme[props.theme].hover};
    `}
`;

const ToggleBtnGroup = ({ filter, clear }) => {
  const [active, setActive] = useState("");

  return (
    <BtnGroup>
      <BtnToggle
        theme="green"
        active={active === types[0]}
        onClick={() => {
          setActive(types[0]);
          filter("all");
        }}
      >
        {types[0]}
      </BtnToggle>
      <BtnToggle
        theme="pink"
        active={active === types[1]}
        onClick={() => {
          setActive(types[1]);
          filter("done");
        }}
      >
        {types[1]}
      </BtnToggle>
      <BtnToggle
        theme="blue"
        active={active === types[2]}
        onClick={() => {
          setActive(types[2]);
          filter("to-do");
        }}
      >
        {types[2]}
      </BtnToggle>
      <BtnToggle
        theme="orange"
        active={active === types[3]}
        onClick={() => {
          setActive(types[3]);
          clear();
        }}
      >
        {types[3]}
      </BtnToggle>
    </BtnGroup>
  );
};

const Header = ({ filter, clear }) => {
  return (
    <AppHeader>
      <TitleWrapper>
        <Title>things.</Title>
        <Subtitle>Let's get things done!</Subtitle>
      </TitleWrapper>
      <ToggleBtnGroup filter={filter} clear={clear} />

      {/* <BtnGroup>
        {" "}
        <Btn onClick={() => filter("all")}>{types[0]}</Btn>
        <Btn onClick={() => filter("done")}>{types[1]}</Btn>
        <Btn onClick={() => filter("to-do")}>{types[2]}</Btn>
        <Btn onClick={() => clear()}>{types[3]}</Btn>
      </BtnGroup> */}
      <DateAndTime />
    </AppHeader>
  );
};

export default Header;
