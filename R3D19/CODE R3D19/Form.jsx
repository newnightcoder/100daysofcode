import React, { useState } from "react";
import styled from "styled-components";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";

const TodoForm = styled.form`
  grid-row: 4;
  background-color: white;
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-top: 1px solid rgba(200, 200, 200, 0.4);
  0 1px 10px 0 rgba(0, 0, 0, 0.12);
  z-index: 2;
  box-shadow: 0 1px 10px 0 rgba(0,0,0,0.12);

`;

const CustomTextField = withStyles({
  root: {
    maxHeight: "100%",
    background: "#fafafa",
    boxShadow: `inset 0 1px 10px 0 rgba(0, 0, 0, 0.12), inset 0 2px 4px -1px rgba(0, 0, 0, 0.2)`,
    borderColor: "yellow",
    borderRadius: "50px",
    "& fieldset": {
      borderColor: "rgba(200, 200, 200, 0.4)",
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

// const useStyles = makeStyles({
//   root: {
//     "& label.Mui-focused": {
//       color: "dimgray",
//     },
//     "& .MuiOutlinedInput-root": {
//       borderRadius: "2px",
//       height: "6vh",
//       "& fieldset": {
//         borderColor: "yellow",
//       },
//       "&:hover fieldset": {
//         borderColor: "#003da2",
//       },
//       "&.Mui-focused fieldset": {
//         borderColor: "deepskyblue",
//       },
//       "&:placeholder.Mui": {
//         color: "blue",
//       },
//     },
//   },
// });

const Form = ({ addItem }) => {
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

  // const classes = useStyles();

  return (
    <TodoForm onSubmit={handleAdd}>
      <CustomTextField
        // className={classes.root}
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="60"
          height="60"
          viewBox="0 0 172 172"
          // style={svgBtn}
        >
          <g
            fill="none"
            fillRule="nonzero"
            stroke="none"
            strokeWidth="1"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="10"
            strokeDasharray=""
            strokeDashoffset="0"
            fontFamily="none"
            fontWeight="none"
            fontSize="none"
            textAnchor="none"
            style={{ mixBlendMode: "normal" }}
          >
            <path d="M0,172v-172h172v172z" fill="none"></path>
            <g fill="#2196f3">
              {/*  #003da2" */}
              <path d="M86,6.88c-43.62952,0 -79.12,35.49048 -79.12,79.12c0,43.62952 35.49048,79.12 79.12,79.12c43.62952,0 79.12,-35.49048 79.12,-79.12c0,-43.62952 -35.49048,-79.12 -79.12,-79.12zM127.28,89.44h-37.84v37.84h-6.88v-37.84h-37.84v-6.88h37.84v-37.84h6.88v37.84h37.84z"></path>
            </g>
          </g>
        </svg>
      </IconButton>
    </TodoForm>
  );
};

export default Form;
