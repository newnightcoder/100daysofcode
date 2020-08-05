import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { MDBIcon } from "mdbreact";
import "./App.scss";

const STORAGE = "list-of-todos";

class App extends Component {
  state = {
    todos: [],
    newTodo: "",
    id: 0, //i want it to be this.state.todos.length but it doesnt work!!!
    todoCounter: 0,
  };

  updateCounter = () => {
    if (this.state.todos.length === 1)
      this.state.todoCounter = "You have 1 thing to do";
    else if (this.state.todos.length >= 2)
      this.state.todoCounter = `You have`(
        this.state.todos.length
      )`things to do`;
    this.setState({ todoCounter: this.state.todos.length });
  };

  handleInput = (event) => {
    const value = event.currentTarget.value;
    this.setState({ newTodo: value });
    console.log(this.state.newTodo);
  };

  addItem = (event) => {
    event.preventDefault();
    const newTodo = this.state.newTodo;
    if (newTodo === "") return;

    const todo = {
      id: this.state.id,
      task: newTodo,
      done: false,
    };
    const todos = [...this.state.todos];
    this.setState({
      id: this.state.id + 1,
    });
    todos.unshift(todo);
    this.setState({ todos: todos });
    this.setState({ newTodo: "" });
  };

  checkItem = (id) => {
    const todos = [...this.state.todos];

    todos.map((todo) => {
      if (todo.id === id) {
        todo.done = !todo.done;
        const count = todo.done
          ? (this.state.todos.length -= 1)
          : (this.state.todos.lengh = this.state.todos.length);
        console.log(count);
      }
    });
    this.setState({ todos: todos });
    console.log(this.state.todos.length);
  };

  log = () => {
    console.log(this.state.todos.length);
  };

  deleteItem = (id) => {
    const todos = [...this.state.todos];
    const index = todos.findIndex((todo) => todo.id === id);
    todos.splice(index, 1);
    this.setState({ todos: todos });
  };

  render() {
    return (
      <div className="App">
        {/* Header Form*/}
        <Container fluid className="header">
          <div className="logo"></div>
          <Form className="form" onSubmit={this.addItem}>
            <h1>Welcome to your TO-DO app!</h1>
            <Form.Group controlId="formText">
              <Form.Label>What's on your mind?</Form.Label>
              <Form.Control
                value={this.state.newTodo}
                onChange={this.handleInput}
                type="text"
                className="input"
                placeholder="Type something you have to do..."
                autoComplete="off"
              />
              <Button onClick={this.log} type="submit" variant="secondary">
                Add
              </Button>{" "}
            </Form.Group>
          </Form>
        </Container>

        {/* List */}
        <div className="list-container">
          <h2 className="list-title">Let's get some work done!</h2>
          <div className="todo-counter">
            {/* {this.state.todoCounter} */}
            {/* you have {this.state.todoCounter} things to do */}
            You have {this.state.todos.length} things to do.
          </div>
          <ul>
            {this.state.todos.map((todo) => (
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
                  onClick={() => this.checkItem(todo.id)}
                >
                  <MDBIcon far icon="check-square" size="lg" />
                </div>
                <div onClick={() => this.deleteItem(todo.id)} className="trash">
                  <MDBIcon far icon="trash-alt" size="lg" />
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer */}
        <footer>
          Built with React by Nightcoder&nbsp;
          <span role="img" aria-label="sunglasses emoji">
            {" "}
            😎
          </span>
        </footer>
      </div>
    );
  }
}

export default App;
