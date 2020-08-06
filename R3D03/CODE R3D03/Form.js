import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Form.scss";

class TodoForm extends Component {
  log = () => {
    console.log(this.props.newTodo);
  };

  render() {
    return (
      <Container fluid className="form-container">
        <Form className="form" onSubmit={this.props.addItem}>
          <Form.Group controlId="formText" className="form-group">
            <Form.Label className="label">What's on your mind?</Form.Label>
            <Form.Control
              value={this.props.newTodo}
              onChange={this.props.handleInput}
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
