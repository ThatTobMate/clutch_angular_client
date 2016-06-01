'use strict';

  app.factory('News', ['$window', '$localStorage', '$http', '$q', 'AppSettings', function ($window, $localStorage, $http, $q, AppSettings) {
    
  var newsFactory = {};

  newsFactory.getNews = function(){
    var deferred = $q.defer();
    $http.get(AppSettings.API + '/news/getNews')
      .success(function(data){
        deferred.resolve(data);
      })
      .error(function(){
        deferred.reject("Error");
      });
    return deferred.promise;
  };

  return newsFactory;

}]);