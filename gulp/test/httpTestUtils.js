var _ = require('lodash');


_.extend(module.exports, {
    buildGetQuery: function (params) {
        return _(params).reduce(function (memo, item, index) {

            memo.push(encodeURIComponent(index) + '=' + encodeURIComponent(item));

            return memo;
        }, ['include=Results']).sort().join('&');
    }
});
