**LOG R2D7** (18/04/20)

link to my daily tweet [here](https://twitter.com/Nightcoder2/status/1251447196723171330)


**what i did:**

- i changed the format of the JSON data displayed on the dashboard: stat numbers and ISO timestamp of the "last updated" footer! looks so much better now!! that's a relief lol.
- i used toString().replace(regEx, '$1 ') for the stat numbers and new Date(data.lastupdate) for the footer!!!
- i tried basic moment.js functions and it's working nicely indeed! so handy and many options possible! to use for the footer!


**what i learned**

- the toString().replace() method!!! .replace() takes 2 arguments: regular expression (regEx) and replacement value ('$1 ')!!! perfect
- i tried the toLocaleString method() but it gave me no result..
- the new Date() constructor : awesome! exactly what i needed!!
- i have to go deeper into them + learning JSON.stringify + break down regEx!
- how to set up a node_module (moment.js in this case): i got it to work immediately, cool!


**next:**

- circles ANIMATION!!!
- change FONT on the MAP 
- display data on a chart.js graph for the right section
- dark/light mode TOGGLE!!!
- ~"convert" json timestamp footer into REGULAR DATE + TIME !!~ : *solved with .toString().replace(regEx, $1)*
- ~display DATA ON THE MAP!!~ : *solved*
- ~design of my dashboard : *in progress* => INCLUDE WORLDMAP!~
- ~TOGGLE between confirmed/deaths/recovered!!!~ : *solved with .innerHTML!* 
- ~use proper ARRAY METHODS to display the data!!!~ : *solved* 
- ~get the covid-19 data in the console = solve the fetch() issue / fix the header~ : *solved*

