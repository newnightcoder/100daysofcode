import React from "react";
import styled from "styled-components";
import CountUp from "react-countup";

const CountersWrapper = styled.div`
  /* border: 1px solid yellow; */
  width: 100%;
  height: 12vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 800px) {
    flex-direction: column;
    height: 50vh;
    width: 100%;
  }
`;

const theme = {
  infected: {
    default: "orange",
  },
  death: {
    default: "red",
  },
  recovered: {
    default: "green",
  },
};

const Counter = styled.div`
  width: 30%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: lightblue;
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
  padding-top: 1vh;
  border-radius: 5px;
  color: ${(props) => theme[props.theme].default};
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.4);
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
    /* border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px; */
  }

  &:hover {
    cursor: pointer;
    transform: translateY(-3px);

    box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
      0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
    &::after {
      background-color: ${(props) => theme[props.theme].default};
    }
  }
  @media (max-width: 800px) {
    width: 80%;
    height: 25%;
  }
`;

const BriefWrapper = styled.div`
  color: dimgray;
  font-size: 1.5rem;
`;
const BriefLoader = styled.div`
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  font-style: italic;
  display: flex;
  justify-content: center;
`;
// const Loader = styled.div`
//   height: 20px;
//   width: 20px;
//   border-top: 2px solid blue;
//   background-color: transparent;
// `;

const Counters = ({ data: { confirmed, deaths, recovered } }) => {
  if (!confirmed || !deaths || !recovered) {
    return <BriefLoader>loading data...</BriefLoader>;
  }

  return (
    <CountersWrapper>
      <Counter theme="infected">
        <div>
          <i style={{ fontSize: "1.3rem" }} className="fas fa-lungs-virus"></i>{" "}
          infected:
        </div>
        <BriefWrapper>
          {" "}
          <CountUp end={confirmed} start={0} duration={3} separator={" "} />
        </BriefWrapper>
      </Counter>

      <Counter theme="death">
        <div>
          <i
            style={{ fontSize: "1.3rem" }}
            className="fas fa-skull-crossbones"
          ></i>{" "}
          deaths:
        </div>
        <BriefWrapper>
          <CountUp end={deaths} start={0} duration={3} separator={" "} />
        </BriefWrapper>
      </Counter>
      <Counter theme="recovered">
        <div>
          <i style={{ fontSize: "1.3rem" }} className="fas fa-virus-slash"></i>{" "}
          recovered:
        </div>
        <BriefWrapper>
          {" "}
          <CountUp end={recovered} start={0} duration={3} separator={" "} />
        </BriefWrapper>
      </Counter>
    </CountersWrapper>
  );
};

export default Counters;
