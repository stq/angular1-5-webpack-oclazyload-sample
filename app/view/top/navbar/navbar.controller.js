require('./navbar.less');
var _ = require('underscore');

navbarController.$inject = [ '$rootScope', 'notificationService', '$state', '$scope' ];
function navbarController($rootScope, notificationService, $state, $scope) {

    var self = this;

    self.showNotImplementedNotification = function() {
        notificationService.showNotification('Not implemented yet');
    };

    self.openItem = null;
    self.openNews = function(){
        self.openItem = 'news';
    };
    self.openImport = function(){
        self.openItem = null;
    };

    self.newsActive = function() {
        return $state.includes('news') || self.openItem == 'news';
    };

    self.onGlassClick = function(){
        self.openItem = null;
    };

    $rootScope.$on('$viewContentLoaded', function(){
        self.openItem = null;
    })


    var preventClose = false;
    self.preventClose = function(){ preventClose = true };
    $rootScope.$on('clickanywhere', function(){
        if (self.openItem && !preventClose){
            self.openItem = null;
            $scope.$apply();
        }
        preventClose = false;
    })
}
module.exports = navbarController;
