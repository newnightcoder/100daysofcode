**LOG R3D01** (04/08/20)

link to my daily tweet [here](https://twitter.com/Nightcoder2/status/1290505872440004610)


**what i did:**

- i started learning REACT!!! + building my to-do app with it!!! my goal is to deliver an MVP version of this to-do app asap. 
- i also started using css libraries!!! react-bootstrap and mdbicons for now.

**what i learned:**

SO MUCH lol!!! it's extraordinary and not that hard sofar!!!


 - the goal/"mindset" of React - why it is so useful!
 - now i UNDERSTAND what it means to BUILD a project!!!
 
 - React :
    - JSX
    - importance + **immutability** of the state object. it holds the "data"
    - any state modification is handled by the setState() method (hence the frequent necessity to **copy** the state with spread operator or .slice() method in order to change it (the "copy") and then **replace** the "original" immutable state by the "updated" state, using **setState()**. so AWESOME!!!!!!!!!!)
    - component logic in the project architecture (OOP using classes or functional with functional components!)
    - it's over with DOM manipulations as i knew them!!! React handles it (cf onClick, onSubmit, onChange handlers)
    - how to handle a form/input is very different!!! no more querySelector(input) + input.value!!! but rather: **React.createRef()** or "better": get it through the **state{}** with the currentTarget property of the event object!!! the DOM manipulation here feels so different but yet it makes a lot of sense!!
    - event.preventDefault() in order to prevent the page from reloading on event handling (from my understanding...but it might do more than that under the hood etc... i'll get to it.)

- JS :
    - omg i got to use my first **spread operator**!!! it makes so much sense now: it's just a **copy of the array**!!!! a freaking copy!!! hahaha!!! the secret is: 
    ```
    array.slice() is the same as [...array]
   ``` 
    - the **.unshift() method** !!!! to push at the beginning of the array (whereas .push() pushes at the end of the array). i discovered .unshift() on google because i wanted to make a better UI for my to-do list and was wondering if there was a method to push **to the beginning** of the array. and yes!!! JS is perfect.

- LIBRARIES + TERMINAL + VSCODE :
    - i just jumped in react-bootstrap and mdbreact following their basic instructions and could install everything and use it!!! so cool!!!
    - i feel so much better in the terminal. i want to do more!!! work with node!!! can't wait wow.
    - vscode is perfect. not even using any plugins or anything at this point and already from the get-go it's true that it's great. i feel bad for Atom but i'll keep Atom forever anyway, developing side projects and stuff. i identify more with Atom than vscode but vscode is awesome, that's really true. i know now!! 
 
    
**next:**

- commit files or code to github via terminal. 
- check and delete functionalities of the todo app.
- start DevTheory's course : 50% course/exercises + 50% React projects. let's go!
