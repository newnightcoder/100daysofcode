
//import styles from 'css/styles.scss';
// -----------------------------------------------------------------------------
//                            API VARIABLES
//------------------------------------------------------------------------------
let api = 'https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/';
let statsBrief = api +'brief';
let statsAllCountries = api +'latest?onlyCountries=true';
let latest = api +'latest';
let timeseries = api +'timeseries';

let country='FR'
let topbox = document.querySelector('.topResult');
let darkmode=true;

// -----------------------------------------------------------------------------
//                      DARKMODE/LIGHTMODE TOGGLE
//------------------------------------------------------------------------------
let toggle = document.querySelector('input').addEventListener('change', function(){
  darkmode='false';
  document.body.classList.toggle('light');
})

// -----------------------------------------------------------------------------
//                            WORLDMAP!!!
//------------------------------------------------------------------------------
function initMap(){
  // if(darkmode===false){
  //   styles[1].stylers[0].color="white";
  // };
// Styles the map in night mode.
  let map = new google.maps.Map(document.querySelector('#map'), {

    center: {lat: 0, lng: 0},
    zoom: 1.4,
    disableDefaultUI: false,
    streetViewControl:false,
    mapTypeControl:false,
    styles: [
      {elementType: 'geometry', stylers: [{color: '#c2c2c2'}]},

      {
        elementType: 'labels.text.fill',
        stylers: [{color: '#000000'}]},

      {elementType: 'labels.text.stroke', stylers: [{color: '#c2c2c2'}]},

      {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}]
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}]
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{color: '#263c3f'}]
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{color: '#6b9a76'}]
      },

      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{color: '#746855'},{visibility:'simplified'}]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{color: '#000000'}]
      },
    ]
  });

  fetch(statsAllCountries)
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      // filter countries to get top 10
      let topTenCountries = data.filter(function(data){
      return data.confirmed>5000;
      });

      // get their coords (to display circles on the map)
      let coords = topTenCountries.map(function (data){
        return data.location;
      });

      // get the confirmed cases number to size the circle's radius proportionately
      // let radiusBasis = topTenCountries.map(function(data){
      //   return data.confirmed;
      // });

      // forEach on coords to actually place the circle on the map
      coords.forEach(
        function addMarker(coords){
          let markerBig = new google.maps.Marker({
            position: coords,
            map: map,
            icon: {
             anchor: new google.maps.Point(75, 75),
             url: 'data:image/svg+xml;utf-8, \
               <svg width="150" height="150" viewbox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">\
               <circle cx="75" cy="75" r="4" fill="red" stroke="red" stroke-width="1">\
               </circle>\
              <circle cx="75" cy="75" r="40" fill="rgba(207, 0, 15, .4)" stroke="red" stroke-width="1">\
                <animate attributeName="r" from="10" to="40" dur="3s" begin="0s" repeatCount="indefinite"/>\
                <animate attributeName="opacity" from="1" to=".2" dur="3s" begin="0s" repeatCount="indefinite"/>\
              </circle>\
              </svg>'
            }
          });
        });
      });
}
// -----------------------------------------------------------------------------
//                            LATEST UPDATE FOOTER
//------------------------------------------------------------------------------

fetch(statsAllCountries)
  .then(function(response){
	   return response.json();
  })
  .then(function(data){
    // new Date(data[0].lastupdate); //JS FORMATTING OF THE JSON ISO TIMESTAMP TO MAKE IT MORE READABLE!!! //2018-07-31T11:56:48Z - ISO string can be parsed using new Date("2018-07-31T11:56:48Z") and obtained from a Date object using dateObject.toISOString()
    let dateUpdate = moment(data[0].lastupdate).calendar();
    let update = `<div height="9vh">${dateUpdate}</div>`;
    document.querySelector('.update').innerHTML=`Last updated&colon;&nbsp; ${update} &nbsp;-  Data provided by Johns Hopkins CSSE (Center for Systems Science and Engineering)`;
  })

// -----------------------------------------------------------------------------
//                            CONFIRMED BUTTON
//------------------------------------------------------------------------------
let confirmedButton = document.querySelector('.confirmed');

