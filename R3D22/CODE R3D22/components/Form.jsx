import React, { useState } from "react";
import styled, { css } from "styled-components";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";

const TodoForm = styled.form`
  grid-row: 3;
  /* height: 100px; */
  width: 400px;
  background-color: white;
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-top: 1px solid rgba(200, 200, 200, 0.4);
  z-index: 2;
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.12);
  ${({ dark }) =>
    dark &&
    css`
      background-color: blue;
    `}
  transition: background-color 500ms;
  @media (max-width: 1025px) and (orientation: portrait) {
    width: 100vw;
    position: fixed;
    bottom: 0;
    padding: 1vh 0;
  }
`;

const BtnWrapper = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(200, 200, 200);
  background-color: transparent;
  z-index: 100;
  &:hover {
    transform: scale(1.1);
  }
`;

const CustomTextField = withStyles({
  root: {
    maxHeight: "100%",
    background: "#fafafa",
    boxShadow: `inset 0 1px 10px 0 rgba(0, 0, 0, 0.12), inset 0 2px 4px -1px rgba(0, 0, 0, 0.2)`,
    // borderColor: "yellow",
    borderRadius: "50px",
    "& ({ dark })": {
      backgroundColor: "blue",
    },
    // `},

    "& fieldset": {
      border: "1px solid rgba(200, 200, 200)",
    },
    "& label.Mui-focused": {
      color: "deepskyblue",
      fontWeight: "600",
      top: "-1.5vh",
      left: "-.5vw",
    },
    "& .MuiInputLabel-root": {
      color: "dimgray",
      whiteSpace: "nowrap",
      left: "1vw",

      "@media (max-width: 350px)": {
        fontSize: ".75rem",
      },
    },
    "& .MuiOutlinedInput-root": {
      borderRadius: "50px",
      "&.Mui-focused fieldset": {
        borderColor: "deepskyblue",
        borderWidth: "1px",
      },
      "&:hover fieldset": {
        borderColor: "deepskyblue",
      },
      "& placeholderMui-focused": {
        color: "deepskyblue",
      },
    },
  },
})(TextField);

const Form = ({ addItem, dark }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleInput = (event) => {
    event.preventDefault();
    setNewTodo(event.currentTarget.value);
    console.log("input level", event.currentTarget.value);
  };

  const handleAdd = (event) => {
    event.preventDefault();
    if (newTodo.trim().length === 0) return; //.trim().length to check for/prevent white spaces
    const todo = {
      task: newTodo,
      id: Date.now(),
      done: false,
    };
    addItem(todo);
    setNewTodo("");
  };

  return (
    <TodoForm dark={dark} onSubmit={handleAdd}>
      <CustomTextField
        autoComplete="off"
        id="outlined-basic"
        variant="outlined"
        label="Type something you have to do..."
        rowsMax={4}
        value={newTodo}
        onChange={handleInput}
        style={{
          width: "75%",
          paddingBottom: "-1vh",
          marginRight: ".5vw",
        }}
      />
      <IconButton type="submit" size="small">
        <BtnWrapper>
          <span role="img" aria-label="test de">
            🚀
          </span>
        </BtnWrapper>
      </IconButton>
    </TodoForm>
  );
};

export default Form;
