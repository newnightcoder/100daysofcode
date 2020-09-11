// import React from "react";
// // import DateAndTime from "./DateAndTime";
// import styled from "styled-components";

// const Header = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   color: #6c757d;
//   background-color: white;
//   width: 400px;
//   height: 8vh;
//   // grid-row: 1;
//   position: fixed;
//   overflow-y: hidden;
//   // border-bottom: 1px solid deepskyblue;
//   // rgba(200, 200, 200, 0.9);
//   z-index: 2;
//   // box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.12),
//   //   0 2px 4px -1px rgba(0, 0, 0, 0.2);
//   box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.2);
// `;
// const ListCounter = styled.div`
//   padding-top: 0.5vh;
//   text-align: center;
//   color: #6c757d;
//   font-style: italic;
//   font-size: 1rem;
//   &::after {
//     content: "";
//     display: block;
//     width: 150px;
//     border-bottom: 1px solid rgba(200, 200, 200, 0.5);
//     margin: 1.25vh auto;
//   }
//   animation: fadeIn 1500ms forwards;
//   @keyframes fadeIn {
//     0% {
//       opacity: 0;
//       transform: translateX(-10vh);
//     }
//     100% {
//       opacity: 1;
//       transform: translateX(-0);
//     }
//   }
// `;

// const ListHeader = ({ todos }) => {
//   const counter = todos.filter((todo) => !todo.done).length;
//   let message = `You currently have ${counter} things to do`;
//   if (counter === 0) {
//     message = `You have zero things to do...`;
//   } else if (counter === 1) {
//     message = `You currently have ${counter} thing to do`;
//   }
//   return (
//     <Header>
//       <ListCounter>{message}</ListCounter>
//     </Header>
//   );
// };

// export default ListHeader;
