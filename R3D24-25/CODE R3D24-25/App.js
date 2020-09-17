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
  background-color: #81d4fa;
  transition: background-color 500ms;
  ${({ dark }) => dark && `background-color:#616161`};

  @media (max-width: 1023px) and (orientation: portrait) {
    background-color: transparent;
  }
`;

const Container = styled.div`
  height: 96vh;
  width: 400px;
  display: grid;
  grid-template-rows: 21vh 1fr 100px;
  box-shadow: -10px 0px 5px rgba(0, 0, 0, 0.2);
  position: relative;
  margin: 0;

  @media (max-width: 1023px) and (orientation: portrait) {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 100%;
  }
  @media (max-width: 1023px) and (orientation: landscape) {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 100%;
  }
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
    // setInterval(() => setTodosToDisplay("all"), 1000);
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
