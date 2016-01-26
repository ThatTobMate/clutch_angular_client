'use strict';

/**
 * @ngdoc function
 * @name sportsAppApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the sportsAppApp
 */
app.controller('UserCtrl', function ($scope, $state, $localStorage, $rootScope, AuthFact, User) {
  console.log('UserCtrl');

  $scope.user = $localStorage.user;

  $scope.updateProfile = function(){
    User.updateProfile($scope.user.id).then(function(data){
      debugger;
      $localStorage.user = data.data;
      $scope.user = data.data;
    })
  }
  
    


  });
