import React, { useState } from "react";
import BtnDrawer from "./BtnDrawer";
import styled from "styled-components";
import DateAndTime from "./DateAndTime";
import img from "../img/header.gif";
import Brightness4Icon from "@material-ui/icons/Brightness4";

const AppHeader = styled.div`
  grid-row: 1;
  background: url(${img}) no-repeat center/cover;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  position: relative;
  white-space: nowrap;
  height: 21vh;
  width: 400px;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    margin-top: 2vh;
    height: 15vh;
    width: 120px;
    z-index: 8;
    background-color: #81d4fa;
    transform: translateX(100%);
    transition: background-color 500ms;
    ${({ dark }) => dark && `background-color:#616161`};
  }
  @media (max-width: 1023px) and (orientation: portrait) {
    width: 100%;
    &::after {
      display: none;
    }
  }
  @media (max-width: 1023px) and (orientation: landscape) {
    width: 100%;
    /* height: 28vh; */
    padding: 3vh 0 0 1vw;
    &::after {
      display: none;
    }
  }
`;

const DarkModeBtn = styled.button`
  height: 20px;
  width: 20px;
  background-color: transparent;
  border-radius: 50%;
  outline: none;
  border: none;
  position: absolute;
  bottom: 1vh;
  right: 25px;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

const TitleWrapper = styled.div`
  height: 15vh;
  width: 50vw;
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
  @media (max-width: 1023px) and (orientation: portrait) {
    padding-left: 5vw;
  }
  @media (max-width: 1023px) and (orientation: landscape) {
    justify-content: flex-start;
    padding-top: 0;
  }
`;
const Title = styled.h1`
  color: white;
  font-size: 3rem;
  font-weight: light;
`;
const Subtitle = styled.p`
  color: white;
  font-size: 1rem;
  font-weight: 600;
  padding-top: 0.5vh;
`;

const HamburgerWrapper = styled.div`
  /* border: 1px solid white; */
  width: 40px;
  height: 40px;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  /* position: absolute;
  top: 2vh;
  right: 2vh; */
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
  @media (max-width: 1023px) and (orientation: landscape) {
    /* margin-top: 2vh; */
  }
`;

const HamburgerBtn = styled.button`
  width: 50px;
  height: 50px;
  padding: 0;
  display: flex;
  background-color: transparent;
  outline: none;
  border: none;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 3vh;
  right: 2vh;

  /* margin-top: 2vh;
  height: 60px;
  width: 60px;
  position: absolute;
  right: 0; */
  /* background-color: transparent; */
  /* display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  outline: none;
  border: none;
  border-radius: 5px;
  padding: 0;
  opacity: 1;
  cursor: pointer;
  transition: opacity 200ms; */
`;
const HamburgerLine = styled.div`
  width: 100%;
  height: 4px;
  background-color: white;
  padding: 0;
  margin: 0;
`;

const Hamburger = ({ drawerToggle, openDrawer }) => {
  return (
    <HamburgerBtn onClick={drawerToggle}>
      <HamburgerWrapper
        style={{
          opacity: openDrawer ? "0" : "1",
          transitionDelay: openDrawer ? "0ms" : "800ms",
          zIndex: openDrawer ? "0" : "8",
        }}
      >
        <HamburgerLine />
        <HamburgerLine />
        <HamburgerLine />
      </HamburgerWrapper>
    </HamburgerBtn>
  );
};

const Header = ({ deleteMsg, filterTodos, clear, dark, darkToggle }) => {
  const [openDrawer, setOpen] = useState(false);

  const drawerToggle = () => {
    setOpen((openDrawer) => !openDrawer);
  };

  return (
    <AppHeader dark={dark}>
      <TitleWrapper>
        <Title>things.</Title>
        <Subtitle>Let's get things done!</Subtitle>
      </TitleWrapper>
      <DarkModeBtn onClick={darkToggle}>
        <Brightness4Icon style={{ color: "white", fontSize: "large" }} />
      </DarkModeBtn>
      <Hamburger openDrawer={openDrawer} drawerToggle={drawerToggle} />
      <BtnDrawer
        drawerToggle={drawerToggle}
        show={openDrawer}
        filterTodos={filterTodos}
        clear={clear}
        deleteMsg={deleteMsg}
      />{" "}
      <DateAndTime />
    </AppHeader>
  );
};

export default Header;
