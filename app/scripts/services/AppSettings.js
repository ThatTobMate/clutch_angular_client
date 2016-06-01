'use strict';

app.factory('AppSettings', [function () {
  
  var AppSettings = {};

  AppSettings.API = 'http://localhost:1337';

  return AppSettings;

}]);