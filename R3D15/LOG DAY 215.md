**LOG R3D15** (07/09/20)

link to my daily tweet [here](https://twitter.com/Nightcoder2/status/1302881898470006785)


**what i did:**

- i tried to fix the react-spring leave issue but couldn't figure out how yet...
- i'm trying to implement the buttons as a toggle component!! almost there, it's teaching me a lot. 
- A LOT OF STYLING!!! and it took a long part of the night too lol. ideas/design take time, trying different options, grid or flex, what background etc...
now it feels ready!!!


**what i learned:**

- how to implement a **toggle** component (toggle group) with: useState + ```const types =["button1", "button2", "button3"]``` + ```types.map((type) => <btn>{type}</btn>)```
so cool!!! but it broke my onClick behaviour... have to fix it!!! still on it now! i'm going to find out for sure.
- better understanding of returning component through function :
```
function NewComponent = () => {
  return ( <div> anthing inside <div/> )
  }
```
and then in rendering: ```<NewComponent />```. i "knew" it, did it earlier but did not fully grasp all it can do!!! awesome really. 
- i feel better and better trying things with React


**next:**
  
 
- FINISH THE APP!!! 
  - highlight buttons! : **in progress / find out how to fix the onClick filter behaviour!!**
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

 
