// let myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
//
// let urlencoded = new URLSearchParams();
// urlencoded.append("grant_type", "client_credentials");
// urlencoded.append("client_id", "xxx");
// urlencoded.append("client_secret", "xxx");
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
  myHeaders.append("Authorization", "Bearer xxx");

  let requestOptions = {
    method: 'GET',
    headers: myHeaders,
    //body: urlencoded,
    redirect: 'follow'
  };

  fetch("https://test.api.amadeus.com/v2/shopping/hotel-offers?cityCode=PAR&adults=1&radius=5&radiusUnit=KM&paymentPolicy=NONE&includeClosed=false&bestRateOnly=true&view=FULL&sort=PRICE", requestOptions)
    .then(function(response){
      return response.json();
    })
    .then(function(hotel){
      console.log(hotel.data[0].hotel.name);
      let div = document.createElement('div');
      div.innerHTML= hotel.data[0].hotel.name;
      document.querySelector('.search').appendChild(div);
    })
    .catch(function(error){
      console.log('it aint working', error);
    });
