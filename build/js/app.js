var app = angular.module('WeatherApp', []);
var city = 'seattle';
var location = {
  latitude: '',
  longitude: ''
};

app.controller('WeatherAppController', function($scope, $http) {
  $http({
    method:'GET',
    url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial&appid=f3b7c0e02a9e45674adf168e76fcb6ee'
  })
  .success(function(response) {
    $scope.date = new Date();
    $scope.city = response.name;
    $scope.temp = response.main.temp
    $scope.wind = response.wind.speed  * 2.23694;
    $scope.humidity = response.main.humidity;
    $scope.windDirection = windDirection(response.wind.deg);
    $scope.currentWeatherIcon = iconSelector(response.weather[0].icon);
  });
});

app.controller('ForecastController', function($scope, $http) {
  $http({
    method: 'GET',
    url: 'http://api.openweathermap.org/data/2.5/forecast/daily?q=' + city + '&units=imperial&appid=f3b7c0e02a9e45674adf168e76fcb6ee'
  }).
  success(function(response) {

    var today = new Date();
    var dayOneDay = new Date(today);
    dayOneDay.setDate(today.getDate() + 1);
    var dayTwoDay = new Date(today);
    dayTwoDay.setDate(today.getDate() + 2);
    var dayThreeDay = new Date(today);
    dayThreeDay.setDate(today.getDate() + 3);
    var dayFourDay = new Date(today);
    dayFourDay.setDate(today.getDate() + 4);

    $scope.dayOneDate = dayOneDay;
    $scope.dayTwoDate = dayTwoDay;
    $scope.dayThreeDate = dayThreeDay;
    $scope.dayFourDate = dayFourDay;

    $scope.dayOne = response.list[0].temp.day;
    $scope.dayTwo = response.list[1].temp.day;
    $scope.dayThree = response.list[2].temp.day;
    $scope.dayFour = response.list[3].temp.day;

    $scope.dayOneForecastIcon = iconSelector(response.list[0].weather[0].icon);
    $scope.dayTwoForecastIcon = iconSelector(response.list[1].weather[0].icon);
    $scope.dayThreeForecastIcon = iconSelector(response.list[2].weather[0].icon);
    $scope.dayFourForecastIcon = iconSelector(response.list[3].weather[0].icon);

  })
});

// GeoLocation
var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;

  location.longitude = pos.longitude;
  location.latitude = pos.latitude;

}

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message)
};

navigator.geolocation.getCurrentPosition(success, error, options)

console.log(location.longitude + " here")

//Icon Selectors
function iconSelector(data) {
  if (data == "01d" || data == "01n") {
    return 'icon-sun';
  }
  else if (data == "02d" || data == "02n") {
    return 'icon-cloudy';
  }
  else if (data == "03d" || data == "03n") {
    return 'icon-cloud2';
  }
  else if (data == "04d" || data == "04n") {
    return 'icon-cloudy';
  }
  else if (data == "09d" || data == "09n") {
    return 'icon-rainy';
  }
  else if (data == "10d" || data == "10n") {
    return 'icon-rainy';
  }
  else if (data == "11d" || data == "11n") {
    return 'icon-rainy';
  }
  else if (data == "13d" || data == "13n") {
    return 'icon-snowy';
  }
  else if (data == "50d" || data == "50n") {
    return 'icon-rainy4';
  }
  else {
    return 'icon-none'
  }
};

function windDirection(degree) {

  if (degree >= 350 || (degree >=0 && degree < 10)) {
     return "North"
  }
  if (degree >= 10 && degree < 80) {
     return "North East"
  }
  if (degree >= 80 && degree < 100) {
     return "East"
  }
  if (degree >= 100 && degree < 170) {
     return "South East"
  }
  if (degree >= 170 && degree < 190) {
     return "South"
  }
  if (degree >= 190 && degree < 260) {
     return "SouthWest"
  }
  if (degree >= 260 && degree < 280) {
     return "West"
  }
  if (degree >= 280 && degree < 350) {
     return "North West"
  }

  else return degree;
}
