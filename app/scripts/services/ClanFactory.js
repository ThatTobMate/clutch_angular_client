'use strict';
app.factory('Clan', ['$resource', '$http', '$q', function ($resource, $http, $q) {

  var Clan = {
    // getClan: function(clanId){
    //   return $http.get('/api/clans/'+clanId);
    // }
  };

  return Clan;
}]);