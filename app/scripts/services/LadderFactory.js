'use strict';
app.factory('Ladder', ['$resource', '$http', '$q', 'AppSettings', function ($resource, $http, $q, AppSettings) {

  var Ladder = {};

  Ladder.getLadders = function(gameId){
    var deferred = $q.defer();
    $http.get(AppSettings.API + '/game/' + gameId + '/leagues')
      .success(function(data){
        deferred.resolve(data);
      })
      .error(function(){
        deferred.reject("Error");
      });
      return deferred.promise;
  }


  return Ladder;
}]);