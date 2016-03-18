var _ = require('underscore');

StateFactory.$inject = ['$state'];
function StateFactory($state) {
    return function(name, options){
        var self = this;
        self.name = name;
        self.options = options || {};
        self.equals = function(state){
            return state.href() == self.href();
        };
        self.href = function(){
            return '#' + $state.href(self.name, self.options);
        };
        self.isCurrent = function(){
            return $state.is(self.name, self.options);
        };
        self.go = function(reload){
            $state.go(self.name, self.options, { reload: reload });
        }
    }
}

module.exports = StateFactory;
