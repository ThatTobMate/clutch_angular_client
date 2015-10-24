app.config(function($httpProvider) {
    $httpProvider.interceptors.push(function($localStorage, AuthToken) {
      var token = AuthToken.getToken();
      return {
        'request': function(config) {
            config.headers['x-access-token'] = token;
          return config;
        }
      };
    });
  });