module.exports = function () {
    return {
        restrict: 'E',
        link: function($scope, el) {
            var element = el.parent()[0];

            el.on('mousewheel', function(e) {
                e.preventDefault();
                element.scrollTop -= e.wheelDelta;
            });

            el.on('keydown', function(e) {
                if (e.keyCode === 40) {
                    e.preventDefault();
                    element.scrollTop += 40;
                } else if (e.keyCode === 38) {
                    e.preventDefault();
                    element.scrollTop -= 40;
                }
            })
        }
    };
};