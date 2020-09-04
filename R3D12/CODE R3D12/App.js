import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import List from "./components/List";
import Form from "./components/Form";
import Footer from "./components/Footer";
import DateAndTime from "./components/DateAndTime";
import styled from "styled-components";

const Container = styled.div`
  //background-color: lightblue;
  height: 94vh;
  width: 30vw;
  display: grid;
  grid-template-rows: 20vh 3vh 1fr 10vh max-content;
  overflow: scroll;
  box-shadow: rgb(150, 150, 150) 5px 10px 10px;
`;

const App = () => {
  const [todos, setTodos] = useState([]);
  // const [todosToDisplay, setTodosToDisplay] = useState("all");

  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem("List-Storage")) || [];
    setTodos(storedList);
  }, []);

  useEffect(() => {
    localStorage.setItem("List-Storage", JSON.stringify(todos));
  });

  const addItem = (todo) => {
    const updatedTodos = [...todos];
    updatedTodos.unshift(todo);
    setTodos(updatedTodos);
  };

  const checkItem = (id) => {
    const checkTodos = [...todos];
    checkTodos.forEach((todo) => {
      if (todo.id === id) todo.done = !todo.done;
    });
    setTodos(checkTodos);
    //console.log(todos);
  };

  const deleteItem = (id) => {
    const deletedTodos = [...todos];
    const index = deletedTodos.findIndex((todo) => todo.id === id);
    //console.log(index);
    deletedTodos.splice(index, 1);
    setTodos(deletedTodos);
  };

  // const displayFilteredTodos = (string) => {
  //   setTodosToDisplay(string);

  //   let filteredTodos = [];
  //   if (todosToDisplay === "done") {
  //     filteredTodos = todos.filter((todo) => todo.done);
  //   } else if (todosToDisplay === "all") {
  //     filteredTodos = todos;
  //   } else if (todosToDisplay === "left") {
  //     filteredTodos = todos.filter((todo) => !todo.done);
  //   }

  //   setTodos(filteredTodos);
  // };

  return (
    <Container>
      <Header />
      <List todos={todos} checkItem={checkItem} deleteItem={deleteItem} />
      <Form addItem={addItem} />
      <Footer />
    </Container>
  );
};

export default App;

// import React, { Component } from "react";
// import Header from "./components/Header";
// import TodoForm from "./components/TodoForm";
// import Todo from "./components/Todo";
// import Footer from "./components/Footer";
// import { MDBBtn, MDBBtnGroup } from "mdbreact";
// // import ReactShadowScroll from "react-shadow-scroll";
// import "mdbreact/dist/css/mdb.css";
// import "./App.scss";

// class App extends Component {
//   state = {
//     todos: [],
//     todosToShow: "all",
//   };

//   addItem = (todo) => {
//     const todos = [todo, ...this.state.todos];
//     this.setState({
//       todos,
//     });
//   };

//   checkItem = (id) => {
//     const todos = [...this.state.todos];
//     todos.forEach((todo) => {
//       if (todo.id === id) {
//         todo.done = !todo.done;
//       }
//     });
//     this.setState({ todos });
//   };

//   deleteItem = (id) => {
//     const todos = [...this.state.todos];
//     const index = todos.findIndex((todo) => todo.id === id);
//     console.log(index);
//     todos.splice(index, 1);
//     this.setState({ todos });
//   };

//   componentDidMount() {
//     const todoStorage = JSON.parse(localStorage.getItem("todoStorage"));
//     if (todoStorage) this.setState({ todos: todoStorage });
//   }
//   componentDidUpdate() {
//     localStorage.setItem("todoStorage", JSON.stringify(this.state.todos));
//   }

//   clear = () => {
//     const todoStorage = JSON.parse(localStorage.getItem("todoStorage"));
//     localStorage.clear();
//     this.setState({ todos: todoStorage });
//   };
//   render() {
//     return (
//       <div className="App">
//         <Header />
//         <div className="list-container">
//           <h2 className="list-title">Let's get some work done!</h2>
//           <div className="todo-counter">
//             You have {this.state.todos.filter((todo) => !todo.done).length}{" "}
//             things to do.
//           </div>
//           <MDBBtnGroup size="sm" className="mb-4" style={{ border: "none" }}>
//             <MDBBtn color="none">display todos</MDBBtn>
//             <MDBBtn color="none">show completed</MDBBtn>
//             <MDBBtn color="none">delete completed</MDBBtn>
//             <MDBBtn color="none">delete all</MDBBtn>
//           </MDBBtnGroup>
//           <div className="btn-toolbar mb-4" role="toolbar"></div>
//           <ul>
//             {this.state.todos.map((todo) => (
//               <Todo
//                 style={{ animation: "appear 500ms forwards" }}
//                 todo={todo}
//                 deleteItem={this.deleteItem}
//                 checkItem={this.checkItem}
//               />
//             ))}
//           </ul>
//         </div>
//         <TodoForm addItem={this.addItem} />
//         <Footer />
//       </div>
//     );
//   }
// }
// export default App;
