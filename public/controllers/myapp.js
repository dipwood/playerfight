var app = angular.module('myapp', ["ngResource", 'ngRoute']).
  config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
      $locationProvider.html5Mode(true);
      $routeProvider.
      when('/playerselect', {
        templateUrl: '/views/playerselect',
        controller: 'playerGetController'
      }).
      otherwise({
        redirectTo: '/'
      });
    }
  ]
);