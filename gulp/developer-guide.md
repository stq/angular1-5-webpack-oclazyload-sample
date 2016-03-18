Developer guide
---------------

Developers use local server, which is called 'webpack dev server' to run web application and access it at local PC.

Application is accessed by http://localhost or host alias (see INSTALL_GUIDE for details on host aliased)

List of proxy servers is configured in file proxy-settings.js
In order to change proxy server, edit this file.

However it is still possible to work with local components.
First, the component should be server locally via a simple web server.
A so called http-server will suffice.
Second, a proxy configuration in proxy-settings.js should be updated - it should point to localhost server.

An example for datagrid:
1. In CLI (command line interface) run command `npm install -g http-server`. It does't matter which folder is current.
2. Now run command in datagrid folder `http-server -p 8005`

Alternate solution (without globally installed http-server):
1. Open CLI, set datagrid to current folder.
2. Run npm install http-server
3. Run node  node_modules/http-server/bin/http-server -p 8005

Another alternate solution:
1. Go to datagrid folder
2. Run npm install
3. Run server.bat

Some info important to know:
-port 8005 can be any other unused port
-to use two components together locally, a different ports should be used for second component.