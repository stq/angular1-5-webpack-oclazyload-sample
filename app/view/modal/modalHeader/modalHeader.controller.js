modalHeaderController.$inject = [];
function modalHeaderController() {
    var self = this;

    self.hasClose = function(ctrl) {
        if (!ctrl || !ctrl.close)
            return false;
        else
            return true;
    };
}

module.exports = modalHeaderController;