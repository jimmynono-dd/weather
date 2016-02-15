(function(){
  var CurrentWeatherController = function($scope, currentWeatherFactory) {

    function init() {
      currentWeatherFactory.getCurrentWeather()
      .then(function($scope) {
        // $scope.date = new Date();
        // $scope.city = response.name;
        // $scope.temp = response.main.temp
        // $scope.wind = response.wind.speed  * 2.23694;
        // $scope.humidity = response.main.humidity;
        // $scope.windDirection = windDirection(response.wind.deg);
        // $scope.currentWeatherIcon = iconSelector(response.weather[0].icon);
      });
    };
    init();
  };

  CurrentWeatherController.$inject = ['$scope', 'currentWeatherFactory']
  angular.module('WeatherApp').controller('CurrentWeatherController', CurrentWeatherController)
}());
