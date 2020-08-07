import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { MDBIcon } from "mdbreact";
import "./Todo.scss";

//function Todo = (props){}, or arrow function:
const Todo = ({ todo, checkItem, deleteItem }) => (
  <li>
    <div
      className="todo"
      style={{
        textDecoration: todo.done ? "line-through" : "none",
        color: todo.done ? "gray" : null,
        backgroundColor: todo.done ? "" : null,
      }}
    >
      {todo.task}
    </div>
    <div className="check" type="check" onClick={() => checkItem(todo.id)}>
      <MDBIcon far icon="check-square" size="lg" />
    </div>
    <div onClick={() => deleteItem(todo.id)} className="trash">
      <MDBIcon far icon="trash-alt" size="lg" />
    </div>
  </li>
);

export default Todo;
