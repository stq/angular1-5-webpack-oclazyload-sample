"use strict";

module.exports = angular.module('app.content.calc-height', [])
    .directive('calcHeight', ['$window', '$rootScope', '$timeout', 'windowResizeService', function ($window, $rootScope, $timeout, windowResizeService) {
        return {
            restrict: 'A',
            link: {
                pre: function ($scope, el) {
                    function calcHeight() {
                        $timeout(function () {
                            var parent = el.parent(),
                                top = el[0].offsetTop,
                                height = parent[0].offsetHeight;

                            // If the parent has a height of 0 then dont change anything.
                            if (parent.offsetHeight === 0)
                                $timeout(calcHeight, 100);
                            // If there is a top then we arent at the top of the screen. Remove anything that our parent had so 
                            // it is just worried about this element
                            if (top > 0 && parent[0].offsetTop < top)
                                top -= parent[0].offsetTop;

                            // Go through all the parents children so we can calculate how tall this element can be to fill the area
                            var childrenHeight = 0;
                            for (var i = 0; i < parent[0].children.length; i++) {
                                var child = parent[0].children[i];
                                // If there is a left/right offset then this element is being positioned left right instead of up/down
                                if (child.offsetLeft > 0 || child.offsetRight > 0)
                                    continue;
                                if (child === el[0]) {
                                    // This will account for any margins that have existed above us. Paddings would be part of the childrenHeight.
                                    if (childrenHeight === 0)
                                        top = 0;
                                    else
                                        top -= childrenHeight;
                                    continue;
                                }

                                childrenHeight += child.offsetHeight;

                            }
                            el.css({ height: (height - top - childrenHeight) + 'px' });
                        }, 10);
                    }

                    calcHeight();
                    $rootScope.$on('$stateChangeSuccess', calcHeight);

                    // Recalc on a window resize.
                    angular.element($window).bind('resize', calcHeight);
                }
            }
        };
    }]);