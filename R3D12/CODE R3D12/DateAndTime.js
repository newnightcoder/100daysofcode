import React from "react";
import styled from "styled-components";

const DateTime = styled.div`
  width: 100%;
  height: 3vh;
  grid-row-start: 2;
  grid-row-end: 3;
  align-self: end;
  //background-color: white;
  font-size: 0.75rem;
  color: white;
  display: flex;
  justify-content: space-between;
  position: relative;
  padding-bottom: 0.5vh;
`;

const Today = styled.div`
  width: 50%;
  //background-color: grey;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Time = styled.div`
  width: 40%;
  //background-color: grey;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 1.5vw;
`;

const DateAndTime = () => {
  const today = new Date().toJSON();
  const hours = new Date().getHours();
  const minutes = new Date().getMinutes();

  return (
    <DateTime>
      <Today>{today}</Today>
      <Time>{hours + "h" + minutes}</Time>
    </DateTime>
  );
};

export default DateAndTime;
