import React, { useState, useEffect } from "react";
import styled from "styled-components";
import moment from "moment";
import "moment/locale/fr";

const DateTime = styled.div`
  width: 100%;
  height: 3vh;
  grid-row: 2;
  grid-column: span 3;
  align-self: end;
  //background-color: white;
  font-size: 1rem;
  color: white;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const Today = styled.div`
  width: 60%;
  //background-color: grey;
  display: flex;
  align-items: center;
  justify-content: start;
`;

const Time = styled.div`
  width: 30%;
  //background-color: grey;
  display: flex;
  align-items: center;
  justify-content: flex-end;
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
