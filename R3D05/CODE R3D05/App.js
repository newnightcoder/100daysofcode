import React, { Component } from "react";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";
import Footer from "./components/Footer";
import "./App.scss";

class App extends Component {
  state = {
    todos: [],
  };

  addItem = (todo) => {
    const todos = [todo, ...this.state.todos];
    //todos.unshift();
    this.setState({
      todos,
    });
  };

  checkItem = (id) => {
    const todos = [...this.state.todos];
    todos.forEach((todo) => {
      if (todo.id === id) {
        todo.done = !todo.done;
      }
    });
    this.setState({ todos });
  };

  deleteItem = (id) => {
    const todos = [...this.state.todos];
    const index = todos.findIndex((todo) => todo.id === id);
    console.log(index);
    todos.splice(index, 1);
    this.setState({ todos });
  };

  componentDidMount() {
    const todoStorage = JSON.parse(localStorage.getItem("todoStorage")) || [];
    if (todoStorage) this.setState({ todos: todoStorage });
  }

  componentDidUpdate() {
    localStorage.setItem("todoStorage", JSON.stringify(this.state.todos));
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="list-container">
          <h2 className="list-title">Let's get some work done!</h2>
          <div className="todo-counter">
            You have {this.state.todos.length} things to do.
          </div>
          <ul>
            {this.state.todos.map((todo) => (
              <Todo
                todo={todo}
                deleteItem={this.deleteItem}
                checkItem={this.checkItem}
              />
            ))}
          </ul>
        </div>
        <TodoForm addItem={this.addItem} />
        <Footer />
      </div>
    );
  }
}
export default App;
