bottomController.$inject = [];
function bottomController(){
    var self = this;

    this.isExpanded = false;

    this.togglePopup = function() {
        self.isExpanded = !self.isExpanded;
    };
}
module.exports = bottomController;