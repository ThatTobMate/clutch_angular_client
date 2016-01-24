'use strict';

/**
 * @ngdoc function
 * @name clutchApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clutchApp
 */
angular.module('clutchApp')
  .controller('MainCtrl', function ($scope, $localStorage) {
    // $scope.$on('SignedInUser', function(event, mass) {
    //   console.log(mass)
    //   $scope.user = mass
    // });
  $scope.user = $localStorage.user;
  });
