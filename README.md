Angular 1.5 + Webpack + OcLazyLoad starter
====================

Sample client web application based on:

* Angular1.5 as a MVC frontend framework
* Gulp as a task runner, which works in Node.js javascript runtime
* Webpack as a javascript dependency manager and bundling/distribution packager
* Webpack development server

Prerequisites
--------------

To prepare environment before you can do anything:

1. Install Node.js
2. Install node-gyp `npm install -g node-gyp` , which is required to build native binary code in certain modules
3. Install Gulp globally by running `npm install -g gulp`
4. Install required node modules for the project by `npm install` at project folder
5. Run app at localhost:8123 by command `gulp dev` or build app by command `gulp`

**Notes**

* Node-gyp installation have its own prerequisites, which are described here [Node-gyp installation guide](https://github.com/TooTallNate/node-gyp/)

* If stuck, see also [detailed install guide](./README-install-detailed.md)