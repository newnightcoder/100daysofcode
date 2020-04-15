**LOG R2D4** (15/04/20)

link to my daily tweet [here](https://twitter.com/Nightcoder2/status/1250320099858247681)


**what i did:**

- i could get the stats buttons to work using .innerHTML instead of .insertAdjacentHTML and map() instead of forEach()!!! works nicely.
- i implemented the WORLDMAP on the dashboard, using googlemap API: very easy + handy! (i tried with mapbox.js forst but i don't get it really.. i'll have to spend more time focusing on that later at some point. love the design!)
- styled/customized the map! it looks great!!! like JHU!!!


**what i learned**

- the difference between forEach() and map(): by using .innerHTML= instead of .insertAdjacentHTML(), the display of the data in my specified divs was no longer working!! that's how i discovered that by switching from the forEach() to the map() method, it was working again!!!
that's obviously because forEach "doesn't return anything" whereas map() does. i have to learn more about that and dive deeper learningwise.
- how useful and brilliant .innerHTML= is!!! i had already used it in Arkanoid-mini but in this new context it's even better!
- how to implement a map from the googlemap API as well as some little styling + configuration tricks!!!
- still have to try diving into mapbox.js...


**next:**
- change FONT on the MAP 
- display DATA ON THE MAP!!
- "convert" json timestamp footer into REGULAR DATE + TIME !!
- display data on a chart.js graph for the right section
- dark/light mode TOGGLE!!!

- ~design of my dashboard : *in progress* => INCLUDE WORLDMAP!~
- ~TOGGLE between confirmed/deaths/recovered!!!~ : *solved with .innerHTML!* 
- ~use proper ARRAY METHODS to display the data!!!~ : *solved* 
- ~get the covid-19 data in the console = solve the fetch() issue / fix the header~ : *solved*

