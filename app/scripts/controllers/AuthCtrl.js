'use strict';


app.controller('AuthCtrl', function($scope, $location, $state, $localStorage, $http, AuthFact, AuthToken){
  console.log('Authctrl')

  $scope.signUp = function(user){
    // debugger;
    AuthFact.signUp(user).then(function(data){
      console.log(data);
      $state.go('login');
    });
  };

  $scope.login = function(user) {
    AuthFact.login(user).success(function(data){
      console.log(data);

      if(data.success){
          AuthFact.getUser().then(function(data){
            console.log(data)
            $scope.user = data.data;
          });
        $state.go('home');

      }else{
        $scope.error = data.message;
      }
    });
    // Auth.login($scope.user).then(function(){
    //   $state.go('home');
    // });
  };

});