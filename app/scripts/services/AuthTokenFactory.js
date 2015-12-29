'use strict';

  app.factory('AuthToken', ['$window', '$localStorage', function ($window, $localStorage) {
    
  var authTokenFactory = {};

  authTokenFactory.getToken = function(){
    console.log('get token');
    return $localStorage.token;
  };

  authTokenFactory.setToken = function(token){
    if(token){
      console.log('token set')
      $localStorage.token = token;
    }else{
      console.log('token deleted')
      delete $localStorage.token;
    }
  };

  return authTokenFactory;

}]);