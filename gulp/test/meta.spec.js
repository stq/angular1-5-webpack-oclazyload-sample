describe('Validate test environment', function() {
    it('tests jasmine version', function() {
        expect(jasmine.version || jasmine.getEnv().versionString && jasmine.getEnv().versionString()).toBe('2.3.4');
    });
});
