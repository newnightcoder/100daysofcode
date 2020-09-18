import React from "react";
import styled from "styled-components";

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
  background-color: lightblue;
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
  padding-top: 1vh;
  border: 5px solid transparent;
  border-radius: 5px;
  color: ${(props) => theme[props.theme].default};
  background-color: white;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);

  &:hover {
    cursor: pointer;
    border-bottom-color: ${(props) => theme[props.theme].default};
    box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
      0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
  }
  @media (max-width: 800px) {
    width: 80%;
    height: 25%;
  }
`;

const Counters = () => {
  return (
    <CountersWrapper>
      <Counter theme="infected">
        <i class="fas fa-lungs-virus"></i> infected:
      </Counter>
      <Counter theme="death">
        <i class="fas fa-skull-crossbones"></i> deaths:
      </Counter>
      <Counter theme="recovered">
        <i class="fas fa-virus-slash"></i> recovered:
      </Counter>
    </CountersWrapper>
  );
};

export default Counters;
