**LOG R3D05** (08/08/20)

link to my daily tweet [here](https://twitter.com/Nightcoder2/status/1291966087307964416)


**what i did:**

- i implemented the localStorage!!! = my MVP version of the app is almost ready!!!

**what i learned:**

- React **component lifecycle** methods: componentDidUpdate, componentDidMount and more on the React doc [here](https://reactjs.org/docs/state-and-lifecycle.html)

BUT: those methods only work for class components => i will need to use hooks like useState() for real very soon i think!
- instead of :
```
const todos = [...this.state.todos]
todos.unshift(todo)  
setState({ todos })
```
add the todo to the copy directly! at the beginning = unshift or at the end = push
```
const todos = [todo, ...this.state.todos]
setState({ todos })
```
- i learned more about jsx and everything that's possible in React (for example : **conditional components with ternary operator**):
```
<div>
 {this.state.data.filter(blabla) 
 ? ( <div>conditional div!</div> )
 : null 
 }
</div>
```
 
**next:**

- add FILTER FUNCTIONALITIES!!!
- general styling:
  - animations
  - scrollable div
  - darkmode
- ~now that everything is cleaner: implement LOCALSTORAGE!!!~ 
- ~continue with props + more refactoring to make **functional compononents**~
- ~refactor code to **create COMPONENTS**~
- ~check and delete functionalities of the todo app.~
- commit files or code to github via terminal. 

 
