var playerGetterModule = angular.module("playerGetModule", []);
playerGetterModule.controller('playerGetController',['$scope', function($scope) 
	{ 
	$scope.playername = 'Rain'; 
	$scope.team = 'mYi';
	$scope.stats =
		{
		luck: 6,
		macro: 8
		}
	}]);


/*
var playerGetterModule = angular.module("playerGetModule", []);
playerGetterModule.controller('playerGetController',['$scope', function($scope) 
	{ 
	$scope.playername = 'Rain'; 
	$scope.team = 'mYi';
	$scope.stats =
		{
		luck: 6,
		macro: 8
		}
	}]);

 div(ng-app='myApp', ng-controller='myCtrl')
    button(ng-click='count = count + 1') Click Me!
      
    p {{ count }}
    
  script.
    var app = angular.module('myApp', []);
    app.controller('myCtrl', function($scope) {
    $scope.count = 0;
    });

*/