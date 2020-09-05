import React, { useState } from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

const TodoForm = styled.form`
  grid-row: 4;
  background-color: white;
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border-top: 1px solid rgba(200, 200, 200, 0.4);
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
    0 1px 10px 0 rgba(0, 0, 0, 0.12);
  z-index: 2;
`;

// const Label = styled.label`
//   color: white;
//   font-size: 1rem;
// `;

// const Input = styled.input`
//   height: 3vh;
//   width: 70%;
//   border: none;
//   border-radius: 5px;
//   outline: none;
//   &:focus {
//     border: 1px solid lightgray;
//   }
// `;

const Form = ({ addItem }) => {
  const [newTodo, setNewTodo] = useState("");
  const [id, setId] = useState("0");

  const handleInput = (event) => {
    event.preventDefault();
    //const value = ;
    setNewTodo(event.currentTarget.value);
    console.log("input level", event.currentTarget.value);
    // better (no need for const value) :
    // this.setState({ newTodo: event.currentTarget.value; });
  };

  const handleAdd = (event) => {
    event.preventDefault();
    if (newTodo.trim().length === 0) return; //.trim().length to check for/prevent white spaces
    const todo = {
      task: newTodo,
      id: id,
      done: false,
    };
    addItem(todo);
    setId(id + 1);
    setNewTodo("");
  };

  return (
    <TodoForm onSubmit={handleAdd}>
      <TextField
        autoComplete="off"
        id="outlined-basic"
        variant="outlined"
        color="secondary"
        label="Type a thing you have to do"
        rowsMax={4}
        value={newTodo}
        onChange={handleInput}
        style={{
          width: "75%",
          paddingBottom: "-1vh",
        }}
      />

      <IconButton type="submit" size="small">
        {/* <AddCircleOutlineIcon
          style={{ fontSize: "4rem", color: "deepskyblue" }}
        /> */}
        <svg
          style={{ fontSize: "5rem" }}
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="60"
          height="60"
          viewBox="0 0 172 172"
          // style=" fill:#000000;"
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
            <g fill="#003da2">
              <path d="M86,6.88c-43.62952,0 -79.12,35.49048 -79.12,79.12c0,43.62952 35.49048,79.12 79.12,79.12c43.62952,0 79.12,-35.49048 79.12,-79.12c0,-43.62952 -35.49048,-79.12 -79.12,-79.12zM127.28,89.44h-37.84v37.84h-6.88v-37.84h-37.84v-6.88h37.84v-37.84h6.88v37.84h37.84z"></path>
            </g>
          </g>
        </svg>
      </IconButton>
    </TodoForm>
  );
};
export default Form;
