'use strict';
app.factory('Ladder', ['$resource', '$http', function ($resource, $http) {

  var Ladder = {
    // getClans: function(ladderId){
    //   return $http.post('/api/ladders/get_clans', {id:ladderId});
    // }
  };

  return Ladder;
}]);