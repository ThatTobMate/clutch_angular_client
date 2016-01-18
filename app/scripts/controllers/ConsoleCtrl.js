'use strict';
app.controller('ConsolesCtrl', function ($scope, $rootScope, $routeParams, $http, $resource, Console){
  
 // Console.getConsoles().then(function(data){
 //    $scope.consoles = data.data
 //    console.log($scope.consoles)
 // })

 // Console.currentUser().then(function(data){
 //    console.log(data)
 // })

var api = 'http://localhost:1337'

$http.post(api + '/clan/matches', {id: 1})
      .success(function(data){
        debugger;
        console.log(data);
      });

});


