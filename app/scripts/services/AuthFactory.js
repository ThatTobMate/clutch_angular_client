'use strict';
app.factory('AuthFact', ['$http', '$q', '$state', 'AuthToken', function ($http, $q, $state, AuthToken) {
    
  var authFactory = {};

  var api = 'http://localhost:1337'
  authFactory.signUp = function(user){
    return $http.post(api + '/auth/signup', {email: user.email, username: user.username, password: user.password})
      .success(function(data){
        AuthToken.setToken(data.token);
        return data;
      });
  }

  authFactory.login = function(user){
    return $http.post(api + '/auth/signin', {email: user.email, password: user.password})
      .success(function(data){
        AuthToken.setToken(data.token);
        return data;
      });
  }

  authFactory.logout = function(){
    console.log('loggedout');
    AuthToken.setToken();
    $state.go('home');
  }

  authFactory.isLoggedIn = function(){
    if(AuthToken.getToken())
      return true;
    else
      return false;
  }

  authFactory.getUser = function(){
    if(AuthToken.getToken())
      return $http.get(api + '/user/me');
    else
      return $q.reject({message: 'User has no token'});
  }

  return authFactory;

}]);