(function() {

  var currentWeatherFactory = function($http) {
    //var city = 'seattle';
    var factory = {};

    factory.getCurrentWeather = function() {
      return $http.get('http://api.openweathermap.org/data/2.5/weather?q=seattle&units=imperial&appid=f3b7c0e02a9e45674adf168e76fcb6ee');
    };
    
    console.log(factory);
    return factory;
  };

  currentWeatherFactory.$inject = ['$http']
  angular.module('WeatherApp').factory('currentWeatherFactory', currentWeatherFactory);

}());
