var _ = require('underscore');

helpService.$inject = ['$state', '$sce', '$rootScope'];
function helpService($state, $sce, $rootScope ) {

    var self = this,
        contextHelp = [];

    self.getHelpUrls = function() {

        var result = null;

        if( contextHelp.length ){
            result = contextHelp[contextHelp.length - 1]
        } else {
            result = $state.$current.data && $state.$current.data.help && $state.$current.data.help || null;
        }

        return _.object(_.map(result, function (value, key) {
            return [ key, value ];//$sce.trustAsResourceUrl(value) ];
        }));
    };

    self.pushContextHelp = function(urls){
        contextHelp.push(urls);
        $rootScope.$emit('helpContextChanged', self.getHelpUrls());
    };

    self.popContextHelp = function(){
        contextHelp.length && contextHelp.pop();
        $rootScope.$emit('helpContextChanged', self.getHelpUrls());
    };

    $rootScope.$on('$viewContentLoaded', function(){
        contextHelp = [];
        $rootScope.$emit('helpContextChanged', self.getHelpUrls());
    })
}

module.exports = helpService;
