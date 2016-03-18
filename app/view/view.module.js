module.exports = angular
    .module('app.view', [
        require('./top/top.module.js').name,
        require('./content/content.module.js').name,
        require('./bottom/bottom.module.js').name,
        require('./modal/modal.module.js').name
    ])
    .component('view', {
        template: require('./view.html')
    });