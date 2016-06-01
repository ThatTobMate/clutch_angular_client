'use strict';
app.factory('Game', ['$resource', '$http', '$q', 'AppSettings', function ($resource, $http, $q, AppSettings) {

  var Game = {};

  Game.getGames = function(){
    var deferred = $q.defer();
    $http.get(AppSettings.API + '/game')
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
    $http.get(AppSettings.API + '/console/' + consoleId + '/games')
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