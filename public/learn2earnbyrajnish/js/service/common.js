angular.module('learn2earn')
.factory('headerIntercepter', ['$q', function($q) {
        var sessionInjector = {
            request: function(config) {
                $('#loading').css({'display':'block'})                
                return config;
            },
          
            // optional method
            'response': function(response) {
              // do something on success
              $('#loading').css({'display':'none'});
              return response;
            },
          
             // optional method
             'responseError': function(rejection) {
                // do something on error
                $('#loading').css({'display':'none'});
                return $q.reject(rejection);
              }
        };
        return sessionInjector;
}]);