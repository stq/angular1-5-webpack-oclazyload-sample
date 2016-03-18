require('./quicksearch.less');

var config = require('app.config'),
    _ = require('underscore');

searchController.$inject = ['$state', '$scope', 'api'];

function searchController($state, $scope, api) {
    var self = this,
        preventLookHead = false;

    this.preventClose = false;
    this.expanded = false;
    this.disabled = false;

    this.onKeyUp = onKeyUp;
    this.onKeyDown = onKeyDown;
    this.onMouseOver = onMouseOver;
    this.onMouseLeave = onMouseLeave;
    this.queryClear = queryClear;
    this.reset = reset;
    this.search = search;

    (function init(self) {
        self.reset();

        $scope.$on('clickanywhere',  function (){
            if (self.expanded && !self.preventClose){
                self.expanded = false;
                $scope.$apply();
            }
            self.preventClose = false;
        });
    })(self);

    function onKeyUp (e) {
        var query = self.form.query.trim(),
            activeLookHead;

        if(e.keyCode == '13') {
            e.preventDefault();
            self.search();
        } else if(e.keyCode !== 38 && e.keyCode !== 40 && (self.form.operator === 'startswith' || self.form.operator === 'equals') && self.form.stripped && query.length > 2) {
        } else if (query.length <= 2) {
        }
    }

    function onKeyDown(e) {
        if(e.keyCode == '9') {
        } else if (e.keyCode === 40) {
            e.preventDefault();
        } else if(e.keyCode === 38) {
            e.preventDefault();
        }
    }

    function onMouseOver(lookhead) {
    }

    function onMouseLeave() {
    }

    function reset() {
        self.form = {
            query: '',
            operators: {
                and: {
                    text: 'AND'
                },
                or: {
                    text: 'OR'
                }
            },
            operator: 'and'
        };
    }

    function queryClear() {
        self.form.query = null;
    }

    function search() {
        if (self.form.query ) {
            self.expanded = false;
            $state.go('search.results', {
                query: self.form.query,
                operator: self.form.operator
            });
        }
    }

}

module.exports = searchController;
