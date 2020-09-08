import React, { useState } from "react";
import styled from "styled-components";
import DateAndTime from "./DateAndTime";

const AppHeader = styled.div`
  height: 21vh;
  background: url(https://media.giphy.com/media/2A4E5BJitSAsL8fYGi/giphy.gif)
  no-repeat center/cover;
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
  width: 8vw;
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
  },
  pink: {
    default: "#f06292",
    hover: "#e91e63",
  },
  orange: {
    default: "#ffb74d",
    hover: "#ff9800",
  },
  green: {
    default: "#81c784",
    hover: "#4caf50",
  },
};

const Btn = styled.button`
  width: 100%;
  height: 3vh;
  background-color: ${(props) => theme[props.theme].default};
  font-size: 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  transition: all 250ms ease-in;
  color: white;
  font-style: italic;
  text-transform: uppercase;
  clip-path: polygon(10% 0, 100% 0%, 100% 100%, 0% 100%);
  // &:active {
  //   background-color: ${(props) => theme[props.theme].hover};
  // }
  &:hover {
    cursor: pointer;
    background-color: ${(props) => theme[props.theme].hover};
    font-weight: bold;
    // transform: scale(1.1) translateX(-5px);
  }
`;
const ToggleBtn = styled(Btn)`
  // background-color: ${(props) => theme[props.theme].default}
  ${({ active }) => active && `background-color:#2196f3 font-weight:bold`};
`;

const types = ["show all", "done", "to do", "delete all"];

const ButtonGroup = ({ filter, clear }) => {
  const [active, setActive] = useState(types[0]);

  const handleFilter = ({ filter }) => {
    return () => filter();
  };

  // const handleClear = ({ clear }) => {
  //   return () => clear();
  // };

  ToggleBtn.defaultProps = { theme: "blue" };

  return (
    <BtnGroup>
      <ToggleBtn
        active={active === types[0]}
        onClick={() => {
          setActive(types[0]);
          handleFilter("all");
        }}
      >
        {types[0]}
      </ToggleBtn>
      <ToggleBtn
        // theme="blue"
        active={active === types[1]}
        onClick={() => {
          setActive(types[1]);
          // handleFilter("done");
        }}
      >
        {types[1]}
      </ToggleBtn>
      <ToggleBtn
        // theme="pink"
        active={active === types[2]}
        onClick={() => setActive(types[2])}
      >
        {types[2]}
      </ToggleBtn>
      <ToggleBtn
        // theme="orange"
        active={active === types[3]}
        onClick={() => {
          setActive(types[3]);
          // handleClear();
        }}
      >
        {types[3]}
      </ToggleBtn>
      {/* {types.map((type) => (
        <ToggleBtn active={active === type} onClick={() => setActive(type)}>
          {type}
        </ToggleBtn>
      ))} */}
    </BtnGroup>
  );
};

const Header = ({ todos, filter, clear }) => {
  return (
    <AppHeader>
      <TitleWrapper>
        <Title>things.</Title>
        <Subtitle>Let's get things done!</Subtitle>
      </TitleWrapper>
      <ButtonGroup />
      <DateAndTime />
    </AppHeader>
  );
};

export default Header;
