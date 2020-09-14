import React, { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import List from "./components/List.jsx";
import Form from "./components/Form.jsx";
import styled from "styled-components";

const AppWrapper = styled.div`
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: pink;
  transition: background-color 500ms;
  ${({ dark }) => dark && `background-color:lightslategray`};
  @media (max-width: 1025px) and (orientation: portrait) {
    height: 100%;
  }
`;

const Container = styled.div`
  background-color: transparent;
  height: 96vh;
  width: 400px;
  display: grid;
  grid-template-rows: 21vh 1fr 100px;
  /* box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14),
     0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2);
  box-shadow: -8px -8px 5px 2px rgba(0, 0, 0, 0.2); */
  box-shadow: -10px 0px 5px rgba(0, 0, 0, 0.2);
  position: relative;
  margin: 0;

  @media (max-width: 1025px) and (orientation: portrait) {
    height: -webkit-fill-available;
    width: 100%;
    /* height: -webkit-fill-available; */
  }
  /* @media (min-width: 1024px) {
    width: 50vw;
  } */
  /* @media (min-width: 1000px) {
    width: 30vw;
  } */
  /* @media (max-width: 360px) and (orientation: portrait) {
    height: 100vh;
    width: 100vw;
  }
  @media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {
    height: 100vh;
    width: 100vw;
  } */
`;

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todosToDisplay, setTodosToDisplay] = useState("all");
  const [dark, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((dark) => !dark);
  };

  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem("List-Storage")) || [];
    setTodos(storedList);
  }, []);

  useEffect(() => {
    localStorage.setItem("List-Storage", JSON.stringify(todos));
  });

  const addItem = (todo) => {
    const addedTodo = [...todos];
    addedTodo.unshift(todo);
    setTodos(addedTodo);
  };

  const checkItem = (blabla) => {
    const checkTodos = [...todos];
    checkTodos.forEach((todo) => {
      if (todo.id === blabla) todo.done = !todo.done;
    });
    setTodos(checkTodos);
  };

  const deleteItem = (blah) => {
    const deletedTodos = [...todos];
    const index = deletedTodos.findIndex((todo) => todo.id === blah);
    console.log(blah);
    deletedTodos.splice(index, 1);
    setTodos(deletedTodos);
  };

  const displayFilteredTodos = (string) => {
    setTodosToDisplay(string);
  };

  const handleDeleteMsg = (string) => {
    setTodosToDisplay(string);
  };

  const clearList = () => {
    setTodos([]);
    localStorage.clear();
  };

  return (
    <AppWrapper dark={dark}>
      <Container>
        <Header
          todos={todos}
          todosToDisplay={todosToDisplay}
          filterTodos={displayFilteredTodos}
          clear={clearList}
          deleteMsg={handleDeleteMsg}
          darkToggle={toggleDarkMode}
          dark={dark}
        />
        <List
          dark={dark}
          todos={todos}
          todosToDisplay={todosToDisplay}
          checkItem={checkItem}
          deleteItem={deleteItem}
        />
        <Form addItem={addItem} dark={dark} darkToggle={toggleDarkMode} />
      </Container>
    </AppWrapper>
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
