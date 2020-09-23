import React from "react";

const CountryTable = ({ data }) => {
  console.log("table component type", typeof data);
  // const listCountries = [countries];
  // console.log("array créé!", listCountries.length);
  // countries.map((country) => {
  return (
    <div style={{ width: "100%", height: "35vh" }}>
      <h1
        style={{
          // width: "100%",
          margin: "2vh 0 5vh 15vw",
        }}
      >
        All countries recap{" "}
      </h1>
      <div
        style={{
          // border: "1px solid yellow",
          display: "flex",
          // flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          width: "80%",
          height: "35vh",
          overflowY: "scroll",
          overflowX: "hidden",
          margin: "2vh auto",
          backgroundColor: "white",
          position: "relative",
          borderRadius: "5px",
          border: "2px solid black",
        }}
      >
        <div
          style={{
            // border: "1px solid pink",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: "absolute",
            top: "10px",
            left: "0",
            width: "35px",
          }}
        >
          {data.map(({ countryInfo }) => (
            <img
              alt="country flag"
              src={countryInfo.flag}
              height="20px"
              width="35px"
              style={{ borderRadius: "2px", margin: "3px 0 3px 10px" }}
            />
          ))}
        </div>
        <div
          style={{
            // border: "1px solid red",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: "absolute",
            top: "10px",
            left: "50px",
            width: "95%",
          }}
        >
          {data.map(({ country }) => (
            <div
              style={{
                border: "1px solid grey",
                borderLeft: "none",
                borderRight: "none",
                margin: "2px 0",
                height: "20px",
              }}
            >
              {country}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountryTable;
