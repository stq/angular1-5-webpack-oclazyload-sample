A guide to unit tests and e2e tests
===================================

Unit test definition
--------------------

* it is blueprint, a specification, a technical documentation for the component. 
* unit test for component coded in file componnent.js should be named component.spec.js and be placed in same folder
* most important unit tests are angular controller and service unit tests
* run by karma test runner
* written with jasmine test framework


E2e test definition
------------------

* tests end user experience
* tests component integration (i.e. integration testing is submerged into e2e tests)
* each test tests a separate user case
* run by protractor runner
* written with jasmine test framework


Running tests
-------------

1. Install all application prerequisites, as described in [main readme](../../README.md)

2. To run unit tests, run `gulp unit-test`

3. To run e2e tests run tests `e2e-test` (web server need to be started before)

Troubleshooting
---------------

* If an error occurs on running e2e test, make sure you've installed Protractor by checking its version with command `protractor --version`


Writing e2e test
----------------

1) Create new *.e2etest.js file in `./test/e2e` folder

2) Add created file path to `./test/e2e/protractor.conf.js` (section `specs`) [todo: Ask Mykolay if we really need it]

3) Write your test code to created file

**Example file: `./test/integration/search-form.e2etest.js`**


Writing unit test
-----------------

1) Create `[component's_file_name].spec.js` at same folder as tested component

2) Write your test code to created file

