'use strict';

  app.factory('User', ['$window', '$localStorage', '$http', function ($window, $localStorage, $http) {
    
  var userFactory = {};
  var api = 'http://localhost:1337';

  userFactory.updateProfile = function(userId){
    console.log('updating profile');
    return $http.put(api + '/user/' + userId).success(function(data){
      debugger;
      return data;
    });
  };

  return userFactory;

}]);