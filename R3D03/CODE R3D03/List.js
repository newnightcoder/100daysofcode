import React, { Component } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { MDBIcon } from "mdbreact";
import "./List.scss";

class List extends Component {
  render() {
    return (
      <div className="list-container">
        <h2 className="list-title">Let's get some work done!</h2>
        <div className="todo-counter">
          {/* {this.state.todoCounter} */}
          {/* you have {this.state.todoCounter} things to do */}
          {/* You have x things to do */}
          {/* You have {this.state.todos.length} things to do. */}
        </div>
        <ul>
          {this.props.todos.map((todo) => (
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
              <div
                className="check"
                type="check"
                onClick={() => this.props.checkItem(todo.id)}
              >
                <MDBIcon far icon="check-square" size="lg" />
              </div>
              <div
                onClick={() => this.props.deleteItem(todo.id)}
                className="trash"
              >
                <MDBIcon far icon="trash-alt" size="lg" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default List;
