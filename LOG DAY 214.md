**LOG R3D14** (06/09/20)

link to my daily tweet [here](https://twitter.com/Nightcoder2/status/1302494897052803072)


**what i did:**

-

**what i learned:**

- how to add 2 inline styles : ```styles={{ ...style1, style 2}}```
- react-spring!! : **useTransition** hook + **animated**.component / 
```
const transition = useTransition(todo, todo.id, {
    from:{ },
    enter:{ },
    leave:{ }
})
```
component props:
```
style={props} key={key}
```
then wrap component:
```
return transition.map({item, props, key} => <animated.component />) // or <animated.component> </animated.component>
```

**next:**

- finish FILTER FUNCTIONALITY (either with useState, useReducer or back to class component)
- general styling:
  - animations: *in progress*
  - darkmode
  - ~scrollable div~

  
- ~DEBUG THE TODO RENDERING!!! it was working perfectly fine with class component + the code makes sense! so fix the problem.~  
- ~**finish rewriting the code as clean as possible: functional components (with react hook useState()) + CSS-in-JS**~
- ~now that everything is cleaner: implement LOCALSTORAGE!!!~ 
- ~continue with props + more refactoring to make **functional compononents**~
- ~refactor code to **create COMPONENTS**~
- ~check and delete functionalities of the todo app.~
- commit files or code to github via terminal. 

 
