import React, { useState } from "react";
import styled, { css } from "styled-components";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

const theme = {
  black: {
    default: "rgba(100,100,100,.8)",
    active: "white",
    border: "2.5px solid deepskyblue",
  },
  danger: {
    default: "rgb(255,165,0,.4)",
    active: "orange",
    border: "2px solid white",
  },
};

const DrawerWrapper = styled.div`
  margin-top: 2vh;
  width: 150px;
  height: 15vh;
  display: grid;
  grid-template-columns: 30px 120px;
  position: relative;
  /* @media (max-width: 1023px) and (prientation:portrait){
    margin-top: 0;
  } */
  @media (max-width: 1023px) and (orientation: landscape) {
    margin-top: 0;
  }
`;

const CloseDrawer = styled.button`
  grid-column: 1;
  width: 25px;
  height: 25px;
  font-size: 13px;
  background-color: transparent;
  align-self: center;
  margin-right: 10px;
  padding: 0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  opacity: 0;
  outline: none;
  border: none;
  transition: opacity 500ms;
  transition-delay: 850ms;
  color: lightgray;
  &:hover {
    cursor: pointer;
  }
`;

const BtnGroup = styled.div`
  grid-column: 2;
  width: 120px;
  height: 15vh;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: absolute;
  top: 0;
  right: 0;
  transform: translateX(100%);
  transition: transform 850ms ease-out;
  @media (min-width: 768px) and (orientation: portrait) {
    width: 20vw;
  }
  @media (max-width: 700px) and (orientation: portrait) {
    width: 120px;
  }
  @media (max-width: 350px) and (orientation: portrait) {
    width: 95px;
  }
`;

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
  border: 2.5px solid transparent;
  //   transition: all 200ms ease-in;
  clip-path: polygon(10% 0, 100% 0%, 100% 100%, 0% 100%);
  &:hover {
    cursor: pointer;
    background-color: ${(props) => theme[props.theme].active};
    font-weight: bold;
    color: black;
    border-top: ${(props) => theme[props.theme].active};
    border-right: ${(props) => theme[props.theme].active};
    border-bottom: ${(props) => theme[props.theme].border};
    border-left: ${(props) => theme[props.theme].active};
  }
`;
Btn.defaultProps = { theme: "black" };

const BtnToggle = styled(Btn)`
  ${({ active }) =>
    active &&
    css`
      font-weight: bold;
      color: black;
      background-color: ${(props) => theme[props.theme].active};
      border-top: ${(props) => theme[props.theme].active};
      border-right: ${(props) => theme[props.theme].active};
      border-bottom: ${(props) => theme[props.theme].border};
      border-left: ${(props) => theme[props.theme].active};
    `}
`;

const types = ["show all", "to do", "done", "delete all"];

const BtnDrawer = ({ filterTodos, clear, deleteMsg, show, drawerToggle }) => {
  const [active, setActive] = useState("");

  return (
    <DrawerWrapper>
      <CloseDrawer
        onClick={drawerToggle}
        style={{
          opacity: show ? "1" : "0",
          transitionDelay: show ? "850ms" : "0ms",
        }}
      >
        <HighlightOffIcon />
      </CloseDrawer>
      <BtnGroup
        style={{
          transform: show ? "translateX(0)" : "translate(100%)",
        }}
        active={active}
        filterTodos={filterTodos}
        clear={clear}
        show={show}
      >
        <BtnToggle
          active={active === types[0]}
          onClick={() => {
            setActive(types[0]);
            filterTodos("all");
          }}
        >
          {types[0]}
        </BtnToggle>
        <BtnToggle
          active={active === types[1]}
          onClick={() => {
            setActive(types[1]);
            filterTodos("to-do");
          }}
        >
          {types[1]}
        </BtnToggle>
        <BtnToggle
          active={active === types[2]}
          onClick={() => {
            setActive(types[2]);
            filterTodos("done");
          }}
        >
          {types[2]}
        </BtnToggle>
        <BtnToggle
          theme="danger"
          active={active === types[3]}
          onClick={() => {
            clear();
            deleteMsg("delete");
            setActive("");
            setTimeout(() => filterTodos("all"), 2000);
          }}
        >
          {types[3]}
        </BtnToggle>
      </BtnGroup>
    </DrawerWrapper>
  );
};

export default BtnDrawer;
