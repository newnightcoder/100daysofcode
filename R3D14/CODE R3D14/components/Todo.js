import React from "react";
import styled from "styled-components";
// import "@fortawesome/fontawesome-free/css/all.min.css";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import DeleteIcon from "@material-ui/icons/Delete";
import { useTransition, animated } from "react-spring";

const Todo = ({ todo, checkItem, deleteItem }) => {
  const toggle = {
    textDecoration: todo.done ? "line-through" : "none",
    color: todo.done ? "gray" : null,
    backgroundColor: todo.done ? "" : null,
  };
  const checkBtn = {
    cursor: "pointer",
    color: todo.done ? "lightgray" : "",
  };
  const classes = useStyles();

  const transition = useTransition(todo, (todo) => todo.id, {
    from: { opacity: 0, transform: "translateX(-10vw)" },
    enter: { opacity: 1, transform: "translateX(0)" },
    leave: { opacity: 0, transform: "translateX(10vw)" },
  });

  return transition.map(({ item, props, key }) => (
    <StyledTodo style={{ ...toggle, ...props }} key={key}>
      {item.task}
      <div style={btnWrapper}>
        <IconButton
          className={classes.root}
          size="medium"
          onClick={() => checkItem(item.id)}
        >
          <CheckCircleOutlineIcon
            variant="outlined"
            style={checkBtn}
            icon="check"
            type="checkbox"
          />{" "}
        </IconButton>

        <IconButton
          className={classes.root}
          size="medium"
          onClick={() => deleteItem(item.id)}
        >
          <DeleteIcon style={trashBtn} icon="trash" />
        </IconButton>
      </div>
    </StyledTodo>
  ));
  // );
};

const StyledTodo = styled(animated.li)`
  margin-block-start: 0;
  margin-block-end: 0;
  min-height: 7vh;
  max-width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: black;
  font-size: 1rem;
  background-color: white;
  border-radius: 2px;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.2);

  padding: 0.5em 1em;
  margin: 1vh auto;
  position: relative;
  // &:hover {
  //   cursor: text;
  // }
  // animation: fade 1000ms forwards;
  // @keyframes fade {
  //   0% {
  //     opacity: 0;
  //   }
  //   100% {
  //     opacity: 1;
  //   }
  // }
`;
const useStyles = makeStyles({
  root: {
    padding: "10px",
  },
});

const btnWrapper = {
  width: "7vw",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  right: "0",
};

const trashBtn = {
  cursor: "pointer",
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
