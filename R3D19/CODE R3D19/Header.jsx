import React, { useState } from "react";
import BtnDrawer from "./BtnDrawer";
import styled from "styled-components";
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
  // border:2px solid pink;
  }
`;

const TitleWrapper = styled.div`
  // border: 1px solid yellow;
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
  // border: 1px solid tomato;
  z-index: 7;
`;

const HamburgerBtn = styled.button`
  height: 40px;
  width: 40px;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  outline: none;
  border: none;
  border-radius: 5px;
  padding: 0;
  cursor: pointer;
  transition: transform 200ms;
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
    <HamburgerWrapper style={{ visibility: openDrawer ? "hidden" : "visible" }}>
      <HamburgerBtn onClick={drawerToggle}>
        <HamburgerLine />
        <HamburgerLine />
        <HamburgerLine />
      </HamburgerBtn>
    </HamburgerWrapper>
  );
};

const Header = ({ todosToDisplay, deleteMsg, filter, clear }) => {
  const [openDrawer, setOpen] = useState(false);

  const drawerToggle = () => {
    setOpen((openDrawer) => !openDrawer);
  };

  return (
    <AppHeader>
      <TitleWrapper>
        <Title>things.</Title>
        <Subtitle>Let's get things done!</Subtitle>
      </TitleWrapper>
      <Hamburger openDrawer={openDrawer} drawerToggle={drawerToggle} />
      <BtnDrawer
        openDrawer={openDrawer}
        filter={filter}
        clear={clear}
        deleteMsg={deleteMsg}
      />
      <DateAndTime />
    </AppHeader>
  );
};

export default Header;
