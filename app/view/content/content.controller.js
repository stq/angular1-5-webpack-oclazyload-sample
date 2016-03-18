var _ = require('underscore');

contextController.$inject = ['$injector', '$rootScope', '$scope', 'helpService', '$state', '$timeout', '$http'];
function contextController($injector, $rootScope, $scope, helpService, $state, $timeout, $http) {
    var self = this,
        preventClose = false;

    self.helpUrl = null;

    this.items = function(){
        var route = getRoute();
        var rtn = null;

        if( route && route.menu ) {
            rtn = $injector.get(route.menu).items;
        }

        return rtn;
    };

    this.click = function(item){
        if ( item.items && item.items.length ) item.expanded = !item.expanded;
        if( item.state ) item.state.go();
    };

    this.on = false;

    this.toggleHelp = function(){
        self.on = !self.on;

        if ( self.on ) {
            self.helpUrl = null;
            $timeout ( function () {
                self.helpUrl = helpService.getHelpUrls().helpUrl;
            })
        }
    };

    this.setClosePrevention = function(){
        preventClose = true;
    };

    self.isItemVisible = function(item){
        return (function sub(it) {
            return it.state || it.items && it.items.length && _.find(it.items, function (i) {return sub(i);});
        })(item);
    };


    $scope.$on('clickanywhere', function(){
        if (self.on && !preventClose){
            self.on = false;

            $scope.$apply();
        }
        preventClose = false;
    });

    /**
     * Private Methods
     *
     */
    var getRoute = function () {
        return !$state.current.abstract && $state.current.data.route || null;
    };
}


module.exports = contextController;
