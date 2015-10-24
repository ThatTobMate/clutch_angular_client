'use strict';
app.controller('GamesCtrl', function ($scope, $routeParams, $location, Game){
  console.log($routeParams)
  $scope.consoleParam = $routeParams.consoleName
  $scope.gameParam = $routeParams.gameId
  $scope.url = $location.url();

  console.log($scope.url)

  // Game.getGames($scope.consoleParam).then(function(data){
  //    $scope.games = data.data
  //    console.log($scope.games)
  // })
  
  //   $scope.getLadders = function(game){
  //     Game.getLadders(game).then(function(data){
  //     $scope.game = data.data
  //     console.log($scope.game)
  //   })
  // }

  // if($scope.gameParam){
  //   $scope.getLadders($scope.gameParam)
  // }
  // $http.get('games/get_games', $routeParams)
});


