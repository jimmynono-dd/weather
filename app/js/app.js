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
    $scope.windDirection = response.wind.deg;
  });

  // $scope.message = "88";
});
