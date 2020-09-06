**LOG R3D14** (06/09/20)

link to my daily tweet [here](https://twitter.com/Nightcoder2/status/1302494897052803072)


**what i did:**

- i could finally fully implement the FILTER functionalities for the todo-app!!! 
- i dived into react-spring and could animate the todos!!! but only working when todos are mounted, not when unmounted (deleted)....
  - i started with the useSpring react-spring hook but didn't work really work as need (it worked like @keyframes with CSS, animating the LAST item of the list, not the dynamically added todo)
  - then i got to useTransition and it worked!! almost...  
- tried some options for the overall design (subtitle as pseudo-element etc...) 

**what i learned:**

- better inline style :
```
const styling = { } ; 
//in component - inline:
style = {styling}
```
- how to add 2 inline styles : 
```
const style1 = {  code }
const style 2 = {  code }
// in component - inline:
styles = {{ ...style1, ...style 2}}
```
- react-spring!! : **useTransition** hook + **animated**.component :
```
const transition = useTransition(todos, todo.id, {
    from:{ },
    enter:{ },
    leave:{ }
})
```
component props: ```style={props} key={key}```
then wrap component :
```
return transition.map(({item, props, key}) => <animated.component />) // or <animated.component> </animated.component>
```

**next:**

- FINISH THE APP!!! 
  - highlight buttons!
  - animations: *in progress*
  - darkmode
  - ~scrollable div~

- ~DEBUG THE TODO RENDERING!!! it was working perfectly fine with class component + the code makes sense! so fix the problem.~  
- ~**finish rewriting the code as clean as possible: functional components (with react hook useState()) + CSS-in-JS**~
- ~now that everything is cleaner: implement LOCALSTORAGE!!!~ 
- ~continue with props + more refactoring to make **functional compononents**~
- ~refactor code to **create COMPONENTS**~
- ~check and delete functionalities of the todo app.~
- ~finish FILTER FUNCTIONALITY (either with useState, useReducer or back to class component)~ : done with useState: at App level: ```const [todosToDisplay, setTodosToDisplay] = useState("all");``` + display function (with string parameter) passed as prop to the List / at List level: ``` let filteredTodos=[]``` + conditional + in the render/return, to generate the todos: instead of todos.map, filteredTodos.map = no need to setState(filteredTodos), i just map over the filteredTodos array!!!


- commit files or code to github via terminal. 

 
