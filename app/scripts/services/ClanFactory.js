'use strict';
app.factory('Clan', ['$resource', '$http', function ($resource, $http) {

  var Clan = {
    // getClan: function(clanId){
    //   return $http.get('/api/clans/'+clanId);
    // }
  };

  return Clan;
}]);