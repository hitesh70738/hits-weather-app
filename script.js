var APIkey = "0c3ae1818c21ab6f3c0c2c74a674fa03";
var cityLocation = $('#search-input').val();
var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + cityLocation + "&appid=" + APIkey;

// $('#search-button').on('click', function (event){
// event.preventDefault()
// var APIkey = "0c3ae1818c21ab6f3c0c2c74a674fa03";
// var cityLocation = $('#search-input').val();
// var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + cityLocation + "&appid=" + APIkey;


// // The city name
// // The date  list[0].dt_txt
// // An icon representation of weather conditions list[0].weather[0].icon
// // The temperature list[0].main.temp
// // The humidity list[0].main.humidity
// // The wind speed list[0].wind.speed

//     fetch(queryURL)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {


//     console.log(data.city.name)
//     console.log(data)
//     const cityName = data.city.name
//     const date = data.list[0].dt_txt
//     const icon = data.list[0].weather[0].icon

//     const div = $('.card')
//     console.log(cityName)

//     div.text(cityName)

    
//   })
// });

let cityList = []
function getInput(){
    $('#search-button').on('click', function (event){
        var APIkey = "0c3ae1818c21ab6f3c0c2c74a674fa03";
        var cityLocation = $('#search-input').val();
        var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + cityLocation + "&appid=" + APIkey;

        event.preventDefault()
        fetch(queryURL)
        .then(function (response) {
            return response.json();
        })
.then(function (data) {

  console.log(data)
  const cityName = data.city.name
  const date = data.list[0].dt_txt
  const icon = data.list[0].weather[0].icon
  const temp = data.list[0].main.temp
  const humidity = data.list[0].main.humidity
  const windSpeed = data.list[0].wind.speed
  const iconUrl = `http://openweathermap.org/img/w/10n.png`;


//   console.log(cityName)
//   console.log(date)
  
//   console.log(temp)
//   console.log(humidity)
//   console.log(windSpeed)

  
    var a = $('<a>')
    var h1 = $('<h1>')
    var h3 = $('<h3>')

    h1.text(cityName)
    const weatherIcon = $('<img>').attr('src', iconUrl)
    h1.append(weatherIcon)
    $('.container').append(h1)

});
const city = $('#search-input').val();
        // console.log(city)
        cityList.push(city)
        renderInput()
    })
    
    
}
getInput()
function renderInput(city){
    $('ul').empty()
    for(var i = 0; i < cityList.length;i++){
      const cityEL = $('<li>').text(cityList[i]).addClass('list-item-group city'); // add a click event
    $('ul').append(cityEL);  
    }
    storeCityLsit();

}
function storeCityLsit (){
    localStorage.setItem('city-names', JSON.stringify(cityList));
}
// dsiplay city names when submit box is clicked
// grab city name from submit
// have an array where we can push the city name in
// grab all city name to add to elements in page



// // The temperature list[0].main.temp
// // The humidity list[0].main.humidity
// // The wind speed 