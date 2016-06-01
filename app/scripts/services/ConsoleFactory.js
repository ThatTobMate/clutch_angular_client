'use strict';
app.factory('Console', ['$resource', '$http', '$q', 'AppSettings', function ($resource, $http, $q, AppSettings) {
    
  
  var ConsoleApi = {};

  ConsoleApi.getConsoles = function(){
    var deferred = $q.defer();
    $http.get(AppSettings.API + '/console')
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