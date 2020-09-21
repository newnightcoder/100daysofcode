import React from "react";
import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";

const Header = styled.div`
  height: 40px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: dimgray;
  /* margin-top: 2vh; */
  @keyframes bleep {
    0% {
      opacity: 1;
    }
    25% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 900;
  text-transform: uppercase;
  /* padding-top: 1vh; */
`;

const AppHeader = () => {
  return (
    <Header>
      <AppBar
        color="primary"
        style={{
          backgroundColor: "#424242",
          height: "80px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "3rem",
          textTransform: "uppercase",
          fontWeight: "700",
        }}
      >
        {/* <Title> */}
        covid-19 live &nbsp;
        <i
          style={{ animation: "bleep 3000ms infinite", fontSize: "3rem" }}
          className="fas fa-virus"
        ></i>{" "}
        {/* </Title>{" "} */}
      </AppBar>
    </Header>
  );
};

export default AppHeader;
