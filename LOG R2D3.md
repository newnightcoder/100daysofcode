**LOG R2D3** (14/04/20)

link to my daily tweet [here](https://twitter.com/Nightcoder2/status/1249963747122257921)


**what i did:**

- i discovered [Laeyoung's repo](https://github.com/Laeyoung/COVID-19-API) and it's just amazing! he did an amazing job, the data is pulled directly from JHU and updated very often!
- i used the sort() method to display the data in descending order (like on JHU's dashboard!!!) so USA is 1st, and France in the "top 10" etc..
- also used forEach() to get the country names - instead of map()!
- further CSS styling of the dashboard 
- i created some buttons (to toggle the data between confirmed/deaths/recovered)


**what i learned**

- how to use the **sort() method**!!! : it uses a "comparison" function(a, b) to return 1, -1 and 0:
```let sortedData = data.sort(function(a, b){
       if(a.value < b.value) return 1;
       else if(b.value < a.value) return -1;
       else return 0;
    })```
- **forEach() method**!!! i used it instead of map(), in order to return each countryname etc..
- tested the **filter() method** to get the countries with more 100k confirmed cases!!! it works beautifully!!!
- TEMPLATE LITERALS TO CREATE HTML DIV **WITH CLASSES**!!! (ID would be possible as well): awesome! i just tried and it worked!!!


**next:**

- ~get the covid-19 data in the console = solve the fetch() issue / fix the header~ : *solved*
- ~use proper ARRAY METHODS to display the data!!!~ : *solved* 
- "convert" json timestamp footer into REGULAR DATE + TIME !!
- TOGGLE between confirmed/deaths/recovered!!!
- TOGGLE dark mode too!!!
- design of my dashboard : *in progress* => INCLUDE WORLDMAP!
- display data on a chart.js graph / WORLDMAP??? START THINKING ABOUT THAT!!!
