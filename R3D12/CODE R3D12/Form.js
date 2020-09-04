import React, { useState } from "react";
import styled from "styled-components";
import { MDBBtn } from "mdbreact";

const TodoForm = styled.form`
  grid-row: 4;
  background-color: white;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Label = styled.label`
  color: white;
  font-size: 1rem;
`;

const Input = styled.input`
  height: 3vh;
  width: 70%;
  border: none;
  border-radius: 5px;
  outline: none;
  &:focus {
    border: 1px solid lightgray;
  }
`;

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
      <Label htmlFor="input">What's on your mind?</Label>
      <Input
        value={newTodo}
        placeholder="Add something you want to do..."
        onChange={handleInput}
      ></Input>
      <MDBBtn
        style={{
          textTransform: "uppercase",
          width: "80px",
          border: "none",
        }}
        type="submit"
      >
        Add
      </MDBBtn>
    </TodoForm>
  );
};
export default Form;
