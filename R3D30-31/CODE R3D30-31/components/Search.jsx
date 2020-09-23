import React from "react";

const Search = () => {
  return (
    <div style={{ height: "50vh" }}>
      <h1 style={{ paddingLeft: "15vw" }}>Search a country</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "97%",
          height: "35vh",
          overflowY: "scroll",
          overflowX: "hidden",
          margin: "2vh auto",
          backgroundColor: "white",
          position: "relative",
          borderRadius: "5px",
          //   border: "2px solid black",
        }}
      ></div>
    </div>
  );
};

export default Search;
