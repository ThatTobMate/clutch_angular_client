'use strict';

/**
 * @ngdoc function
 * @name sportsAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sportsAppApp
 */
app.controller('NavBarCtrl', function ($scope, $localStorage, AuthFact) {

    AuthFact.getUser().then(function(data){
      $scope.user = data;
    });

    $scope.signedIn = AuthFact.isLoggedIn();

    // $scope.logout = AuthFact.logout();


  });
