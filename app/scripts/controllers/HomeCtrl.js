'use strict';

/**
 * @ngdoc function
 * @name clutchApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the clutchApp
 */
angular.module('clutchApp')
  .controller('HomeCtrl', function ($scope, $localStorage) {
    $scope.user = $localStorage.user;
  
    $scope.$on('LoggedOut', function(event, mass) {
      console.log(mass)
      $scope.user = mass
    });
  });
