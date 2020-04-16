

// -----------------------------------------------------------------------------
//                            API VARIABLES
//------------------------------------------------------------------------------

let statsBrief = 'https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/brief';
let statsAllCountries = 'https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/latest?onlyCountries=true'
let api = 'https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/latest'
let country='FR'
let topbox = document.querySelector('.topResult');
let toggle=false;

// -----------------------------------------------------------------------------
//                            WORLDMAP!!!
//------------------------------------------------------------------------------
function initMap() {
        // Styles a map in night mode.
        var map = new google.maps.Map(document.querySelector('#map'), {
          center: {lat: 0, lng: 0},
          zoom: 1.1,
          disableDefaultUI: true,
          styles: [
            {elementType: 'geometry', stylers: [{color: '#6f6f6f'}]},
            // {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#999999'},{fontFamily:'Monospace'}]},
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
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'},{visibility:'off'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'},{visibility:'off'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'},{visibility:'off'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'},{visibility:'simplified'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'},{visibility:'off'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'},{visibility:'off'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'},{visibility:'off'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'},{visibility:'off'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#000000'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#000000'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#000000'}]
            }
          ]
        });

        fetch(statsAllCountries)
          .then(function(response){
            return response.json();
          })
          .then(function(data){
            let lat = data[55].location;
            console.log(lat);
            let marker = new google.maps.Marker({
              position:lat,
              map:map

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
    let update = `<div>${data[0].lastupdate}</div>`;
    document.querySelector('.update').innerHTML='Last updated&colon;&nbsp;'+ update;
  })

//2018-07-31T11:56:48Z - ISO string can be parsed using new Date("2018-07-31T11:56:48Z") and obtained from a Date object using dateObject.toISOString()
// -----------------------------------------------------------------------------
//                            CONFIRMED BUTTON
//------------------------------------------------------------------------------
let confirmedButton = document.querySelector('.confirmed').addEventListener('click',function(){

  fetch(statsBrief)
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      console.log(data);
      let number= data.confirmed.toLocaleString();
      let htmlBrief = `<div class="topResult"><span class="confirmedNumbers">${data.confirmed}</span></div>`;
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
        console.log(data);
      let htmlCountries =  sorted.map(function(data){
          return  `<div><span class="confirmedNumbers">${data.confirmed}</span>&nbsp;&nbsp;${data.countryregion}</div>`;
          //insertAdjacentHTML('beforeEnd', htmlCountries);
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

let deathsButton = document.querySelector('.deaths').addEventListener('click',function(){

    fetch(statsBrief)
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      console.log(data);
      let htmlBrief = `<div class="topResult"><span class="deathNumbers">${data.deaths}</span></div>`;
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
        return `<div><span class="deathNumbers">${data.deaths}</span>&nbsp;&nbsp;${data.countryregion}</div>`;
      }).join('');
      document.querySelector('.countryContainer').innerHTML=htmlDeaths;
    })
})

// -----------------------------------------------------------------------------
//                            RECOVER BUTTON
//------------------------------------------------------------------------------
let recoveredButton = document.querySelector('.recovered').addEventListener('click',function(){

    fetch(statsBrief)
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      console.log(data);
      let htmlBrief = `<div class="topResult"><span class="recoveredNumbers">${data.recovered}</span></div>`;
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
        return `<div><span class="recoveredNumbers">${data.recovered}</span>&nbsp;&nbsp;${data.countryregion}</div>`;
      }).join('');
      document.querySelector('.countryContainer').innerHTML=htmlRecovered;
    })
})
// -----------------------------------------------------------------------------
//                            COORDINATES
//------------------------------------------------------------------------------





// -----------------------------------------------------------------------------
//                            GRAPHS / CHARTS!!!
//------------------------------------------------------------------------------

// let newChart = document.querySelector('#myChart').getContext('2d');
// let coronaChart = new Chart(newChart, {
//     type: 'bar',
//     data: {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         // scales: {
//         //     yAxes: [{
//                 ticks: {
//                     beginAtZero: true
//                 }
//             // }]
//         // }
//     }
// });
