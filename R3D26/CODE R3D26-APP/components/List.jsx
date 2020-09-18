import React from "react";
import styled, { css } from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import DeleteIcon from "@material-ui/icons/Delete";
import { useTransition, animated } from "react-spring";

const ListContainer = styled.section`
  width: 400px;
  /* height: 100%; */
  grid-row: 2;
  display: grid;
  grid-template-rows: 8vh 1fr;
  background-color: #fafafa;
  overflow-y: scroll;
  overflow-x: hidden;
  scrollbar-width: thick;
  transition: background-color 500ms;

  &::-webkit-scrollbar {
    width: 0.5vw;
    background-color: rgba(100, 100, 100, 0.9);
    ${({ dark }) => dark && `background-color:rgba(100, 100, 100, 0.2)`};
  }
  &::-webkit-scrollbar-thumb {
    width: 0.5vw;
    background-color: deepskyblue;
    ${({ dark }) => dark && `background-color:#f8bbd0`};
  }

  @media (max-width: 1023px) and (orientation: portrait) {
    width: 100%;
    /* height: 100vh; */
    padding-bottom: 150px;
  }
  @media (max-width: 1023px) and (orientation: landscape) {
    width: 100%;
    /* height: 100vh; */
    padding-bottom: 150px;
  }
  ${({ dark }) =>
    dark &&
    css`
      background-color: lightgray;
    `}
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #6c757d;
  background-color: white;
  width: 400px;
  height: 8vh;
  position: fixed;
  top: 23vh;
  /* grid-row: 1; */
  z-index: 2;
  box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.2);
  transition: background-color 500ms;
  /* overflow-y: hidden; */
  ${({ dark }) =>
    dark &&
    css`
      background-color: #333333;
      border-top: 1px solid white;
    `}

  @media (max-width: 1023px) {
    width: 100%;
    top: 21vh;
  }
  @media (max-width: 1023px) and (orientation: landscape) {
    /* height: 4vh; */
  }
`;
const ListCounter = styled.div`
  padding-top: 0.5vh;
  text-align: center;
  color: dimgray;
  font-style: italic;
  font-size: 1rem;
  ${({ dark }) => dark && `color:rgb(200, 200, 200)`};
  &::after {
    content: "";
    display: block;
    width: 150px;
    border-bottom: 1px solid rgb(200, 200, 200);
    margin: 1.25vh auto;
    ${({ dark }) => dark && `display:none`};
  }
  @media (max-width: 380px) and (orientation: portrait) {
    font-size: 0.75rem;
  }

  animation: fadeIn 1500ms forwards;
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateX(-10vh);
    }
    100% {
      opacity: 1;
      transform: translateX(-0);
    }
  }
`;

const TodoList = styled.ul`
  grid-row: 2;
  list-style-type: none;
  background-color: #fafafa;
  padding: 2vh 0 150px 0;
  ${({ dark }) =>
    dark &&
    css`
      background-color: lightgray;
    `}
  transition: background-color 500ms;
  @media (max-width: 1023px) and (orientation: portrait) {
    padding-bottom: 150px;
  }
`;

const StyledTodo = styled(animated.li)`
  /* border: 1px solid red; */
  margin-block-start: 0;
  margin-block-end: 0;
  min-height: 7vh;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: dimgray;
  font-size: 1rem;
  background-color: white;
  border-radius: 2px;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.2);
  padding: 0.5em 0 0.5em 1em;
  margin: 1vh auto;
  position: relative;
  transition: text-decoration 500ms, color 500ms;
  ${({ dark }) =>
    dark &&
    css`
      background-color: #333333;
      color: rgb(200, 200, 200);
    `}
