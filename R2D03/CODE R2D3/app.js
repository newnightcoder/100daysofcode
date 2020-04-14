// -----------------------------------------------------------------------------
//                            API VARIABLES
//------------------------------------------------------------------------------

let statsBrief = 'https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/brief';
let statsAllCountries = 'https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/latest?onlyCountries=true'
let api = 'https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/latest'
let country='FR'
let boxes = document.querySelectorAll('.topResult');
// -----------------------------------------------------------------------------
//                            LATEST UPDATE FOOTER
//------------------------------------------------------------------------------

fetch(statsAllCountries)
  .then(function(response){
	   return response.json();
  })
  .then(function(data){
    let update = `<div>${data[0].lastupdate}</div>`;
    document.querySelector('.update').insertAdjacentHTML('beforeEnd', update);
  })

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
      let htmlBrief = `<div class="topResult"><span class="confirmedNumbers">${data.confirmed}</span></div>`;
      document.querySelector('.totalCases').insertAdjacentHTML('beforeEnd', htmlBrief);
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
        sorted.forEach(function(data){
          let htmlCountries =  `<div><span class="confirmedNumbers">${data.confirmed}</span>&nbsp;&nbsp;${data.countryregion}</div>`;
          document.querySelector('.countryContainer').insertAdjacentHTML('beforeEnd', htmlCountries);
        });
    })
    .catch(err => {
    	console.log(err);
      });
  })
// -----------------------------------------------------------------------------
//                            DEATHS BUTTON
//------------------------------------------------------------------------------
let deathsButton = document.querySelector('.deaths').addEventListener('click', function(){
 boxes.innerHTML="";
  fetch(statsBrief)
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      console.log(data);
      let htmlBrief = `<div class="topResult"><span class="deathNumbers">${data.deaths}</span></div>`;
      document.querySelector('.totalCases').insertAdjacentHTML('beforeEnd', htmlBrief);
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
      sort.forEach(function(data){
        let htmlDeaths = `<div><span class="deathNumbers">${data.deaths}</span>&nbsp;&nbsp;${data.countryregion}</div>`;
        document.querySelector('.countryContainer').insertAdjacentHTML('beforeEnd', htmlDeaths);
      })
    })
})

// -----------------------------------------------------------------------------
//                            RECOVER BUTTON
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
