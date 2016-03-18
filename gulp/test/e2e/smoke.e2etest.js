var baseUrl = 'http://app.local:8123/';

describe('Application states', function() {

    it('Loads home state', function(){
        browser.get(baseUrl + '#/home');
        browser.waitForAngular();
    });

});
