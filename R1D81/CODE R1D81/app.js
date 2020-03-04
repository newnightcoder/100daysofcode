let request = new Request('https://test.api.amadeus.com/v1/security/oauth2/token', {
  method:'POST',
  headers: {'Content_type': 'application/x-www-form-urlencoded'},
  body:{'Grant_type':'client_credentials&client_id=thatsmyAPIkey!!!&client_secret=thatsmysecret!LOL'},
})


fetch (request)
  .then(function(response){
    return response.json();
    console.log(response);
  })
