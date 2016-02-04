'use strict';
app.controller('GamesCtrl', function ($scope, $stateParams, $location, Game){
  console.log('GameCtrl')
  Game.getGames().then(function(data){
    console.log(data);
    $scope.games = data;
  });

  if($stateParams.consoleId){
   Game.getConsoleGames($stateParams.consoleId).then(function(data){
      $scope.consoleGames = data;
   });
  }


});


