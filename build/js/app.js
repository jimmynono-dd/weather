var app = angular.module('WeatherApp', []);

app.controller('WeatherAppController', function($scope, $http) {
  $http({
    method:'GET',
    url: 'http://api.openweathermap.org/data/2.5/weather?q=seattle&units=imperial&appid=f3b7c0e02a9e45674adf168e76fcb6ee'
  })
  .success(function(response) {
    console.log(response);
    $scope.date = new Date();
    $scope.city = response.name;
    $scope.temp = response.main.temp;
    $scope.wind = response.wind.speed  * 2.23694;
    $scope.humidity = response.main.humidity;
    $scope.windDirection = windDirection(response.wind.deg);
  });
});

app.controller('ForecastController', function($scope, $http) {
  $http({
    method: 'GET',
    url: 'api.openweathermap.org/data/2.5/forecast/daily?q=seattle&units=imperial&appid=f3b7c0e02a9e45674adf168e76fcb6ee'
  }).
  success(function(response) {
    console.log(response.list[0].temp.day)
  })
});

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
