let apiGeneral = 'https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats'
let api = 'https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country='
let country = 'France'
let requestOptions = {
	method: "GET",
	headers: {
		'x-rapidapi-host': 'covid-19-coronavirus-statistics.p.rapidapi.com',
		'x-rapidapi-key': 'xxx'
	}
}
fetch(api+country, requestOptions)
.then(function(response){
	return response.json();
})
.then(function(data){
   console.log(data.data.covid19Stats[10].country + data.data.covid19Stats[10].confirmed);
})
.catch(err => {
	console.log(err);
});

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