confirmedButton.addEventListener('click',function(){
  deathsButton.style.color='#bfbfbf';
  recoveredButton.style.color='#bfbfbf';
  confirmedButton.style.color='yellow';
  fetch(statsBrief)
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      console.log(data);
      let numberConfirmed= data.confirmed.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 '); //to get a space between 3 digits
      let htmlBrief = `<div class="topResult"><span class="confirmedNumbers">${numberConfirmed}</span></div>`;
      document.querySelector('.topResult').innerHTML=htmlBrief;

      //.insertAdjacentHTML('beforeEnd', htmlBrief);
      document.querySelector('.h2top').innerHTML='Total cases';
      document.querySelector('.h2mid').innerHTML='Confirmed cases<br>per country';
    })

  fetch(statsAllCountries)
    .then(function(response){
  	   return response.json();
    })
    .then(function(data){
        let sorted = data.sort(function(a, b){
           if (a.confirmed<b.confirmed) return 1;
           else if (b.confirmed<a.confirmed) return -1;
           else return 0;
        });
        //console.log(data);
        let htmlCountries =  sorted.map(function(data){
          let countriesConfirmed = data.confirmed.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 '); //FORMATTING OF THE JSON DATA!! ADDS SPACE BETWEEN 3 DIGITS NUMBERS!
          return  `<div><span class="confirmedNumbers">${countriesConfirmed}</span>&nbsp;&nbsp;${data.countryregion}</div>`;
        }).join('');
        document.querySelector('.countryContainer').innerHTML=htmlCountries;

    })
    .catch(err => {
    	console.log(err);
    });
  })

// -----------------------------------------------------------------------------
//                            DEATHS BUTTON
//------------------------------------------------------------------------------

let deathsButton = document.querySelector('.deaths');
deathsButton.addEventListener('click',function(){
    confirmedButton.style.color='#bfbfbf';
    recoveredButton.style.color='#bfbfbf';
    deathsButton.style.color='red';
    fetch(statsBrief)
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      //console.log(data);
      let numberDeaths = data.deaths.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');

      let htmlBrief = `<div class="topResult"><span class="deathNumbers">${numberDeaths}</span></div>`;
      document.querySelector('.topResult').innerHTML=htmlBrief;
      document.querySelector('.h2top').innerHTML='Total deaths';
      document.querySelector('.h2mid').innerHTML='Confirmed deaths per country';
    })

  fetch(statsAllCountries)
    .then(function(response){
      return response.json();
    })
    .then(function(data){
       let sort = data.sort(function(a,b){
        if(a.deaths<b.deaths) return 1;
        else if (a.deaths>b.deaths) return -1;
        else return 0;
      });
      console.log(data);
      let htmlDeaths = sort.map(function(data){
        let countriesDeath = data.deaths.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');

        return `<div><span class="deathNumbers">${countriesDeath}</span>&nbsp;&nbsp;${data.countryregion}</div>`;
      }).join('');
      document.querySelector('.countryContainer').innerHTML=htmlDeaths;
    })
})

// -----------------------------------------------------------------------------
//                            RECOVER BUTTON
//------------------------------------------------------------------------------
let recoveredButton = document.querySelector('.recovered');
recoveredButton.addEventListener('click',function(){
  confirmedButton.style.color='#bfbfbf';
  deathsButton.style.color='#bfbfbf';
  recoveredButton.style.color='#00ff00';
    fetch(statsBrief)
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      console.log(data);
      let numberRecov = data.recovered.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');
      let htmlBrief = `<div class="topResult"><span class="recoveredNumbers">${numberRecov}</span></div>`;
      document.querySelector('.topResult').innerHTML=htmlBrief;
      document.querySelector('.h2top').innerHTML='Recoveries';
      document.querySelector('.h2mid').innerHTML='Recoveries<br>per country';
    })

  fetch(statsAllCountries)
    .then(function(response){
      return response.json();
    })
    .then(function(data){
       let sort = data.sort(function(a,b){
        if(a.recovered<b.recovered) return 1;
        else if (a.recovered>b.recovered) return -1;
        else return 0;
      });
      console.log(data);
      let htmlRecovered = sort.map(function(data){
        let countriesRecov = data.recovered.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');
        return `<div><span class="recoveredNumbers">${countriesRecov}</span>&nbsp;&nbsp;${data.countryregion}</div>`;
      }).join('');
      document.querySelector('.countryContainer').innerHTML=htmlRecovered;
    })
})

// -----------------------------------------------------------------------------
//                            CHAPTER 1
//------------------------------------------------------------------------------

