import React, { useState, useEffect } from "react";
import styled from "styled-components";
import moment from "moment";
import "moment/locale/fr";

const DateAndTime = () => {
  const [clock, setClock] = useState(new Date().toJSON());

  useEffect(() => {
    setInterval(() => updateTime(), 1000);
  }, []);

  const updateTime = () => {
    setClock(new Date().toJSON());
  };

  const today = moment().locale("en").format("dddd, MMMM Do");

  return (
    <DateTime>
      <Today>{today}</Today>
      <Time>{moment(clock).locale("fr").format("LT")}</Time>
    </DateTime>
  );
};

const DateTime = styled.div`
  width: 100%;
  height: 3vh;
  //   grid-row: 3;
  //   grid-column: span 3;
  //   align-self: end;
  //background-color: white;
  font-size: 0.95rem;
  color: dimgray;
  display: flex;
  justify-content: center;
  position: relative;
  animation: slide 1000ms forwards;
  @keyframes slide {
    0% {
      opacity: 0;
      transform: translateX(-12vw);
    }
    15% {
      opacity: 0;
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const Today = styled.div`
  width: 50%;
  //background-color: grey;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Time = styled.div`
  width: 50%;
  //background-color: grey;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 1vw;
`;

export default DateAndTime;
