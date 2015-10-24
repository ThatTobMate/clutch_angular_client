'use strict';
app.factory('Console', ['$resource', '$http', function ($resource, $http) {
    
  
  var Console = {
    // currentUser: function() {
    //   return $http.get('/api/users/the_current_user');
    // },
    // getConsoles: function(){
    //   return $http.get('/api/consoles');
    // }

  };

  return Console;
}]);