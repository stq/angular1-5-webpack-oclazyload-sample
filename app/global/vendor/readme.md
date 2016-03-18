Module description
==================

**Path**

app/global/vendor

**Description**

Module used to connect third-part angular modules into the application.
Those third party modules should be also connected to the vendor bundle in the webpack config for vendor bundle.

>Application does use 2 main bundles: vendor.js, with all third-part scripts, and app.js with all app-specific scripts.
Also there are many lazy-loaded bundles, which are loaded on demand.
Those lazy bundles must be separate angular modules, and physically they are defined as so called
"split point" denoted by require.ensure statement.
Bundle is a bunch of javascript files packed to one big javascript file. Bundles are used to facilitate script loading order and loading speed management.

**Scope**

Global application bundle.

**Futher improvements**

Some vendor modules can be loaded from public CDN networks.