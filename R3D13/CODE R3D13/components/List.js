import React from "react";
import ListHeader from "./ListHeader";
import Todo from "./Todo";
import styled from "styled-components";

const ListContainer = styled.section`
  background-color: white;
  grid-row: 3;
  // padding: 0 1vw 0 1vw;
  width: 100%;
  height: calc(94vh - 18vh - 3vh - 10vh);
  overflow-y: scroll;
  overflow-x: hidden;
  display: grid;
  grid-template-rows: 10vh 1fr;
`;
const TodoList = styled.ul`
  list-style-type: none;
  background-color: white;
  padding: 0 0 1vh 0;
  width: 100%;
  height: 1fr;
  grid-row: 2;
  @keyframes fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const ListCounter = styled.div`
  padding-top: 1.25vh;
  text-align: center;
  color: #6c757d;
  font-style: italic;
  &::after {
    content: "";
    display: block;
    width: 150px;
    border-bottom: 1px solid rgba(200, 200, 200, 0.5);
    margin: 2vh auto;
  }
`;

const List = ({ todos, checkItem, deleteItem }) => {
  const counter = todos.filter((todo) => !todo.done).length;
  let message = `You currently have ${counter} things to do`;

  const counterMsg = () => {
    if (counter === 0) message = `You have zero things to do...`;
    if (counter === 1) message = `You currently have ${counter} thing to do`;
    else return;
  };
  counterMsg();

  return (
    <ListContainer>
      {" "}
      <ListHeader style={{ gridRow: "1" }} todos={todos} />
      <TodoList style={{ gridRow: "2" }}>
        <ListCounter style={{}}>{message}</ListCounter>
        {todos.map((todo) => (
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
