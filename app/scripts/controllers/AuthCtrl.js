'use strict';


app.controller('AuthCtrl', function($scope, $location, $state, $localStorage, $http, AuthFact, AuthToken){
  console.log('Authctrl')

  $scope.signUp = function(user){
    AuthFact.signUp(user).then(function(data){
      console.log(data);
      $state.go('login', {}, {reload: true});
    });
  };

  $scope.login = function(user) {
    AuthFact.login(user).success(function(data){
      if(data.success){
          AuthFact.getUser().then(function(data){
            console.log(data)
            $scope.user = data.data;
          });
        $state.go('home', {}, {reload: true});

      }else{
        $scope.error = data.message;
      }
    });
  };

});