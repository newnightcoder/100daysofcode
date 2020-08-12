**LOG R3D09** (12/08/20)

link to my daily tweet [here](https://twitter.com/Nightcoder2/status/1293402469490479106)


**what i did:**

- i rewrote the code with better components/better "architecture" i think. they're all functional (app.js as well) so i could use the useState hook (instead of this.setState()!!)
and it works so nicely, also a great occasion to practice destructuring.
- in the process, while everything else is rendered properly, there's no todo.task inside the li, eventhough i pass in the todo prop! weird. have to debug tomorrow absolutely.
- also cool: i did all the styling as CSS-in-JS with syled components! (except for library components (MDBreact) that i styled inline. wonder if the mix of both practices on the same file is okay.. but i'll figure it out asap)


**what i learned:**

- useState(default state) = [state, setStateMethod] :awesome!!! it's very handy to handle state this way indeed
- practice of destructuring, which is really great, i love it
- how [emotion](https://github.com/emotion-js/emotion) and [styled components](https://styled-components.com/) work, great tools as well!!!! i chose styled components but they seem very similar.


**next:**

- DEBUG THE TODO RENDERING!!! it was working perfectly fine with class component + the code makes sense! so fix the problem.
- add FILTER FUNCTIONALITIES ASAP
- general styling:
  - animations
  - scrollable div
  - darkmode
  
- ~**finish rewriting the code as clean as possible: functional components (with react hook useState()) + CSS-in-JS**~
- ~now that everything is cleaner: implement LOCALSTORAGE!!!~ 
- ~continue with props + more refactoring to make **functional compononents**~
- ~refactor code to **create COMPONENTS**~
- ~check and delete functionalities of the todo app.~
- commit files or code to github via terminal. 

 
