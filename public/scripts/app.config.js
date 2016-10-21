angular.module('fiveKings')
  .config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/joffrey',{
      templateUrl: 'views/joffrey.html'
    }).when('/renly',{
      templateUrl: 'views/renly.html'
    }).when('/stannis',{
      templateUrl: 'views/stannis.html'
    }).when('/robb',{
      templateUrl: 'views/robb.html'
    }).when('/balon',{
      templateUrl: 'views/balon.html'
    });

    $locationProvider.html5Mode(true);
  });
