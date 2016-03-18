var config = require('app.config');

sessionService.$inject = ['$http', '$q', '$window', '$state', '$location', 'api'];
function sessionService($http, $q, $window, $state, $location, api) {
    var self = this,
        isLoggedIn = false;

    self.user = {};

    self.isLoggedIn = function() {
        return isLoggedIn;
    };

    self.pathLogin = function() {
        var searchQuery = {};

        if (!$location.path().indexOf('/login')) {
            return;
        }

        $window.location.search.replace(/([^?=&]+)(=([^&]*))?/g , function( $0, $1, $2, $3 ){
            searchQuery[ $1 ] = $3;
        });
        self.username = searchQuery.username;
        self.password = searchQuery.password;

        self.login();
    };

    self.stateLogin = function() {
        var params = $state.params || {};
        var redirect = params.redirect;

        self.username = params.username;
        self.password = params.password;

        self.login().then(function() {
            if (typeof redirect === 'string') {
                $location.url(decodeURIComponent(redirect));
                $location.replace();
            } else {
                $state.go('home', null, {
                    location: 'replace',
                    reload: true
                });
            }
        });
    };

    self.login = function() {

        if (!self.username || !self.password) {
            //$state.go('home', null, {
            //    reload: true
            //});
            return $q.defer().reject();
        }

        return api.fake({ username: 'User1' }).then(function(response){
            self.user = response;
            isLoggedIn = true;
        })
    };

    self.getUsername = function() {
        //Remove self.username when login functionality will be completely implemented
        return self.user.username || self.username;
    };

    self.getUserFullName = function() {
        return self.user ? self.user.fullname : '';
    };

    self.getUserId = function() {
        return self.user.userid;
    };

    self.pathLogin();
}

module.exports = sessionService;
