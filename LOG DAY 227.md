**LOG R3D27** (19/09/20)

link to my daily tweet [here](https://twitter.com/Nightcoder2/status/1307221527272787973)


**what i did:**

- i fetched the data for the Counters component (stats brief) with AXIOS!! very easy
- **i wrote my first ASYNC/AWAIT!!!**
- got CountUp to work on the numbers (still not sure why it's not working when i remove the conditional in the functional component)

**what i learned:**

- how to fetch in React: (3 steps!!!):
  1 declare/write fetch function with the data i need (async/await, destructuration possible etc...) -  did it in api/index.js (within src folder)
  2 call the function in class component in componentDidMount lifecycle method (async function: `async ComponentDidMount` etc...)
  3 use state to store the data and pass it as props: `state = { data :{} }` + `this.setState({data : fetchedDate})` in componentDidMount function 
- AXIOS is great and easy to use! it takes care of the response.json() and is supported by all browsers
`axios.get()` does the http request!
- how to **format numbers with Intl.NumberFormat**: `new Intl.NumberFormat('fr FR').format(number)` will put space between 3 consecutive digits

**next:**
   
- countries component!!! list or table 
- the SELECT!!!




 
