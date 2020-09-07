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
const Btn = styled.button`
  width: 100%;
  height: 3vh;
  background-color: #90caf9;
  font-size: 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;

  color: white;
  font-style: italic;
  text-transform: uppercase;
  clip-path: polygon(10% 0, 100% 0%, 100% 100%, 0% 100%);
  &:hover {
    cursor: pointer;
    background-color: #2196f3;
    font-weight: bold;
    // transform: scale(1.1) translateX(-5px);
  }
`;

// const ToggleBtn = styled.Btn`
//   opacity: 0.5;
//   ${({ active }) => active && `opacity:1;`}
// `;

const types = ["show all", "done", "to do", "delete all"];

const ButtonGroup = ({ filter, clear }) => {
  const [active, setActive] = useState(types[0]);
  return (
    <BtnGroup>
      <Btn>{types[0]}</Btn>
      <Btn onClick={() => filter("done")}>{types[1]}</Btn>
      <Btn onClick={() => filter("to do")}>{types[2]}</Btn>
      <Btn onClick={() => clear()}>{types[3]}</Btn>
      {/* {types.map((type) => (
        <Btn>{type}</Btn>
      ))} */}
    </BtnGroup>
  );
};

const Header = ({ todos, filter, clear }) => {
  // const [isSelected, setStyle] = useState("false");
  // const btnSelected = {
  //   backgroundColor: isSelected ? "#FFB74D" : "yellow",
  // };

  return (
    <AppHeader>
      <TitleWrapper>
        <Title>things.</Title>
        <Subtitle>Let's get things done!</Subtitle>
      </TitleWrapper>
      <ButtonGroup></ButtonGroup>

      {/* <Btn type={"show all"} onClick={}></Btn>
        <Btn type={"show all"} onClick={() => filter("done")}></Btn>
        <Btn type={"show all"} onClick={() => filter("to do")}></Btn>
        <Btn></Btn> */}
      {/* <BtnGroup>
        <Btn style={btnSelected} onClick={() => filter("all")}>
          show all
        </Btn>
        <Btn
          style={{ backgroundColor: "limegreen" }}
          onClick={() => filter("done")}
        >
          done
        </Btn>
        <Btn
          style={{ backgroundColor: "deepskyblue" }}
          onClick={() => filter("to-do")}
        >
          to do
        </Btn>
        <Btn onClick={() => clear()}>delete all</Btn>
      </BtnGroup> */}
      <DateAndTime />
    </AppHeader>
  );
};

export default Header;
