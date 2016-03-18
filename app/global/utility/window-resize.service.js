'use strict';

windowResizeService.$inject = ['$window'];
function windowResizeService($window) {
    this.resize = function() {
        var evt = $window.document.createEvent('Event');
        evt.initEvent("resize", true, true);
        $window.document.dispatchEvent(evt);
    };
}

module.exports = windowResizeService;