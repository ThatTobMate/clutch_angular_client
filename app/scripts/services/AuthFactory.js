'use strict';
app.factory('AuthFact', ['$http', '$q', '$state', 'AuthToken', 'AppSettings', function ($http, $q, $state, AuthToken, AppSettings) {
    
  var authFactory = {};

  authFactory.signUp = function(user){
    var deferred = $q.defer();
    $http.post(AppSettings.API + '/auth/signup', {email: user.email, username: user.username, password: user.password})
      .success(function(data){
        AuthToken.setToken(data.token);
        deferred.resolve(data);
      })
      .error(function(){
        deferred.reject("Error");
      });
    return deferred.promise;
  }

  authFactory.login = function(user){
    var deferred = $q.defer();
    debugger;
    $http.post(AppSettings.API + '/auth/signin', {email: user.email, password: user.password})
      .success(function(data){
        AuthToken.setToken(data.token);
        deferred.resolve(data);
      })
      .error(function(){
        deferred.reject("Error");
      });
    return deferred.promise;
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

  authFactory.getUser = function(userId){
    if(AuthToken.getToken()){

      var deferred = $q.defer();
      $http.get(AppSettings.API + '/user/' + userId)
        .success(function(data){
          deferred.resolve(data);
        })
        .error(function(){
          deferred.reject("Error");
        });
      return deferred.promise;
    }else{
      return $q.reject({message: 'User has no token'});
    }
  }

  return authFactory;

}]);