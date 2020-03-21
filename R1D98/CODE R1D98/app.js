// let myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
//
// let urlencoded = new URLSearchParams();
// urlencoded.append("grant_type", "client_credentials");
// urlencoded.append("client_id", "X");
// urlencoded.append("client_secret", "X");
//
// let requestOptions = {
//   method: 'POST',
//   headers: myHeaders,
//   body: urlencoded,
//   redirect: 'follow'
// };
//
// fetch("https://test.api.amadeus.com/v1/security/oauth2/token", requestOptions)
//   .then(function (response){
//     return response.text();
//    })
//   .then(function (result){
//     console.log(result);
//    })
//   .catch(function (error){
//     console.log('not working', error);
//    });
//------------------------------------------------------------------------------
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
  myHeaders.append("Authorization", "Bearer X");
  let requestOptions = {
    method: 'GET',
    headers: myHeaders,
    //body: urlencoded,
    redirect: 'follow'
  };

  let api = 'https://test.api.amadeus.com/v2/shopping/hotel-offers?cityCode='
  let city = 'PAR'
  let pax = '&adults=1'
  let distance = '&radius=5&radiusUnit=KM'
  let payment = '&paymentPolicy=NONE&includeClosed=false&bestRateOnly=true&view=FULL&sort=PRICE';

  let home=document.querySelector('#homeContainer');
  let result=document.querySelector('#resultContainer');

  let button= document.querySelector('.callAPI').addEventListener('click', function(){
    home.style.display='none';
    result.style.display='block';
    fetch(api + city + pax + distance + payment, requestOptions)
    .then(function(response){
      return response.json();
    })
    .then(function(hotels){
      console.log(hotels.data);
      console.log(hotels.data.map(function(hotel){
        return hotel.hotel.name;
      })
      .join(' ')
    );
      let htmlResults = hotels.data.map(function(hotel){
        return `<p>OFFER: ${hotel.hotel.name}</p>`
      })
      .join(' ');
      console.log(htmlResults);
      document.querySelector('#resultContainer').insertAdjacentHTML('beforeEnd', htmlResults);

    })
    .catch(function(error){
      console.log('it aint working', error);
    });
  });
