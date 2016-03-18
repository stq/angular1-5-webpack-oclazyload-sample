Sample App
====================

Sample App client web application is a SPA webapp, which uses

* AngularJS as a MVC frontend framework,
* Gulp as a task runner, which works in Node.js javascript runtime
* Webpack as a javascript dependency manager and bundling/distribution packager
* Webpack development server as itself
* Karma as a test runner
* Jasmine as a unit test framework
* Istanbul as unit tests coverage meter tool
* Protractor as an end-to-end tests framework

Prerequisites
--------------

To prepare environment before you can do anything:

1. Install Node.js
2. Install node-gyp `npm install -g node-gyp` , which is required to build native binary code in certain modules
3. Install Gulp globally by running `npm install -g gulp`
4. Install Bower globally by running `npm install -g bower`
5. Install required node modules for the project by `npm install` at project folder


**Notice**
Node-gyp installation have its own prerequisites, which are described here [Node-gyp installation guide](https://github.com/TooTallNate/node-gyp/)


Developmentive binary code in certain modules
-----------

To start the application in development mode:

1. Run application by command `gulp server-webpack`
2. Visit [http://localhost:8123/](http://localhost:8123/)


Distribution
----------------------

To build distribution:

1. Run command `gulp --production`
2. Site will be built into `build` folder

Use any kind of HTTP web server (Apache server will do) to deploy content of `build` folder.

Tests
-----

1. Unit tests are run by command `gulp unit-test`
2. E2e tests can be started by command `gulp e2e-test` (web server need to be started before)

For more options and test samples please look into [test/README.md](test/README.md)

IDE configuration
-----------------

**Intellij WebStorm or Idea**

*to be done*

**Eclipse**

*to be done*

**MS Visual Studio**

1. Create an ASP.NET Web Application project
2. Press OK and this brings you to the dialog where you choose a template and select the features for your application.
3. Choose the Empty template and uncheck all of the ASP.NET features.
4. Press OK to create the project. You see the project is indeed empty.
5. To start, add a client folder to the root of your project.
6. GruntLauncher:
    Originally a plugin made to launch grunt tasks from inside Visual studio but you can also launch gulp tasks by right clicking on your gulpfile.


Troubleshooting
--------------------------

**Typical issues**

1. Use --debug argument
    Originally a plugin made to launch grunt tasks from inside Visual studio by right-clicking your gruntfile in the solution explorer it has now been extended with new functionality:
        Launch grunt tasks from the solution solution explorer. When right clicking ent to see which files pass through gulp pipeline, i.e. like `gulp zip --debug`
2. Run webpack directly with error log to debug unresolved dependencies: `webpack --display-error-details`
3. Use WebStorm gulp plugin to debug to debug anything on node.js side
4. Use WebStorm karma plugin to debug unit tests and e2e tests

**Recommendations, hints, best practices, etc.:**

* Recommended IDE: Jetbrains WebStorm or IDEA with plugins: Markdown, Karma, Nodejs, Gulp, Git.
* Karma plugin in IDE sometimes don't restart node process. Use `taskkill /F /IM node.exe` before karma run.

**Useful resources:**

[Markdown language cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

Coder guidelines
--------------------

**Folder structure**

**[app]** Angular application folder  
**[assets]** Static resources (images, icons, stub files) folder  
**[gulp]** Gulp-based build infrastructure folder  
**[INSTALL_GUIDE]** Installation guide. TODO: Make it as MD file to make it readable from git web interface  
**[cache]** Optional folder to store cached responses. Used by auto-mock feature which can be used to facilitate work with unresponsive API or faciliate tests.  
**[node_modules]** Nodejs resources are located here (3rd-party libraries for build scripts and frontend scripts)
**[build]** Folder where static version of client is built  
**[dist]** Folder where versioned builds are stored  
*.gitignore* Which folders git should ignore in this folder
*.jshintrc* JS hint settings
*gulpfile.js* Gulp entry point, tells gulp where to locate task definitions.
*index.html* Web application entry page.  
*package.json* Nodejs configuration file. See [spec](https://docs.npmjs.com/files/package.json).  
*README.md* High-level documentation for whole project.
