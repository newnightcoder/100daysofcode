let request = new Request('https://test.api.amadeus.com/v1/security/oauth2/token', {
  method:'POST',
  headers: {'Content_type': 'application/json'},
  body: {
    'grant_type':'client_credentials',
    'client_id':'xxxxx',
    'client_secret':'xxxxx'}
})
fetch(request)
  .then(function(response){
    console.log('yes');
    return response.json();
  })
  .then(function(data){
    console.log ("here it is!");
      console.log(data);
  })
  .catch (function(error){
    console.log("error caught! sorry user");
  })
