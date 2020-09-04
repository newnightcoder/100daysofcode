import React from "react";
import styled from "styled-components";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { MDBIcon, MDBBtn } from "mdbreact";

const StyledTodo = styled.li`
  height: 3vh;
  max-width: 90%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: black;
  font-size: 1rem;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 0.5em 1em;
  margin: 0.5em 1em 0.3em 0;
  &:hover {
    cursor: text;
  }
`;

const Todo = ({ todo, checkItem, deleteItem }) => {
  return (
    <StyledTodo
      style={{
        textDecoration: todo.done ? "line-through" : "none",
        color: todo.done ? "gray" : null,
        backgroundColor: todo.done ? "" : null,
      }}
    >
      {todo.task}
      <MDBBtn
        onClick={() => checkItem(todo.id)}
        //color="transparent"
        //style={{ borderColor: "lightgray" }}
        // className="check"
        type="checkbox"
      >
        <MDBIcon
          style={{ color: todo.done ? "lightgray" : "" }}
          far
          icon="check-square"
          size="lg"
        />
      </MDBBtn>
      <MDBBtn
        onClick={() => deleteItem(todo.id)}
        //color="transparent"
        // className="trash"
      >
        <MDBIcon far icon="trash-alt" size="lg" />
      </MDBBtn>
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
