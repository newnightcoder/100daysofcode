import React from "react";
import styled from "styled-components";
// import "@fortawesome/fontawesome-free/css/all.min.css";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import DeleteIcon from "@material-ui/icons/Delete";
import { useTransition, animated } from "react-spring";

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
`;

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

const useStyles = makeStyles({
  root: {
    padding: "10px",
  },
});

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
    from: { opacity: 0, transform: "scale(0)" },
    enter: { opacity: 1, transform: "scale(1)" },
    leave: { opacity: 0, transform: "scale(0)" },
  });

  return transition.map(({ item, props, key }) => (
    <StyledTodo style={{ ...toggle, ...props }} key={item.id}>
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

export default Todo;
