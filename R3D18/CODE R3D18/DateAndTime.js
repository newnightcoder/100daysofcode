import React, { useState, useEffect } from "react";
import styled from "styled-components";
import moment from "moment";
import "moment/locale/fr";

const DateTime = styled.div`
  width: 100%;
  height: 3vh;
  font-size: 0.75rem;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.7);
  display: flex;
  //   justify-content: left;
  flex-direction: row;
  position: absolute;
  bottom: 0;
  animation: appear 1000ms forwards;
  @keyframes appear {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Today = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 1vw;
`;

const Time = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 1vw;
`;

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

export default DateAndTime;
