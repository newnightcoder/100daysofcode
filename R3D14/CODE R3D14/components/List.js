import React from "react";
import ListHeader from "./ListHeader";
import Todo from "./Todo";
import styled from "styled-components";

const List = ({ todos, checkItem, deleteItem, todosToDisplay }) => {
  const counter = todos.filter((todo) => !todo.done).length;
  let message = `You currently have ${counter} things to do`;
  if (counter === 0) {
    message = `You have zero things to do...`;
  } else if (counter === 1) {
    message = `You currently have ${counter} thing to do`;
  }

  let filteredTodos = [];
  if (todosToDisplay === "all") {
    filteredTodos = todos;
  } else if (todosToDisplay === "done") {
    filteredTodos = todos.filter((todo) => todo.done);
  } else if (todosToDisplay === "to-do") {
    filteredTodos = todos.filter((todo) => !todo.done);
  }

  return (
    <ListContainer>
      {" "}
      <ListHeader style={{ gridRow: "1" }} todos={todos} />
      <TodoList style={{ gridRow: "2" }}>
        <ListCounter>{message}</ListCounter>
        {filteredTodos.map((todo) => (
          <Todo
            key={todo.id}
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

const ListContainer = styled.section`
  background-color: #fafafa;
  grid-row: 3;
  // padding: 0 1vw 0 1vw;
  width: 100%;
  //height: calc(95vh - 18vh - 3vh - 12vh);
  overflow-y: scroll;
  overflow-x: hidden;
  display: grid;
  grid-template-rows: 10vh 1fr;
`;
const TodoList = styled.ul`
  list-style-type: none;
  background-color: #fafafa;
  padding: 0 0 1vh 0;
  width: 100%;
  height: 1fr;
  grid-row: 2;
  // @keyframes fade {
  //   0% {
  //     opacity: 0;
  //   }
  //   100% {
  //     opacity: 1;
  //   }
  // }
`;
const ListCounter = styled.div`
  padding-top: 0.5vh;
  text-align: center;
  color: #6c757d;
  font-style: italic;
  font-size: 0.75rem;
  &::after {
    content: "";
    display: block;
    width: 150px;
    border-bottom: 1px solid rgba(200, 200, 200, 0.5);
    margin: 2vh auto;
  }
`;

export default List;
