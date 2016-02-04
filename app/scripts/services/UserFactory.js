'use strict';

  app.factory('User', ['$window', '$localStorage', '$http', '$q', function ($window, $localStorage, $http, $q) {
    
  var userFactory = {};
  var api = 'http://localhost:1337';

  userFactory.updateProfile = function(userData){
    var deferred = $q.defer();
    $http.put(api + '/user/' + userData.id, userData)
      .success(function(data){
        deferred.resolve(data);
      })
      .error(function(){
        deferred.reject("Error");
      });
    return deferred.promise;
  };

  return userFactory;

}]);