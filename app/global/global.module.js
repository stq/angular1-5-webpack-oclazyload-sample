require('./global.less');

module.exports = angular
    .module('app.global', [
        require('./notification/notification.module.js').name,
        require('./session/session.module.js').name,
        require('./vendor/vendor.module.js').name
    ])
    .factory('State', require('./state.factory.js'))
    .service('api', require('./api.service.js'));