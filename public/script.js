var app = angular.module('RoutingApp', ['ngRoute']);

app.config( ['$routeProvider', function($routeProvider) 
	{
	$routeProvider
		.when('/first', {
			// templateUrl: 'views/last' // THIS CRASHES THE PAGE
			// templateUrl: 'last' // so does this
			templateUrl: 'last.jade' // this doesn't, but serves up static file instead of rendering jade
		})
		.when('/second', {
			templateUrl: 'second.html'
		})
		.otherwise({
			redirectTo: '/'
		});
	}]);

