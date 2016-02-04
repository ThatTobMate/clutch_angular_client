'use strict';
app.factory('Ladder', ['$resource', '$http', '$q', function ($resource, $http, $q) {

  var Ladder = {};
  var api = 'http://localhost:1337';

  Ladder.getLadders = function(gameId){
    var deferred = $q.defer();
    $http.get(api + '/game/' + gameId + '/ladders')
      .success(function(data){
        deferred.resolve(data);
      })
      .error(function(){
        deferred.reject("Error");
      });
      return deferred.promise;
  }

  service.getClients = function(){
      var deferred = $q.defer();
      $http.get("/api/v2/clients")
        .success(function(data){
          deferred.resolve(data);
        })
        .error(function(){
          deferred.reject("There was an error getting the clients");
        });
      return deferred.promise;
     };


  return Ladder;
}]);