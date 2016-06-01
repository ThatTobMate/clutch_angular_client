'use strict';

  app.factory('User', ['$window', '$localStorage', '$http', '$q', 'AppSettings', function ($window, $localStorage, $http, $q, AppSettings) {
    
  var userFactory = {};

  userFactory.updateProfile = function(userData){
    var deferred = $q.defer();
    $http.put(AppSettings.API + '/user/' + userData.id, userData)
      .success(function(data){
        deferred.resolve(data);
      })
      .error(function(){
        deferred.reject("Error");
      });
    return deferred.promise;
  };

  userFactory.getUsers = function(){
    var deferred = $q.defer();
    $http.get(AppSettings.API + '/user?limit=1&skip=1')
      .success(function(data){
        debugger;
        deferred.resolve(data);
      })
      .error(function(){
        deferred.reject("Error");
      });
    return deferred.promise;
  };

  return userFactory;

}]);