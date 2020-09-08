**LOG R3D16** (08/09/20)

link to my daily tweet [here](https://twitter.com/Nightcoder2/status/1302881898470006785)


**what i did:**

- learned how to theme components!!! it's really great!!! 
- tried to fix the bugz created but i had no luck sofar, still at it!


**what i learned:**
- **toggle buttons**: active state!!! as a component attribute: ```active = { active === type }``` + onClick: ```setActive(type)```
- how to create a theme:
```const theme = {
   blue: {
      default : "lightblue"
      hover : "darkblue"
   }
   pink: {
      default : "lightpink"
      hover : "darkpink"
   }
}
```
then define default theme for the component: ```Component.defaultProps = { theme : "blue" }```
then use it, in Styled.component css : ```background-color: ${(props) => theme[props.theme].hover};```
also usable in function to toggle color component etc...


**next:**
  
 - FIX button bugs!!! 1- find out how to fix the onClick filter behaviour!! 2- find how to get the right color when active

- FINISH THE APP!!! 
  - animations: *in progress*
  - darkmode

 
