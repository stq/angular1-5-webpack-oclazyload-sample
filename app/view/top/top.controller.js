topController.$inject = [ 'session' ];
function topController(session){

    this.getUserFullName = function() {
        return session.getUserFullName();
    };
}

module.exports = topController;