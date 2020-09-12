import React, { useState } from "react";
import styled, { css } from "styled-components";

const BtnGroup = styled.div`
  width: 120px;
  height: 15vh;
  padding: 0;
  margin-top: 2vh;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  // transform: translateX(100%);
  transition: transform 850ms ease-out;
  z-index: 8;
  position: absolute;
  top: 0;
  right: 0;
`;

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
const types = ["show all", "done", "to do", "delete all"];

const BtnDrawer = ({ filter, clear, deleteMsg, openDrawer }) => {
  const [active, setActive] = useState("");

  return (
    <BtnGroup
      style={{
        transform: openDrawer ? "translateX(0)" : "translateX(100%)",
        visibility: openDrawer ? "visible" : "hidden",
      }}
      active={active}
      filter={filter}
      clear={clear}
      openDrawer={openDrawer}
    >
      <BtnToggle
        active={active === types[0]}
        onClick={() => {
          setActive(types[0]);
          filter("all");
        }}
      >
        {types[0]}
      </BtnToggle>
      <BtnToggle
        active={active === types[1]}
        onClick={() => {
          setActive(types[1]);
          filter("done");
        }}
      >
        {types[1]}
      </BtnToggle>
      <BtnToggle
        active={active === types[2]}
        onClick={() => {
          setActive(types[2]);
          filter("to-do");
        }}
      >
        {types[2]}
      </BtnToggle>
      <BtnToggle
        theme="danger"
        active={active === types[3]}
        onClick={() => {
          setActive("");
          clear();
          deleteMsg("delete");
        }}
      >
        {types[3]}
      </BtnToggle>
    </BtnGroup>
  );
};

export default BtnDrawer;
