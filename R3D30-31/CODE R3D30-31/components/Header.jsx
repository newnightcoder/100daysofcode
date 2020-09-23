import React, { useState } from "react";
import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import { fetchBrief } from "../api";

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

// const Title = styled.h1`
//   font-size: 2rem;
//   font-weight: 900;
//   text-transform: uppercase;
//   /* padding-top: 1vh; */
// `;

const AppHeader = ({ data: { update } }) => {
  const [updateData, setUpdate] = useState("");

  // const updateBrief = async () => {
  //   const updatedData = await fetchBrief();
  //   setUpdate({ updatedData });
  //   console.log("data updated! here's the new fetch!", updatedData);
  // };

  return (
    <Header>
      <AppBar
        color="primary"
        style={{
          backgroundColor: "#424242",
          height: "90px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "3rem",
          textTransform: "uppercase",
          fontWeight: "700",
        }}
      >
        <div>
          {/* <Title> */}
          covid-19 live &nbsp;
          <i
            style={{ animation: "bleep 3000ms infinite", fontSize: "3rem" }}
            className="fas fa-virus"
          ></i>
        </div>
        {/* </Title>{" "} */}
        <div style={{ display: "flex" }}>
          <div
            style={{
              height: "20px",
              width: "100%",
              backgroundColor: "#424242",
              color: "white",
              fontSize: ".75rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "1vw",
            }}
          >
            Last update:&nbsp;{new Date(update).toLocaleString()}
          </div>

          <button style={{ cursor: "pointer" }}>refresh</button>
        </div>
      </AppBar>
    </Header>
  );
};

export default AppHeader;
