'use strict';
app.factory('Console', ['$resource', '$http', '$q', function ($resource, $http, $q) {
    
  
  var ConsoleApi = {};
  var api = 'http://localhost:1337'

  ConsoleApi.getConsoles = function(){
    var deferred = $q.defer();
    $http.get(api + '/console')
      .success(function(data){
        deferred.resolve(data);
      })
      .error(function(){
        deferred.reject("Error");
      });
      return deferred.promise;
  };


  return ConsoleApi;
}]);