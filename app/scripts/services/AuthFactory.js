'use strict';
app.factory('AuthFact', ['$http', '$q', 'AuthToken', function ($http, $q, AuthToken) {
    
  var authFactory = {};

  authFactory.signUp = function(user){
    debugger;
    return $http.post('/api/signup', {email: user.email, username: user.username, password: user.password})
      .success(function(data){
        AuthToken.setToken(data.token);
        return data;
      });
  }

  authFactory.login = function(user){
    return $http.post('/api/login', {username: user.username, password: user.password})
      .success(function(data){
        AuthToken.setToken(data.token);
        return data;
      });
  }

  authFactory.logout = function(){
    AuthToken.setToken();
  }

  authFactory.isLoggedIn = function(){
    if(AuthToken.getToken())
      return true;
    else
      return false;
  }

  authFactory.getUser = function(){
    if(AuthToken.getToken())
      return $http.get('/api/me');
    else
      return $q.reject({message: 'User has no token'});
  }

  return authFactory;

}]);