'use strict';
app.factory('Console', ['$resource', '$http', function ($resource, $http) {
    
  
  var ConsoleApi = {};
  var api = 'http://localhost:1337'

  ConsoleApi.getConsoles = function(){
    return $http.get(api + '/console')
      .success(function(data){
        return data;
      });
  }


  return ConsoleApi;
}]);