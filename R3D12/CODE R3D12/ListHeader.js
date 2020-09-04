import React from "react";
import styled from "styled-components";
import { MDBBtnGroup, MDBBtn } from "mdbreact";

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #6c757d;
  text-align: center;
  &::after {
    content: "";
    display: block;
    width: 100px;
    border-bottom: 2px solid rgba(200, 200, 200, 0.5);
    margin: 2vh auto;
  }
`;

//const styledH3 = styled.h3``;

const ListHeader = ({ todos, all, done, notDone }) => (
  /* const [todosToDisplay, setTodosToDisplay] = useState("all");*/ /* if (todosToDisplay === "done") {*/ /*   todos = todos.filter((todo) => todo.done);*/ /* } else if (todosToDisplay === "all") {*/ /*   todos = todos;*/ /* } else if (todosToDisplay === "active") {*/ /*   todos.filter((todo) => !todo.done);*/ /* }*/ /* const displayFilteredTodos = (string) => {*/ /*   setTodosToDisplay(string);*/ /* };*/ <Header>
    <h3>Let's get some things done!</h3>
    <div>you have {todos.filter((todo) => !todo.done).length} things to do</div>
    <MDBBtnGroup
      size="sm"
      className="mb-4"
      style={{ width: "90%", border: "none" }}
    >
      <MDBBtn onClick={all} color="primary">
        show all
      </MDBBtn>
      <MDBBtn onClick={done} color="none">
        completed
      </MDBBtn>
      <MDBBtn onClick={notDone} color="none">
        to do
      </MDBBtn>
      <MDBBtn color="none">delete all</MDBBtn>
    </MDBBtnGroup>
  </Header>
);
export default ListHeader;
