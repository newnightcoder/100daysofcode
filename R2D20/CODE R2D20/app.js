
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
    zoom: 1.3,
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
    document.querySelector('.update').innerHTML=`Last updated&colon;&nbsp; ${update} &nbsp;-  Data provided by Johns Hopkins CSSE`;
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
//                            GRAPHS / CHARTS!!!
//------------------------------------------------------------------------------

let charts = d3.select(".charts").style('border','1px solid red')
               .append("h2").style('border','1px solid lime').text("first chart with D3");

fetch(timeseries)
  .then(function (response){
    return response.json();
  })
  .then(function (data){

    let franceData = data[116].timeseries;
    let dataset = [];

      for(i in franceData){

        let numbers = franceData[i].confirmed
      //dataset.push(franceData[i].confirmed);


        console.log(numbers);



        // d3.select('.charts').selectAll('div')
        //   .data(numbers)
        //   .enter()
        //   .append('div')
        //   .attr('class','testChart')

      };







    // console.log('%cACTUAL RAW DATA OF FRANCE TIMELINE UNTIL TODAY: COOL😍\nBUT here is the thang😋: i want to access EACH confirmed number of each object!\nmy little issue here:they are DATES!!(day/month/year)😅', 'color:lightgreen; font-size:12px');
    //console.log(timeseriesFr);
    // console.log('%cHere they are as i want them!🤩 but i did this MANUALLY by console logging the .confirmed for each DATE from january 22 to 31😅😂!!!\nso i know HOW to access the numbers and i want to MAP()!!! why does it NOT work???😭\ninvestigating right now! i will find out!!🤓👆🏾', 'color:tomato; font-size:12px');
    // console.log(timeseriesFr['1/22/20'].confirmed);
    // console.log(timeseriesFr['1/23/20'].confirmed);
    // console.log(timeseriesFr['1/24/20'].confirmed);
    // console.log(timeseriesFr['1/25/20'].confirmed);
    // console.log(timeseriesFr['1/26/20'].confirmed);
    // console.log(timeseriesFr['1/27/20'].confirmed);
    // console.log(timeseriesFr['1/28/20'].confirmed);
    // console.log(timeseriesFr['1/29/20'].confirmed);
    // console.log(timeseriesFr['1/30/20'].confirmed);
    // console.log(timeseriesFr['1/31/20'].confirmed);
    //console.log(timeseriesFr['1/22/20']);

    // let dataset = timeseriesFr[].map(function(data){
    //   return timeseriesFr[].confirmed;
    // })



  })





















































































//
