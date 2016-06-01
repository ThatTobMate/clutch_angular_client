'use strict';

/**
 * @ngdoc function
 * @name sportsAppApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the sportsAppApp
 */
app.controller('UserCtrl', function ($scope, $state, $localStorage, $stateParams, $rootScope, AuthFact, User, News) {
  console.log('UserCtrl');

  AuthFact.getUser($stateParams.userId).then(function(data){
    $scope.user = data;
    $scope.profileForm = $scope.user;
  });

  $scope.updateProfile = function(userData){
    User.updateProfile(userData).then(function(data){
      $localStorage.user = data;
      $scope.user = data;
      $state.go('profile', {userId: data.id});
    })
  }

  News.getNews().then(function(d){
    d.content = d.content.replace("[CDATA[", "").replace("]]", "");
    $scope.news = d;
    debugger;
  })
  
    


  });
