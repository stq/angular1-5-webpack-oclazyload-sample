require('./home.less');

homeController.$inject = ['session'];
function homeController(session) {

    this.getUserFullName = function() {
        return session.getUserFullName();
    };

}

module.exports = homeController;