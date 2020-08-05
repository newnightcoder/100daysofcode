**LOG R3D02** (05/08/20)

link to my daily tweet [here](https://twitter.com/Nightcoder2/status/1290863609313198085)


**what i did:**

- check + delete functionalities are implemented 
- more practive of JS + React basics (a lot of spread operator lol / ternary operator within inline styling!!! / setState() etc... )

**what i learned:**

- ** destructuring** : like in setState({ todos }) !!!
- .findIndex() method!!
- dynamic "inline" style with logic!!! 
```
<element
style={{
        textDecoration: todo.done ? "line-through" : "none",
        color: todo.done ? "gray" : null,
        backgroundColor: todo.done ? "" : null,
       }}
      >
 ```
 - arrow function to connect a function with parameter to an event (otherwise the parameter passed to the function is the event, so it won't work):
 ```
 BAD!!!
 <element onClick={ this.myFunction(argument) }></element>
 ```
 ```
 GOOD :)
 <element onClick={ () => this.myFunction(argument) }></element>
 ```
 
**next:**

- implement localstorage
- animations
- scrollable div
- darkmode
- ~check and delete functionalities of the todo app.~

+

- refactor code to **create COMPONENTS**
- commit files or code to github via terminal. 

