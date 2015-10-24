'use strict';
app.factory('Game', ['$resource', '$http', function ($resource, $http) {

  var Game = {
    // getGames: function(params){
    //   return $http.post('/api/games/get_games', {id:params});
    // },
    // getLadders: function(game){
    //   return $http.get('/api/games/get_ladders/'+ game)
    // }
  };

  return Game;
}]);