**LOG R3D18** (10/09/20)

link to my daily tweet [here](https://twitter.com/Nightcoder2/status/1303957410529316865)


**what i did:**

- i found the way to fix the react-spring issue!!! ("merge" ```<Todo/>``` within ```<List/>``` and not have it as a separate component)
- i also fixed the ACTIVE state problem!!! the list is done!!! super happy!!!

**what i learned:**

- how to handle state within styled.component!!! (import {css}):
  - within styled-component: destructuration of "active" state + add "css" before the `
  ```
  ${ ({ active }) } => active && css` ${props => theme[props.theme].active} ` 
  ```
- more about react-spring!!!
- how to customize material-UI
- create functional component WITHIN another component
- more but i forgot!

**next:**
  
- FINISH STYLING THE APP!!! 
  - counter conditionals
  - label down/out of focus
  - submit button hover
  - darkmode ??
  - **MEDIA QUERIES!!!**

  ~- animations*~
   ~- FIX button bugs!!! 1- find out how to fix the onClick filter behaviour!! 2- find how to get the right color when active~


 
