import React, { useState } from "react";
import styled, { css } from "styled-components";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
// import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

const TodoForm = styled.form`
  grid-row: 3;
  width: 400px;
  background-color: white;
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  border-top: 1px solid rgba(200, 200, 200, 0.4);
  z-index: 2;
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.12);
  ${({ dark }) =>
    dark &&
    css`
      background-color: #333333;
    `}
  transition: background-color 500ms;
  @media (max-width: 1023px) and (orientation: portrait) {
    width: 100vw;
    /* position: fixed;
    bottom: 0; */
    padding: 3vh 0 1.5vh 0;
  }
  @media (max-width: 1023px) and (orientation: landscape) {
    width: 100vw;
    /* position: fixed;
    bottom: 0; */
    padding: 4vh 0 1.5vh 0;
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
  ${({ dark }) => dark && `border:1px solid rgba(200, 200, 200)`};

  &:hover {
    transform: scale(1.1);
    border-color: deepskyblue;
    ${({ dark }) => dark && `border:1px solid #f8bbd0`};
  }
`;

const CustomTextField = withStyles({
  root: {
    maxHeight: "100%",
    background: "#fafafa",
    boxShadow: `inset 0 1px 10px 0 rgba(0, 0, 0, 0.12), inset 0 2px 4px -1px rgba(0, 0, 0, 0.2)`,
    borderRadius: "50px",
    "& fieldset": {
      border: "1px solid rgba(100, 100, 100,.5)",
      backgroundColor: "rgba(255,255,255,.5)",
    },
    "& label.Mui-focused": {
      color: (props) => (props.dark ? "#f8bbd0" : "deepskyblue"),
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
        borderColor: (props) => (props.dark ? "#f8bbd0" : "deepskyblue"),
        borderWidth: "1px",
      },
      "&:hover fieldset": {
        borderColor: (props) => (props.dark ? "#f8bbd0" : "deepskyblue"),
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
        dark={dark}
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
        <BtnWrapper dark={dark}>
          {/* <AddCircleOutlineIcon
            fontSize="large"
            style={{ height: "50px", color: "rgb(200, 200, 200)" }}
          /> */}
          <span role="img" aria-label="test de">
            🚀
          </span>
        </BtnWrapper>
      </IconButton>
    </TodoForm>
  );
};

export default Form;
