// let myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
//
// let urlencoded = new URLSearchParams();
// urlencoded.append("grant_type", "client_credentials");
// urlencoded.append("client_id", "F2Q6LlZWzSB4BROcEfezyfvsVCurijuA");
// urlencoded.append("client_secret", "YXc11ygyjGnM7NlL");
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
// //------------------------------------------------------------------------------
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
  myHeaders.append("Authorization", "Bearer rnOP2NiduVyho97SuCpoTfdM3wpQ");
  let requestOptions = {
    method: 'GET',
    headers: myHeaders,
    //body: urlencoded,
    redirect: 'follow'
  };

  let api = 'https://test.api.amadeus.com/v2/shopping/hotel-offers?cityCode='
  let city;
  let pax = '&adults=1'
  let distance = '&radius=5&radiusUnit=KM'
  let payment = '&paymentPolicy=NONE&includeClosed=false&bestRateOnly=true&view=FULL&sort=PRICE';

  let home = document.querySelector('#homeContainer');
  let result = document.querySelector('#resultContainer');
  let input = document.querySelector('#input');


  let button= document.querySelector('.callAPI').addEventListener('click', function(){
    home.style.display='none';
    result.style.display='block';

//
//     switch(input.value){
//     case input.value=='paris':
//      city='PAR';
//      break;
//     case input.value=='new york':
//     city='NYC';
//     break ;
// }


    if(input.value == 'paris'||input.value =='Paris'||input.value =='PARIS'){
      city ='PAR';
    }
     if (input.value == 'new york'||input.value =='NEW YORK'){//||'New york'||'new York'||'New-York'||'new-york'||'NEW-YORK'){
      city='NYC';
    }
     if(input.value == 'london'||input.value =='London'||input.value =='LONDON'){
      city='LON';
    }
    else if (input.value == 'miami'||input.value =='Miami'||input.value =='MIAMI'){
      city='MIA';
    }
    if(input.value == 'sydney'||input.value =='Sydney'||input.value =='SYDNEY'){
      city='SYD';
    }
    if(input.value == 'bangkok'||input.value =='Bangkok'||input.value =='BANGKOK'){
      city='BKK';
    }

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
        return `<div>OFFER ${hotel.offers[0].price.total} ${hotel.offers[0].price.currency}: ${hotel.hotel.name} <br>${hotel.hotel.address.lines[0]} - ${hotel.hotel.address.postalCode} </div> `
        //`${hotel.hotel.name}`.style.color="red";
      })
      .join(' ');
      console.log(htmlResults);
      document.querySelector('.offers').insertAdjacentHTML('beforeEnd', htmlResults);

    })
    .catch(function(error){
      console.log('it aint working', error);
    });
  });
