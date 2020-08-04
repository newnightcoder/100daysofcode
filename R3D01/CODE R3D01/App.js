import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {MDBIcon} from 'mdbreact';

import './App.scss';

class App extends Component {

  //use of STATE instead of createRef().
  //inputValue = React.createRef();
 

  state = {
    todos: [
      // { id:1, task:"todo test yeah!"},
      // { id:2, task:"todo2 test2 yeah2!"},
      // { id:3, task:"todo3 test3 yeah3!"}
    ],
    newTodo:"",
    count:0
  }

  handleInput = (event) => {
    const value = event.currentTarget.value;
    this.setState({newTodo : value})
    console.log(this.state.newTodo);
  }

   count = this.state.todos.length + 1;

  addItem = (event) => {
    event.preventDefault(); 

    const newTodo = this.state.newTodo;
    if (newTodo === "") return;

    const id = 0 ;
    const todo = {
      id: id, 
      task: newTodo
    }; 

    const todos = [...this.state.todos];
    todos.unshift(todo);
    this.setState({todos: todos})
    this.setState({newTodo:""});
    this.setState({
      count: this.count++
    }) ;
    console.log(todo.id)



    // //copy of the state, witspread oerator! same as .slice()!
    // const todos = [...this.state.todos];
    // //rather unshift than push (adds at the BEGINNING of the array)
    // todos.unshift({id:4, task:this.state.newTodo + this.state.count++});
    // console.log(todos);
    // //let's update the state with this.setState
    // this.setState({
    //   todos: todos
    }
   
  
  //with react.createRef(), access to current property of the node object
  // getInput = (event) => {
  //   event.preventDefault();
  //   const inputValue=this.inputValue.current.value;
  //   console.log(inputValue);
  // }


  render(){

    //const todos = 

    return (

      <div className="App">

        {/* Header Form*/}
        <Container fluid className='header'>
          <div className="logo"></div>
          <Form className='form' onSubmit={this.addItem}>
            <h1>Welcome to your TO-DO app!</h1>
            <Form.Group controlId="formText">
              <Form.Label>What's on your mind?</Form.Label>
              <Form.Control value={this.state.newTodo} onChange={this.handleInput} type="text" className='input' placeholder="Type something you have to do..." autoComplete="off"/>
              <Button type="submit" variant="secondary">Add</Button>{' '}
            </Form.Group>
          </Form>
        </Container>

        
        {/* List */}
        <div className='list-container'>  
          <h2 className='list-title'>Let's get some work done!</h2>
          <div className='todo-counter'>you have {this.state.count} things to do</div>
          <ul>
            {this.state.todos.map(todo => 
            <li>
              <div className="todo">{todo.task}</div>
              <div className="check"><MDBIcon far icon="check-square" size="lg"/></div>
              <div className="trash"><MDBIcon far icon="trash-alt" size="lg"/></div>
            </li>
            )}
          </ul>
        </div>

        {/* Footer */}
        <footer>Built with React by Nightcoder&nbsp;<span role="img" aria-label="sunglasses emoji"> 😎</span></footer>

      </div>
    );
  }
}

export default App;
