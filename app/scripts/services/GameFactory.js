'use strict';
app.factory('Game', ['$resource', '$http', '$q', function ($resource, $http, $q) {

  var Game = {};
  var api = 'http://localhost:1337';

  Game.getGames = function(){
    var deferred = $q.defer();
    $http.get(api + '/game')
      .success(function(data){
        deferred.resolve(data);
      })
      .error(function(){
        deferred.reject("Error");
      });
      return deferred.promise;
  }

  Game.getConsoleGames = function(consoleId){
    var deferred = $q.defer();
    $http.get(api + '/console/' + consoleId + '/games')
      .success(function(data){
        deferred.resolve(data);
      })
      .error(function(){
        deferred.reject("Error");
      });
      return deferred.promise;
  }

  return Game;
}]);