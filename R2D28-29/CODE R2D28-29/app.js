
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
        stylers: [{color: '#333333'}]
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
          let countriesConfirmed = data.confirmed.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 '); //FORMATTING OF THE JSON DATA!! ADDS SPACE BETWEEN 3 DIGITS arrayFranceData!
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

let spread = d3.select(".spread").append("h3").html("<div>Chapter 1</div>The fast spread of COronaVIrus throughout the world started shortly before spring 2020...");
let economy = d3.select(".economy").append("h3").html("Chapter 2<br>became in the spring the biggest threat of global economic collapse since 1921's Black Thursday ...");
let social = d3.select(".social").append("h3").html("Chapter 3<br>... resulting in historic social consequences - some dramatic, some un-expected");
let spiritual = d3.select(".spiritual").append("h3").html("Chapter 4<br>Leading many to open up to some form of spitituality or metaphysics");
let future = d3.select(".future").append("h3").html("EPILOGUE?<br>The future");


//------------------------------ TEST CHART WITH DIVS ------------------------//
//------------------------------------------------------------------------------
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

//-------------------------- DATA PREP ---------------------------------------//
//------------------------------------------------------------------------------
d3.json(timeseries)
  .then(function (data){

    //---------- OBJET CONTENANT TOUS LES OBJETS DATES ----------//


    let rawData = data;
    console.log(rawData);

    let countryList = rawData.sort(function(a,b){
      if(b.countryregion<a.countryregion) return 1;
      if(b.countryregion>a.countryregion) return -1;
      else return 0;
    })
    console.log(countryList);

    let filter2= countryList.filter(function(data){
      if(data !==undefined)
      return data;
    })
    console.log(filter2);



    const franceData = rawData[126].timeseries;
    console.log('%c franceData', 'color:yellow ;font-size:14px');
    console.log(franceData);

    // //---------- OBJET TRANSFORMÉ EN ARRAY ----------------------//

    let arrayFranceData = Object.values(franceData);
    console.log('%c arrayFranceData', 'color:navy ;font-size:14px');
    console.table(arrayFranceData);


    // //---------- ARRAY CONTENANT TOUTES LES DATES UNIQUEMENT -----//

    let dates = Object.keys(franceData);
    console.log('%c dates', 'color:pink ;font-size:14px')
    console.table(dates);
    //
    let formattedDates = dates.map(function(d){
      return moment(d).format("MMMM Do");
    })
    console.log('%c formattedDates', 'color:pink ;font-size:14px')
    console.table(formattedDates);
    //
    // //---------- ARRAYS CONTENANT LES CHIFFRES  ----------//

    let spreadDataset = arrayFranceData.map(function(data){
      return data.confirmed;
    });
    console.log('%c spreadDataset', 'color:yellow ;font-size:14px');
    console.table(spreadDataset);


    let deathDataset = arrayFranceData.map(function(data){
      return data.deaths;
    });
    console.log('%c deathDataset', 'color:orange ;font-size:14px');
    console.table(deathDataset);


    let recovDataset = arrayFranceData.map(function(data){
      return data.recovered;
    });
    console.log('%c recovDataset', 'color:firebrick ;font-size:14px');
    console.table(recovDataset);

//--------------------SVG CHART CONST VARIABLES ------------------------------//
//------------------------------------------------------------------------------

    const svgWidth = 960;
    const svgHeight = 480;
    const margin = {
      top: 35,
      right: 20,
      bottom: 70,
      left: 80
    }
    const barWidth = (svgWidth - margin.left - margin.right)/spreadDataset.length;
    let barColor = d3.scaleLinear()
                     .domain([30, spreadDataset.length])
                     .range(['yellow','red'])

    let barMargin = 10;

  //-------------------- X AND Y SCALES --------------------------------------//
  //----------------------------------------------------------------------------

    let xScale = d3.scaleLinear()
                   .domain([0, spreadDataset.length])
                   .range([margin.left, svgWidth -margin.right])

    let yScale = d3.scaleLinear()
                   .domain([0, d3.max(spreadDataset)])
                   .range([margin.bottom, svgHeight - margin.top])

//-------------------- X AND Y AXES ------------------------------------------//
//------------------------------------------------------------------------------

    let today = new Date();
    let xAxisScale = d3.scaleTime()
                      .domain([new Date(2020,0,22), new Date(today)])
                      .range([0, svgWidth-margin.right-margin.left])
    console.log('essai date', new Date(today));

    let xAxis = d3.axisBottom(xAxisScale)

    let yAxisScale = d3.scaleLinear()
                       .domain([0, d3.max(spreadDataset)])
                       .range([svgHeight - margin.bottom, margin.top])
    console.log('d3 max de spreadDataset', d3.max(spreadDataset))

    let yAxis = d3.axisLeft(yAxisScale)
                  .tickSize(-(svgWidth-margin.right-margin.left))

//-------------------- FINAL GRAPH -------------------------------------------//
//------------------------------------------------------------------------------
    const svgSpread = d3.select('.spread').append('svg')
                        .attr('height', svgHeight)
                        .attr('width', svgWidth)
                        .style('fill', '#333')

//-------------------- APPEND AXES -------------------------------------------//
//------------------------------------------------------------------------------
    svgSpread.append("g")
             .call(yAxis).attr('color','#bfbfbf')
             .attr("transform", `translate(${margin.left},0)`)

             .append("g")
             .call(xAxis).attr('color','#bfbfbf')
             .attr("transform", `translate(0,${svgHeight-margin.bottom})`)



//-------------------- APPEND RECT -------------------------------------------//
//------------------------------------------------------------------------------
let tooltip = d3.select('.spread').append('div')
                              .attr('class', 'tooltip')

  svgSpread.selectAll('rect').attr('class','hover')

             .data(spreadDataset)
             .enter()
             .append('rect')
                .attr('x', function(d, i){
                  return xScale(i);
                })
                .attr('y', function(d){
                  return svgHeight-yScale(d);
                })
                .attr('width', barWidth)
                .attr('height', function(d, i){
                 return yScale(d)-margin.bottom;
                })
                .style('fill', function(d, i){
                 return barColor(i);
                })
//-------------------- TOOLTIPS ----------------------------------------------//
//-----------------------------------------------------------------------------
                .on('mouseover', function(d, i){
                    tooltip.html(`<div class="datesTooltip">${formattedDates[i]}</div><div class="info">${d.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')}<br>confirmed cases</div>`)
                           .style('font-size','1rem')
                           .style('display','flex')
                           .style('flex-direction','column')
                           .style('align-items','center')
                           .style('justify-content','center')
                           .style('left', `${(i * barWidth)+70}px`)
                           .style('bottom', '0 px')
                    d3.select(this).attr('opacity','.5')
                })
                .on('mouseout', function(d, i){
                    tooltip.style('display','none')
                    d3.select(this).attr('opacity','1')
                })

//-------------------- TITLES ----------------------------------------------//
//-----------------------------------------------------------------------------
svgSpread.append('text')
         .text(function(){
           return rawData[126].countryregion;
         })
         .style('text-transform','uppercase')
         .style('font-size','18px')
         //.style('font-style','italic')
         .style('fill','#bfbfbf')
         .attr('x', 430)
         .attr('y', 30)

  svgSpread.append('text')
           .text('CONFIRMED CASES')
           .style('font-size','14px')
           .style('font-style','italic')
           .style('fill','rgba(211,211,211,.2)')
           .attr('x', 30)
           .attr('y', 45)
           // .attr('x', -180)
           // .attr('y', 110)
           //.attr('transform', 'rotate(-90)')

  svgSpread.append('text')
           .text('TIMELINE')
           .style('font-size','14px')
           .style('font-style','italic')
           .style('fill','rgba(211,211,211,.2)')
           .attr('x', 430)
           .attr('y', 455)
           //.attr('transform', 'rotate(-90)')
          //.attr('transform', 'rotate(-90)')


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
