var app = angular.module('playerGetModule', []);
app.controller('playerGetController', function($scope, $http) 
    {
    $http.get("playerfetcher")
    .success(function (response) 
      {
      $scope.names = response;
      });
    });