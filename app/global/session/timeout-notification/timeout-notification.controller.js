
timeoutController.$inject = ['$modalInstance', 'session', '$state'];

function timeoutController($modalInstance, session, $state) {
    this.ok = function() {
        session.login();
        $modalInstance.close(true);
        $state.go($state.$current, null, {
            reload: true
        });
        return false;
    };

    this.close = function() {
        $modalInstance.close(true);
    };
}

module.exports = timeoutController;