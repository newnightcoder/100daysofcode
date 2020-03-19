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
  myHeaders.append("Authorization", "Bearer xxx
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


  let button= document.querySelector('.callAPI').addEventListener('click', function(){
    let home=document.querySelector('#homeContainer');
    home.style.display='none';
    let result=document.querySelector('#resultContainer');
    result.style.display='block';
    fetch(api + city + pax + distance + payment, requestOptions)
    .then(function(response){
      return response.json();
    })
    .then(function(hotels){
      console.log(hotels);
      let div = document.createElement('div');
      div.innerHTML= 'OFFER 1:'+'\n'+ hotels.data[0].hotel.name +'\n' +hotels.data[0].offers[0].price.base+'\n'+hotels.data[0].offers[0].price.currency;
      document.querySelector('.offer').appendChild(div);
      let div2 = document.createElement('div');
      div2.innerHTML= 'OFFER 2:'+'\n'+ 'hotel.data[1].hotel.name';
      document.querySelector('div').appendChild(div2);
    })
    .catch(function(error){
      console.log('it aint working', error);
    });
  });
