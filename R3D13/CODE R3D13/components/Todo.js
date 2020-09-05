import React from "react";
import styled from "styled-components";
import "@fortawesome/fontawesome-free/css/all.min.css";
import IconButton from "@material-ui/core/IconButton";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import DeleteIcon from "@material-ui/icons/Delete";

const StyledTodo = styled.li`
  height: 3vh;
  max-width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: black;
  font-size: 1rem;
  background-color: white;
  border-bottom: 1px solid lightgray;
  padding: 0.5em 1em;
  margin: 1vh auto;
  position: relative;
  // animation: fade 1000ms forwards;

  &:hover {
    cursor: text;
  }
  @keyframes fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Todo = ({ todo, checkItem, deleteItem }) => {
  return (
    <StyledTodo
      style={{
        textDecoration: todo.done ? "line-through" : "none",
        color: todo.done ? "gray" : null,
        backgroundColor: todo.done ? "" : null,
        animation: "fade 1000ms forwards",
      }}
    >
      {todo.task}
      <div
        style={{
          // border: "1px solid red",
          width: "8vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: ".5vh",
          position: "absolute",
          right: "-1vw",
        }}
      >
        <IconButton size="medium" onClick={() => checkItem(todo.id)}>
          <CheckCircleOutlineIcon
            variant="outlined"
            // color="default"
            style={{
              // fontSize: "1.5rem",
              cursor: "pointer",
              color: todo.done ? "lightgray" : "",
            }}
            icon="check"
            type="checkbox"
          />{" "}
        </IconButton>

        <IconButton size="medium" onClick={() => deleteItem(todo.id)}>
          <DeleteIcon
            // color="default"
            style={{ cursor: "pointer" }}
            icon="trash"
          />
        </IconButton>
      </div>
    </StyledTodo>
  );
};
export default Todo;

// import React from "react";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import { MDBIcon, MDBBtn } from "mdbreact";
// // import FlipMove from "react-flip-move";

// import "./Todo.scss";

// //function Todo = (props){}, or arrow function:
// const Todo = ({ todo, checkItem, deleteItem }) => (
//   <li>
//     <div
//       className="todo"
// style={{
//   textDecoration: todo.done ? "line-through" : "none",
//   color: todo.done ? "gray" : null,

//   //backgroundColor: todo.done ? "" : null,
// }}
//     >
//       {todo.task}
//     </div>
//     <MDBBtn
//       color="transparent"
//       style={{ borderColor: "lightgray" }}
//       className="check"
//       type="checkbox"
//       onClick={() => checkItem(todo.id)}
//     >
//       <MDBIcon
//         style={{ color: todo.done ? "lightgray" : "" }}
//         far
//         icon="check-square"
//         size="lg"
//       />
//     </MDBBtn>
//     <MDBBtn
//       // style={{ border: "none" }}
//       color="transparent"
//       onClick={() => deleteItem(todo.id)}
//       className="trash"
//     >
//       <MDBIcon far icon="trash-alt" size="lg" />
//     </MDBBtn>
//   </li>
// );

// export default Todo;
