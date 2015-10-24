'use strict';

/**
 * @ngdoc function
 * @name clutchApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clutchApp
 */
angular.module('clutchApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
