var _ = require('underscore');

breadcrumbController.$inject = ['$state','constants'];

function breadcrumbController($state, constants) {

    this.getPath = function() {
        var uiStatePath = getPath();

        if (uiStatePath[0] === "")
            uiStatePath = uiStatePath.slice(1, uiStatePath.length);

        // We should have a list of UI state path elements now.
        // For each one, use it as a key, to get the human readable text that we should display for it,
        uiStatePath = _.map(uiStatePath, function(pathElement) {
            var key = pathElement.replace(/\./g, '_').replace(/-/g, '_').toUpperCase();
            var rtn = constants[key+'_BC'];
            rtn = !rtn ? pathElement : rtn;
            return rtn;
        });

        return uiStatePath;
    };

    /**
     * Private Methods
     *
     */
    var getPath = function () {
        return Object.keys($state.$current.includes);
    };
}

module.exports = breadcrumbController;
