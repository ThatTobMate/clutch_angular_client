'use strict';

/**
 * @ngdoc function
 * @name sportsAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sportsAppApp
 */
app.controller('NavBarCtrl', function ($scope, $state, $localStorage, $rootScope, AuthFact) {
  console.log('NavBarCtrl');
  
  $scope.$on('$stateChangeStart', function(next, current) { 
    console.log('run1')
     AuthFact.getUser().then(function(data){
       $scope.user = data.data;
       $scope.signedIn = true;
     });
   });

  $scope.signedIn = AuthFact.isLoggedIn();

    $scope.logout = function(){
      $scope.user = {};
      $scope.signedIn = false;
      $rootScope.$broadcast('LoggedOut', $scope.user);
      return AuthFact.logout();
    };

    


  });
