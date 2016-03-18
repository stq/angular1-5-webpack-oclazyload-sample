require('./modal.less');

var _ = require('underscore');

module.exports = angular.module('app.view.modal', [
        require('./modalHeader/modalHeader.module.js').name
    ])
    .config(function($provide) {
        $provide.decorator('$modal', [ '$delegate', '$rootScope', function($delegate, $rootScope) {

            var modalInstance,
                defaultOptions = {
                    backdrop: 'static',
                    controllerAs: 'ctrl',
                    bindToController: true
                };

            var open = $delegate.open;
            $delegate.open = function(options) {
                options = _.extend({}, defaultOptions, options);
                if( options.resolve ) {
                    options.resolve = _.object(_.map(options.resolve, function (val, key) {
                        return [
                            key, _.isFunction(val) ? val : function() {
                                return val;
                            }
                        ];
                    }));
                }

                modalInstance = open(options);
                return modalInstance;
            };

            $rootScope.$on('$stateChangeStart', function(event, newState, newParams, oldState) {
                if (~newState.name.indexOf(oldState.name)) return;
                modalInstance && modalInstance.dismiss('The state has been changed.');
            });

            return $delegate;
        }]);
    });
