var app = angular.module('WeatherApp', []);

app.controller('WeatherAppController', function($scope, $http) {
  $http({
    method:'GET',
    url: 'http://api.openweathermap.org/data/2.5/weather?q=Seattlel&units=imperial&appid=f3b7c0e02a9e45674adf168e76fcb6ee'
  })
  .success(function(response) {
    console.log(response);
    $scope.city = response.name;
    $scope.temp = response.main.temp;
  });

  // $scope.message = "88";
});
