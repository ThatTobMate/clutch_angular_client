'use strict';
app.controller('LaddersCtrl', function ($scope, $routeParams, $location, Ladder){
  console.log($routeParams.ladderId)
  $scope.consoleParam = $routeParams.consoleName
  $scope.ladderId = $routeParams.ladderId
  $scope.url = $location.url();

  // Ladder.getClans($scope.ladderId).then(function(data){
  //    $scope.teams = data.data
  //    console.log($scope.teams)
  // })
  // $http.get('games/get_games', $routeParams)
});