let spread = d3.select(".spread").append("h3").html("Chapter 1<br>The fast spread of COronaVIrus throughout the world started shortly before spring 2020...");
let economy = d3.select(".economy").append("h3").html("Chapter 2<br>became in the spring the biggest threat of global economic collapse since 1921's Black Thursday ...");
let social = d3.select(".social").append("h3").html("Chapter 3<br>... resulting in historic social consequences - some dramatic, some un-expected");
let spiritual = d3.select(".spiritual").append("h3").html("Chapter 4<br>Leading many to open up to some form of spitituality or metaphysics");
let future = d3.select(".future").append("h3").html("EPILOGUE?<br>The future");


// TEST CHART WITH DIVS //

// let dataset = [{objet:1},{objet:2},{objet:3},{objet:4},{objet:5},{objet:6},{objet:7},{objet:8}];
// console.table(dataset);
// d3.select('.spread')
//   .selectAll('div')
//   .data(dataset)
//   .enter()
//   .append('div')
//   .attr('class','testChart')
//   .style('height', function(d){
//     return d.objet*10 +'px';
//   })
//   .style('background-color', 'red')

d3.json(timeseries)
  .then(function (data){

    const franceData = data[116].timeseries;
    console.log('%c franceData length', 'color:yellow ;font-size:14px');
    console.log(franceData);

    const numbers = d3.values(franceData); //à revoir
    console.log('%c numbers', 'color:tomato ;font-size:14px');
    console.log(numbers);

    let spreadDataset = numbers.map(function(data){
      return data.confirmed;
    });
    console.log('%c spreadDataset', 'color:yellow ;font-size:14px');
    console.log(spreadDataset);

    // SVG chart //
    const svgWidth = 960;
    const svgHeight = 480;
    const margin = {
      top: 20,
      right: 30,
      bottom: 30,
      left: 40.
    }
    const barWidth = svgWidth/spreadDataset.length;
    //let barMargin = 100;

    let xScale = d3.scaleLinear()
                   .domain([0, spreadDataset.length])
                   .range([margin.left, svgWidth - margin.right])

    let yScale = d3.scaleLinear()
                   .domain([0, d3.max(spreadDataset)])
                   .range([0, svgHeight - margin.bottom])

    let xAxis = d3.axisTop(xScale)
    let yAxis = d3.axisLeft(yScale)
    // .domain([0, d3.max(spreadDataset)])
    // .range([0, svgHeight])

    let barColor = d3.scaleLinear()
                     .domain([0, spreadDataset.length])
                     .range(['yellow','red'])

    const svgSpread = d3.select('.spread').append('svg')
                       .attr('height', svgHeight)
                       .attr('width', svgWidth)
                       .style('fill', '#333')

    svgSpread.selectAll('rect')
      .data(spreadDataset)
      .enter()
      .append('rect')
        .attr('x', function(d, i){
          return i*barWidth;
        })
        .attr('y', function(d, i){
          return (svgHeight-margin.bottom)-yScale(d);
        })
        .attr('width', barWidth)
        .attr('height', function(d, i){
          return yScale(d);
        })
        .style('fill', function(d, i){
          return barColor(i);
        })

          //TOOLTIPS
          .append('title')
          .text(function(d){
            return `${d.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')}\n confirmed cases`;
          }).style('text-align','center')

          svgSpread.append("g")
                .call(yAxis).attr('color','white')
                .attr("transform", `translate(${margin.left},0)`)

          svgSpread.append("g")
                .call(xAxis).attr('color','white')
                .attr("transform", `translate(0,${svgHeight - margin.bottom})`)








// -----------------------------------------------------------------------------
//                            CHAPTER 2
//------------------------------------------------------------------------------
    const svgEconomy = d3.select('.economy').append('svg')
                  .attr('height', svgHeight)
                  .attr('width', svgWidth)
                  .style('background', '#333')
//
// // -----------------------------------------------------------------------------
// //                            CHAPTER 3
// //------------------------------------------------------------------------------
    const svgSocial = d3.select('.social').append('svg')
                  .attr('height', svgHeight)
                  .attr('width', svgWidth)
                  .style('background', '#333')
//
// // -----------------------------------------------------------------------------
// //                            CHAPTER 4
// //------------------------------------------------------------------------------
//
    const svgSpiritual = d3.select('.spiritual').append('svg')
                  .attr('height', svgHeight)
                  .attr('width', svgWidth)
                  .style('background', '#333')
//
// // -----------------------------------------------------------------------------
// //                            EPILOGUE
// //------------------------------------------------------------------------------
//
    const svgFuture = d3.select('.future').append('svg')
                  .attr('height', svgHeight)
                  .attr('width', svgWidth)
                  .style('background', '#333')
//
//
//
  });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



































































//
