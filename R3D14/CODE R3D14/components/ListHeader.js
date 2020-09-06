import React from "react";
import DateAndTime from "./DateAndTime";
import styled from "styled-components";

const ListHeader = () => (
  <Header>
    <DateAndTime />
  </Header>
);

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #6c757d;
  background-color: white;
  width: 30vw;
  height: 8vh;
  grid-row: 1;
  position: fixed;
  overflow-y: hidden;
  // border-bottom: 1px solid deepskyblue;
  // rgba(200, 200, 200, 0.9);
  z-index: 2;
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.12),
    0 2px 4px -1px rgba(0, 0, 0, 0.2);
`;
// const StyledH3 = styled.div`
//   font-size: 1.5rem;
//   font-weight: light;
//   animation: slide 1000ms forwards;
//   @keyframes slide {
//     0% {
//       opacity: 0;
//       transform: translateX(-12vw);
//     }
//     15% {
//       opacity: 0;
//     }
//     100% {
//       opacity: 1;
//       transform: translateX(0);
//     }
//   }
// `;

export default ListHeader;