`;
const btnWrapper = {
  width: "100px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginRight: "0",
  // border: "1px solid yellow",
};

// const trashBtn = {
//   color: "dimgray",
//   cursor: "pointer",
// };

const useStyles = makeStyles({
  root: {
    padding: "10px",
  },
});

const ListHeader = ({ todos, todosToDisplay, dark }) => {
  let filteredTodos = [];
  let message = "";

  if (todosToDisplay === "all" && todos.length === 0) {
    message = "Welcome to your TO-DO app!";
  }
  if (todosToDisplay === "delete") {
    message = "Your list has been deleted!";
  }

  if (todosToDisplay === "all" && todos.length !== 0) {
    filteredTodos = todos;
    const total = filteredTodos.length;
    const doneTodos = todos.filter((todo) => todo.done);
    message = ` You have ${total} things on your list. (${doneTodos.length} things done)`;
    if (todos.length !== 0 && doneTodos.length === 0) {
      message = ` You have ${total} things on your list. (Nothing done yet.)`;
      if (total === 1) {
        message = ` You have ${total} thing on your list. (Nothing done yet.)`;
      }
    }
    if (doneTodos.length === 1) {
      message = `You have ${total} things on your list. (${doneTodos.length} thing done)`;
    } else if (total === 1 && doneTodos.length === 1) {
      message = `You have ${total} thing on your list. (${doneTodos.length} thing done)`;
    }
    if (filteredTodos.every((todo) => todo.done) && total !== 0) {
      message = "List cleared! You have done everything! 🚀";
    } else if (total === 0) {
      message = "You currently have nothing to do.";
    }
  }

  if (todosToDisplay === "done") {
    filteredTodos = todos.filter((todo) => todo.done);
    message = `You've done ${filteredTodos.length} things. Good job!`;
    if (todos.length === 0 && !todos.some((todo) => todo.done)) {
      message = "Nothing done yet. Your list is empty.";
    } else if (todos.length !== 0 && !todos.some((todo) => todo.done)) {
      message = "Nothing done yet.";
    } else if (filteredTodos.length === todos.length && todos.length !== 0) {
      message = "Nice work! All things are done! 😎";
    } else if (filteredTodos.length === 1) {
      message = "You have done 1 thing.";
    }
  }

  if (todosToDisplay === "to-do") {
    filteredTodos = todos.filter((todo) => !todo.done);
    message = `You have ${filteredTodos.length} things to do.`;
    if (filteredTodos.length === 0 && todos.length !== 0) {
      message = "You got everything done! Cheers! 🥂";
    } else if (filteredTodos.length === 0) {
      message = "Nothing to do yet. Your list is empty.";
    } else if (filteredTodos.length === 1) {
      message = "You have 1 thing to do.";
    }
  }

  return (
    <Header dark={dark}>
      <ListCounter dark={dark}>{message}</ListCounter>
    </Header>
  );
};

const List = ({ todos, checkItem, deleteItem, todosToDisplay, dark }) => {
  let filteredTodos = [];
  if (todosToDisplay === "all") {
    filteredTodos = todos;
  } else if (todosToDisplay === "done") {
    filteredTodos = todos.filter((todo) => todo.done);
  } else if (todosToDisplay === "to-do") {
    filteredTodos = todos.filter((todo) => !todo.done);
  }

  const transition = useTransition(filteredTodos, (todo) => todo.id, {
    from: { opacity: 0, transform: "scale(0)" },
    enter: { opacity: 1, transform: "scale(1)" },
    leave: { opacity: 0, transform: "scale(0)" },
  });

  const classes = useStyles();

  return (
    <ListContainer dark={dark}>
      {" "}
      <ListHeader dark={dark} todos={todos} todosToDisplay={todosToDisplay} />
      <TodoList dark={dark}>
        {transition.map(({ item, props, key }) => (
          <StyledTodo
            dark={dark}
            style={{
              ...props,
              textDecoration: item.done
                ? "line-through"
                : "line-through transparent",
              color: item.done ? "rgb(200,200,200)" : null,
              backgroundColor: item.done ? "" : null,
            }}
            key={item.id}
          >
            {item.task}
            <div style={btnWrapper}>
              <IconButton
                className={classes.root}
                size="medium"
                onClick={() => checkItem(item.id)}
              >
                <CheckCircleOutlineIcon
                  variant="outlined"
                  style={{
                    cursor: "pointer",
                    color: item.done ? "lightgray" : "",
                    // color: dark ? "rgb(200,200,200)" : "dimgray",
                  }}
                  icon="check"
                  type="checkbox"
                />{" "}
              </IconButton>
              <IconButton
                className={classes.root}
                size="medium"
                onClick={() => deleteItem(item.id)}
              >
                <DeleteIcon
                  dark={dark}
                  style={{
                    cursor: "pointer",
                    color: dark ? "rgb(200,200,200)" : "dimgray",
                  }}
                  icon="trash"
                />
              </IconButton>
            </div>
          </StyledTodo>
        ))}
      </TodoList>
    </ListContainer>
  );
};

export default List;
