'use strict';

/**
 * @ngdoc function
 * @name sportsAppApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the sportsAppApp
 */
app.controller('NewsCtrl', function ($scope, $state, $localStorage, $stateParams, $rootScope, AuthFact, User, News) {
  console.log('NewsCtrl');

  News.getNews().then(function(d){
    d.content = d.content.replace("[CDATA[", "").replace("]]", "");
    $scope.news = d;
    // debugger;
  })
  
    


  });
