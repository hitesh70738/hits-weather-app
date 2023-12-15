var APIkey = "0c3ae1818c21ab6f3c0c2c74a674fa03";
var cityLocation = $('#search-input').val();
var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + cityLocation + "&appid=" + APIkey;

$('#search-button').on('click', function (event){
event.preventDefault()
var APIkey = "0c3ae1818c21ab6f3c0c2c74a674fa03";
var cityLocation = $('#search-input').val();
var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + cityLocation + "&appid=" + APIkey;

    fetch(queryURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data.list[0].weather[0].icon)
    const 
    
  })
});