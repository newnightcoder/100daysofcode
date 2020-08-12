import React from "react";
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

const List = ({ todos }) => {
  return (
    <ListContainer>
      {" "}
      <ListHeader todos={todos} />
      <TodoList>
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </TodoList>
    </ListContainer>
  );
};

export default List;
