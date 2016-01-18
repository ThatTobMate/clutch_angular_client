'use strict';

/**
 * @ngdoc function
 * @name sportsAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sportsAppApp
 */
app.controller('NavBarCtrl', function ($scope, $state, $localStorage, $mdSidenav, $mdComponentRegistry, AuthFact) {
  console.log('NavBarCtrl');

  $scope.toggleSidenav = toggleSidenav;

  // $scope.closeNav = function(){
  //   console.log('clicked')

  //   $mdSidenav(name).toggle();
  // }

  function toggleSidenav(name) {
      console.log('clicked')
      // $mdComponentRegistry.when(name).then(function(leftSidenav){
      //   leftSidenav.close();
      // });
      $mdSidenav(name).toggle();
    }

  // $scope.toggleSidenav('left');

  
  $scope.$on('$stateChangeStart', function(next, current) { 
    console.log('run1')
     AuthFact.getUser().then(function(data){
       $scope.user = data.data;
       $scope.signedIn = true;
     });
   });

  $scope.signedIn = AuthFact.isLoggedIn();

    $scope.logout = function(){
      return AuthFact.logout();
    };

    


  });
