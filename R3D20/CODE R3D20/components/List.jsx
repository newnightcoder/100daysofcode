import React from "react";
// import ListHeader from "./ListHeader";
// import Todo from "./Todo";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import DeleteIcon from "@material-ui/icons/Delete";
import { useTransition, animated } from "react-spring";

const ListContainer = styled.section`
  width: 100%;
  height: 100%;
  grid-row: 3;
  display: grid;
  grid-template-rows: 10vh 1fr;
  background-color: #fafafa;
  overflow-y: scroll;
  overflow-x: hidden;
  scrollbar-width: thin;
  &::-webkit-scrollbar {
    width: 0.5vw;
    background-color: $scrollbarYellowColor;
  }
  &::-webkit-scrollbar-thumb {
    width: 0.5vw;
    background-color: $scrollBarBlueColor;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 15px;
    height: 15px;
    border: 1px solid black;
  }
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
  // grid-row: 1;
  position: fixed;
  overflow-y: hidden;
  // border-bottom: 1px solid deepskyblue;
  // rgba(200, 200, 200, 0.9);
  z-index: 2;
  // box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.12),
  //   0 2px 4px -1px rgba(0, 0, 0, 0.2);
  box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.2);
`;
const ListCounter = styled.div`
  padding-top: 0.5vh;
  text-align: center;
  color: #6c757d;
  font-style: italic;
  font-size: 1rem;
  &::after {
    content: "";
    display: block;
    width: 150px;
    border-bottom: 1px solid rgba(200, 200, 200, 0.5);
    margin: 1.25vh auto;
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
  list-style-type: none;
  background-color: #fafafa;
  padding: 0 0 1vh 0;
  width: 100%;
  // height: 1fr;
  grid-row: 2;
`;

const StyledTodo = styled(animated.li)`
  margin-block-start: 0;
  margin-block-end: 0;
  min-height: 7vh;
  width: 380px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: black;
  font-size: 1rem;
  background-color: white;
  border-radius: 2px;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.2);
  padding: 0.5em 1em;
  margin: 1vh auto;
  position: relative;
  transition: text-decoration 500ms, color 500ms;
`;
const btnWrapper = {
  width: "100px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  right: "0",
};

const trashBtn = {
  cursor: "pointer",
};

const useStyles = makeStyles({
  root: {
    padding: "10px",
  },
});

const ListHeader = ({ todos, todosToDisplay }) => {
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
    } else if (doneTodos.length === 1) {
      message = `You have ${total} things on your list. (${doneTodos.length} thing done)`;
    } else if (total === 1) {
      message = "You have 1 thing on the list.";
    } else if (filteredTodos.every((todo) => todo.done) && total !== 0) {
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
    <Header>
      <ListCounter>{message}</ListCounter>
    </Header>
  );
};

const List = ({ todos, checkItem, deleteItem, todosToDisplay }) => {
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
    // update: { transition: "all 1000ms" },
  });

  const classes = useStyles();

  return (
    <ListContainer>
      {" "}
      <ListHeader
        style={{ gridRow: "1" }}
        todos={todos}
        todosToDisplay={todosToDisplay}
      />
      <TodoList style={{ gridRow: "2" }}>
        {transition.map(({ item, props, key }) => (
          <StyledTodo
            style={{
              ...props,
              textDecoration: item.done
                ? "line-through"
                : "line-through transparent",
              color: item.done ? "gray" : null,
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
                <DeleteIcon style={trashBtn} icon="trash" />
              </IconButton>
            </div>
          </StyledTodo>
        ))}
      </TodoList>
    </ListContainer>
  );
};

export default List;
