import React, { useState } from "react";
import BtnDrawer from "./BtnDrawer";
import styled from "styled-components";
import DateAndTime from "./DateAndTime";
import img from "../img/header.gif";

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
    background-color: pink;
    transform: translateX(100%);
    transition: background-color 500ms;
    ${({ dark }) => dark && `background-color:lightslategray`};
  }
  @media (max-width: 1025px) and (orientation: portrait) {
    /* position: fixed;
    top: 0; */
    width: 100%;
    &::after {
      display: none;
    }
  }
`;

const DarkModeBtn = styled.button`
  height: 50px;
  width: 50px;
  background-color: white;
  border-radius: 50%;
  outline: none;
  border: none;
  /* transform: translateX(700%); */
  position: absolute;
  bottom: 1vh;
  &:hover {
    cursor: pointer;
  }
`;

const TitleWrapper = styled.div`
  /* border: 1px solid red; */
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
  @media (max-width: 1000px) and (orientation: portrait) {
    padding-left: 5vw;
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
  width: 100px;
  height: 15vh;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 7;
`;

const HamburgerBtn = styled.button`
  height: 45px;
  width: 45px;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  outline: none;
  border: none;
  border-radius: 5px;
  padding: 0;
  opacity: 1;
  cursor: pointer;
  transition: opacity 200ms;
  /* transition-delay: 850ms; */
  &:hover {
    transform: scale(1.1);
  }
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
    <HamburgerWrapper
      style={{
        opacity: openDrawer ? "0" : "1",
        transitionDelay: openDrawer ? "0ms" : "800ms",
        zIndex: openDrawer ? "0" : "8",
      }}
    >
      <HamburgerBtn
        // style={{ transitionDelay: openDrawer ? "0" : "850ms" }}
        onClick={drawerToggle}
      >
        <HamburgerLine />
        <HamburgerLine />
        <HamburgerLine />
      </HamburgerBtn>
    </HamburgerWrapper>
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
      <DarkModeBtn onClick={darkToggle}>darkmode</DarkModeBtn>
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
