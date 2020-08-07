import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./TodoForm.scss";

class TodoForm extends Component {
  state = {
    newTodo: "",
    id: 0,
  };

  log = () => {
    console.log(this.state.newTodo);
  };

  handleInput = (event) => {
    event.preventDefault();
    const value = event.currentTarget.value;
    this.setState({ newTodo: value });
    // better (no need for const value) :
    // this.setState({ newTodo: event.currentTarget.value; });
  };

  handleAdd = (event) => {
    event.preventDefault();
    if (this.state.newTodo.trim().length === 0) return; //.trim().length to check for/prevent white spaces
    const todo = {
      task: this.state.newTodo,
      id: this.state.id,
      done: false,
    };
    this.props.addItem(todo);
    this.setState({ newTodo: "", id: this.state.id + 1 });
  };

  render() {
    return (
      <Container fluid className="form-container">
        <Form className="form" onSubmit={this.handleAdd}>
          <Form.Group controlId="formText" className="form-group">
            <Form.Label className="label">What's on your mind?</Form.Label>
            <Form.Control
              value={this.state.newTodo}
              onChange={this.handleInput}
              type="text"
              className="input"
              placeholder="Type something you have to do..."
              autoComplete="off"
            />
            <Button type="submit" variant="secondary">
              Add
            </Button>{" "}
          </Form.Group>
        </Form>
      </Container>
    );
  }
}
export default TodoForm;
