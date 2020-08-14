import React, { useReducer } from "react";
import ListHeader from "./ListHeader";
import Todo from "./Todo";
import styled from "styled-components";

const ListContainer = styled.section`
  background-color: #f5f5f5;
  border: 2px solid black;
  grid-row: 2;
`;
const TodoList = styled.ul`
  list-style-type: none;
  background-color: blue;
  padding: 0;
`;

const List = ({ todos, checkItem, deleteItem }) => {
  const filterReducer = (state, action) => {
    switch (action.type) {
      case "SHOW_ALL":
        return "ALL";
      case "SHOW_COMPLETE":
        return "COMPLETE";
      case "SHOW_INCOMPLETE":
        return "INCOMPLETE";
      default:
        throw new Error();
    }
  };

  const handleShowAll = () => {
    dispatchFilter({ type: "SHOW_ALL" });
  };

  const handleShowComplete = () => {
    dispatchFilter({ type: "SHOW_COMPLETE" });
  };

  const handleShowIncomplete = () => {
    dispatchFilter({ type: "SHOW_INCOMPLETE" });
  };

  const [filter, dispatchFilter] = useReducer(filterReducer, "ALL");

  const filteredTodos = todos.filter((todo) => {
    if (filter === "ALL") {
      return true;
    }

    if (filter === "COMPLETE" && todo.complete) {
      return true;
    }

    if (filter === "INCOMPLETE" && !todo.complete) {
      return true;
    }

    return false;
  });
  return (
    <ListContainer>
      {" "}
      <ListHeader
        todos={todos}
        all={handleShowAll}
        done={handleShowComplete}
        notDone={handleShowIncomplete}
      />
      <TodoList>
        {filteredTodos.map((todo) => (
          <Todo
            todo={todo}
            checked={todo.done}
            checkItem={checkItem}
            deleteItem={deleteItem}
          />
        ))}
      </TodoList>
    </ListContainer>
  );
};

export default List;
