import React from "react";
import styled from "styled-components";
import numeral from "numeral";
import CountUp from "react-countup";
import img1 from "../img/virus.jpg";
import img2 from "../img/rip.png";
import img3 from "../img/recovered.png";

const theme = {
  critical: {
    default: "yellow",
  },
  tests: {
    default: "pink",
    // "#A19C9C",
  },
  recovered: {
    default: "#2196f3",
  },
};
//----------------------------------------------------------------
const CountersWrapper = styled.div`
  width: 100vw;
  height: 240px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 5vh;
  margin-top: 4vh;
  animation: fadeIn 1500ms forwards;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @media (max-width: 800px) {
    flex-direction: column;
    height: 50vh;
    width: 100%;
  }
`;
//----------------------------------------------------------------
const Counter = styled.div`
  width: 30%;
  height: 100%;
  display: grid;
  grid-template-rows: 90px 40px 1fr 1fr;
  text-align: center;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 3px;
  color: ${(props) => theme[props.theme].default};
  background-color: white;
  position: relative;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  transition: transform 250ms;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background-color: transparent;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
  }
  &:hover {
    cursor: pointer;
    transform: translateY(-3px);
    background-color: rgba(255, 255, 255, 0.5);
    box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
      0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
    &::after {
      background-color: ${(props) => theme[props.theme].default};
    }
  }
  @media (max-width: 800px) {
    width: 30%;
    height: 100%;
  }
`;
//----------------------------------------------------------------
const ImgWrapper = styled.div`
  width: 100%;
  grid-row: 1;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
`;
//----------------------------------------------------------------
const Title = styled.div`
  grid-row: 2;
  align-self: center;
  position: relative;
  &::after {
    content: "";
    width: 80%;
    height: 1px;
    background-color: lightgray;
    position: absolute;
    bottom: -1.25vh;
    left: 10%;
  }
`;
const TitleSpan = styled.span`
  color: rgb(50, 50, 50);
  text-transform: uppercase;
  font-weight: 800;
`;
//----------------------------------------------------------------
const TodayWrapper = styled.div`
  grid-row: 3;
  font-size: 1.3rem;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  &::after {
    content: "today";
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.75rem;
    margin-left: 0.75em;
    height: 15px;
    width: 50px;
    color: black;
    border: 1px solid lightgray;
    border-radius: 3px;
    padding: 1px 1px 2px;
  }
  &:hover {
    /* &::after { */
    animation: bleep 1s infinite;
    /* } */
  }
`;
//----------------------------------------------------------------
const TotalWrapper = styled.div`
  grid-row: 4;
  color: dimgray;
  font-size: 1rem;
  text-align: center;
  line-height: 1.5;
  align-self: center;
  padding-bottom: 2vh;
`;

const More = ({ data: { critical, tests } }) => {
  const formatNumbers = (number, f) => {
    if (f === "de") return new Intl.NumberFormat("de-DE").format(number);
    if (f === "fr") return new Intl.NumberFormat("us-US").format(number);
  };

  if (!critical) {
    return `loading...`;
  }
  return (
    <div>
      <CountersWrapper>
        <Counter theme="critical">
          <ImgWrapper
            style={{
              backgroundColor: "yellow",
              // `url(${img1}) no-repeat center/cover`,
            }}
          ></ImgWrapper>
          <Title>
            <i
              style={{ fontSize: "1.3rem", marginRight: "1vh" }}
              className="fas fa-lungs-virus"
            ></i>
            <TitleSpan>Critical cases</TitleSpan>
          </Title>
          <TodayWrapper>
            +
            <CountUp end={critical} start={0} duration={5} separator={"."}>
              {/* {formatNumbers(critical, "de")} */}
            </CountUp>
            {/* + {formatNumbers(critical, "de")} */}
          </TodayWrapper>
          <TotalWrapper>
            <span style={{ fontWeight: "bold", marginRight: ".5vw" }}>
              {" "}
              Total:&nbsp;{numeral(critical).format("0,0a")}
            </span>
            <br />
            (Exact number:&nbsp;
            {/* {formatNumbers(confirmed, "fr")}) */}
          </TotalWrapper>
        </Counter>
        <Counter theme="tests">
          <ImgWrapper
            style={{
              backgroundColor: "lightgreen",
              // `url(${img2}) no-repeat center/150%`,
            }}
          ></ImgWrapper>
          <Title>
            <i
              style={{ fontSize: "1.3rem", marginRight: "1vh" }}
              className="fas fa-skull-crossbones"
            ></i>
            <TitleSpan>Tested</TitleSpan>
          </Title>
          <TodayWrapper>
            +
            <CountUp end={tests} start={0} duration={3} separator={"."}>
              {/*  + {formatNumbers(todayDeaths, "de")}  */}
            </CountUp>
          </TodayWrapper>

          <TotalWrapper>
            <span style={{ fontWeight: "bold", marginRight: ".5vw" }}>
              {/* Total:&nbsp;{numeral(deaths).format("0,0a")} */}
            </span>
            <br />
            (Exact number:&nbsp;
            {/* {formatNumbers(deaths, "fr")}) */}
          </TotalWrapper>
        </Counter>
        {/* <Counter theme="recovered">
          <ImgWrapper
            style={{
              background: `url(${img3}) no-repeat center/cover`,
            }}
          ></ImgWrapper>
          <Title>
            <i
              style={{
                fontSize: "1.3rem",
                marginRight: "1vh",
              }}
              className="fas fa-virus-slash"
            ></i>
            <TitleSpan>recovered</TitleSpan>
          </Title>
          <TodayWrapper>
            {" "}
            +
            <CountUp
                end={todayRecovered}
              start={0}
              duration={4}
              separator={"."}
            >
               + {formatNumbers(todayDeaths, "de")} 
            </CountUp>
            + {formatNumbers(todayRecovered, "de")} 
          </TodayWrapper>
          <TotalWrapper>
            <span style={{ fontWeight: "bold", marginRight: ".5vw" }}>
              Total:&nbsp;{numeral(recovered).format("0,0a")}
            </span>
            <br />
            (Exact number:&nbsp; {formatNumbers(recovered, "fr")})
          </TotalWrapper>
        </Counter> */}
      </CountersWrapper>
    </div>
  );
};
export default More;
