let date = document.querySelector('.date');
let today = moment (new Date).format('dddd, MMMM Do YYYY');
date.innerHTML = today;
