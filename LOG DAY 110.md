**LOG R210** (21/04/20)

link to my daily tweet [here](https://twitter.com/Nightcoder2/status/1252614148338462721)


**what i did:**

- i implemented the darkmode/lightmode toggle on the dashboard!!! it took some time to learn/understand/test everything and the result is really cool!!
i'll have to find a way to change the map as well...


**what i learned**

- a lot of new HTML and CSS tricks!!!: 

**HTML:** input tag class=checkbox id=input / label for=input (referring to the input tag! awesome) 

**CSS:** body.light{} + Sass nesting / transform:translateX() / transitions 

**JS:** 

```
input.addEventListener('change', function(){
      document.body.classList.toggle('light');
})



- i discovered FONTAWESOME!!! i now finally undersand the **i** tag and the "fas fa-icon" classes!!! awesome indeed. 


**next:**

- EXPAND/develop the dashboard for better DATA VISUALIZATION : start d3.js. we'll see how hard it is. if really too much, back to chart.js.
- ~dark/light mode TOGGLE!!!~ : **done**
- ~change FONT on the MAP~ *solved - looks much better eventhough the font itself can't be changed. loos nice now!~ 
- ~display the footer even better than it is now: play with moment.js or new Date() constructor.~ *solved with moment.js!! easy!!*
- ~SVG ANIMATION!!!~ : *solved! with the animate attribute!!!*
- ~"convert" json timestamp footer into REGULAR DATE + TIME !!~ : *solved with .toString().replace(regEx, $1)*
- ~display DATA ON THE MAP!!~ : *solved*
- ~design of my dashboard : *in progress* => INCLUDE WORLDMAP!~
- ~TOGGLE between confirmed/deaths/recovered!!!~ : *solved with .innerHTML!* 
- ~use proper ARRAY METHODS to display the data!!!~ : *solved* 
- ~get the covid-19 data in the console = solve the fetch() issue / fix the header~ : *solved*

