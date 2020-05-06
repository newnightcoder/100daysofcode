**LOG R2D22-23** (06/05/20)

link to my daily tweet [here](https://twitter.com/Nightcoder2/status/1257899015351554053)


**what i did:**

- i tried further with d3 and discovered many things: i fetched the json data with d3.json()!!! (+ i found out .then() on my own! thinking about fetch()!!! it returns a promise as well!! awesome.)
- i could make a chart with data i created (simple array) and it works!! so my code is right! so the last issue is really: how to pass in my data (.confirmed)
- i exercised further with freecodecamp! cool. i have to do that much more!
- i understand d3 much more but my case is quite specific, with the super NESTED data i'm trying to access!

**what i learned**

A LOT!! (d3 is very rich + super powerful!)

- d3 uses the fetch API!!! mindblowing: 
```
d3.json(url) 
  .then(function (data){
     //code
   })
   ```   
- d3.nest, .key, .values: so handy!!! i have to find the proper way to access my data!!
- **console.table** for visualizing data (arrays, objects) in the console!!! much BETTER!!
- all this d3/dataviz adventure is bringing me a lot (also as far as JS itself is concerned)! not easy but it feels nice. i feel better than 2 days ago lol!


**next:**

- try to sort the data with d3.nest()!!! if it works, the chart will happen!!!

