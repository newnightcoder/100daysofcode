**LOG R2D1** (12/04/20)

link to my daily tweet [here](https://twitter.com/Nightcoder2/status/1249212673172082688)

*i am back to the challenge/learning, finally!
it's been 3 weeks since the corona-virus outbreak and quarantine.
at first, i had just finished ROUND 1 and was very inspired by writing my technical blog, the work done sofar has been very valuable.
but then i started to fall into a sort of apathy/strange place, unable to be productive, just preoccupied by the news and the daily quarantine + personal little issues...
my energies are finally back, i guess i needed a sort of rest time!!
all the inspiration is back as usual now and i feel more than ready to start this ROUND 2!
i have to get closer to the dolphins with JS + start with React?*

**what i did:**

- from the 1st time i saw it, i found the Johns Hopkins Covid-19 dashboard absolutely excellent!!! the perfect app!!! (in spite of the gravity of the topic)
[JHU covid-19 dashboard](https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6) and
[JHU github resources](https://github.com/CSSEGISandData/COVID-19)
- i've also wanted to use the Chart.js library a way or the other for a while, so i thought it would be "fun" if i could use some covid-19 global data from an API
and display it nicely with chart.js, in order ot make my own version of the JHU CSSE dashboard (Johns Hopkins University Center for Systems Science and Engineering).
- perfect timing: i received the programmableweb newsletter and there is a covid-19 API using the data provided by JHU!!! just perfect!!!
- so i installed chart.js with node and got it to work (moment.js is also included, which might be useful at some point!)
- i tried to fetch... but classic CORS issue!!!
- i get a nice response from the API with Postman though, so i think i know how i should solve the issue.

**what i learned**

- this project is a great way to dive into API/fetch(), http requests and async JS again!!! while using a library!! i'm very excited about it!
- i have to work on the HEADER of my request in order to include access-control-allow-origin (*) but more might be needed...
- how to install and work with Chart.js! very easy/handy + good way to work with objects/object syntax.

**next:**

- get the covid-19 data in the console = solve the fetch() issue / fix the header
- display it on a graph.
- figma design of my dashboard.
- let's conitnue to update/write for the blog - catch up.
