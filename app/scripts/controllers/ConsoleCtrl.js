'use strict';
app.controller('ConsolesCtrl', function ($scope, $rootScope, $stateParams, $http, $resource, Console){
  
 Console.getConsoles().then(function(data){
    $scope.consoles = data;
 });


});


