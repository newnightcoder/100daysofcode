import React, { Component } from "react";
import Header from "./components/Header";
import TodoForm from "./components/Form";
import List from "./components/List";
import Footer from "./components/Footer";
import "./App.scss";

class App extends Component {
  state = {
    todos: [],
    newTodo: "",
    id: 0, //i want it to be this.state.todos.length but i don't know how!!! (yet)
    todoCounter: 0,
  };

  handleInput = (event) => {
    event.preventDefault();
    const value = event.currentTarget.value;
    this.setState({ newTodo: value });
    // better (no need for const value) :
    // this.setState({ newTodo: event.currentTarget.value; });
  };

  addItem = (event) => {
    event.preventDefault();
    const newTodo = this.state.newTodo;
    if (newTodo.trim().length === 0) return; //same as if(newTodo ==='')

    const todo = {
      id: this.state.id,
      task: newTodo,
      done: false,
    };
    //const updateCounter = this.state.todoCounter + 1;
    const todos = [...this.state.todos];
    todos.unshift(todo);
    this.setState({
      todos,
      newTodo: "",
      id: this.state.id + 1,
      todoCounter: this.state.todoCounter + 1,
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

  render() {
    return (
      <div className="App">
        <Header />
        <List
          todos={this.state.todos}
          deleteItem={this.deleteItem}
          checkItem={this.checkItem}
        />
        <TodoForm
          newTodo={this.state.newTodo}
          handleInput={this.handleInput}
          addItem={this.addItem}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
