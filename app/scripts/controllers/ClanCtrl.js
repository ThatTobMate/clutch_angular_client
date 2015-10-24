'use strict';
app.controller('ClansCtrl', function ($scope, $rootScope, $routeParams, $http, $resource, $location, Clan){

  $scope.url = $location.url();
  $scope.clanId = $routeParams.clanId


 // Clan.getClan($scope.clanId).then(function(data){
 //    $scope.clan = data.data
 //    console.log($scope.clan)
 // })

});


