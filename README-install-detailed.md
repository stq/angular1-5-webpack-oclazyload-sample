## Sample App Client Development Environment Windows x64 installation guide


### 1. Install git

#### 1.1 Download and install git

[https://git-scm.com/download/win](https://git-scm.com/download/win)

Open downloaded file, and keep clicking **Next** until you see an '**Adjusting your PATH environment**' step:

>You can select third option instead of second, it will add to your command line interface a set of Unix commands, and will make you able to run *.sh files (bash shell scripts)

After the adjustements step, keep clicking **Next** keeping all other options by default until installation finished.

#### 1.2 Make sure that git has been installed correctly

Write in the command prompt:

    git --version

#### 1.3 Disable SSL certificate check

Write in the command prompt:

    git config --global http.sslVerify false

*TODO review this step after transfer to TFS*

#### 1.4 Make sure that git has been configured correctly

Write in the command prompt:

    git config --global http.sslVerify

### 2. Install NodeJS

>NodeJs is a javascript engine which can be run as system application, rather than in browser.
Also it's bundled with system javascript API and NPM (Node Package Manager).

#### 2.1 Download and install nodejs with npm

[https://nodejs.org/dist/v5.3.0/node-v5.3.0-x64.msi](https://nodejs.org/dist/v5.3.0/node-v5.3.0-x64.msi)

Download the file, run it, click **Next** until installation is done.
Do not change any preferences, unless you know consequences.

#### 2.2 Make sure that node has been installed correctly

Write in the command prompt:

    node --version

You should see version of the NodeJS.

#### 2.3 Make sure that npm has been installed correctly

Write in the command prompt:

    npm - v

### 3. Install Python 2.7.x

#### 3.1 Download and install Python

[https://www.python.org/ftp/python/2.7.10/python-2.7.10.amd64.msi](https://www.python.org/ftp/python/2.7.10/python-2.7.10.amd64.msi)

#### 3.2 Make sure that Python has been installed correctly

Write in the command prompt:

    python --version

### 4 Install Microsoft Visual Studio Express 2013 for Windows Desktop

>Visual Studio installation is required because it's bundled with Build Tools.
BuildTools are used by some components of application to compile code which
communicates with Windows OS API.

>This instruction does't mean that you need to use Visual Studio as actual
Integrated Development Environment (IDE). Feel free to use any IDE of your choice, for example WebStorm.

>Visual Studio 2015 can't be used, if you have it, uninstall it and install 2013.

#### 4.1 Download and install Microsoft Visual Studio Express 2013 for Windows Desktop

[https://www.microsoft.com/en-gb/download/details.aspx?id=44914](https://www.microsoft.com/en-gb/download/details.aspx?id=44914)

### 5 Install node-gyp

>Node-gyp is nodejs framework used to compile components which use native OS calls.

*TODO Normally this should be done automatically when installing sample app, verify this step again*

#### 5.1 Install node-gyp globally

Write in the command prompt: 

    npm install -g node-gyp
    
#### 5.2 Make sure that node-gyp has been installed correctly

Write in the command prompt: 

    node-gyp -v
     
### 6 Install gulp

>Gulp is tool which does stream and task management and abstracts file system from OS specifics. We use it as a build tool.

*TODO Normally this should be done automatically when installing sample app, verify this step again*

#### 6.1 Install gulp globally

Write in the command prompt: 

    npm install -g gulp ![](./img/33.png)

#### Make sure that gulp has been installed correctly

Write in the command prompt:

    gulp -v


### 7 Clone project

>See [git clone](https://git-scm.com/docs/git-clone)

#### 7.1 Clone project from repository

Write in the command prompt:

    git clone <...>.git

### 7 Install NPM dependencies

>NPM (node package manager) used to keep and synchronise a list of all libraries required for the build process.

#### 8.1 Go to the project folder

Write in the command prompt:

    cd sampleapp

#### 8.2 Install npm dependencies

Write in the command prompt:

    npm install

### 9 Run webpack via gulp

#### 9.1 Go to the project folder

Write in the command prompt:

    cd sampleapp

![Project folder](./img/61.png)

#### 9.2 Run webpack

Write in the command prompt:

    gulp dev

#### 9.3 Verify local server is running

Open in browser [http://localhost:8100/](http://localhost:8100/), make sure application is running

### 10 Create localhost alias

> Localhost alias allows to open site, running at local machine, as site with domain.
Domains are important for site cookies work properly on them.
Cookies are used at site to keep user login information and some other settings.
Without localhost alias site can be accessed only at http://localhost:8100, and cookies will not work.

#### 10.1 Open HOSTS file in notepad

* Run notepad.
* Choose open file.
* Select windows HOSTS file

>Typically windows HOSTS file is located at C:\Windows\System32\drivers\etc.

>In file open dialog choose 'all files' instead of 'txt' files, because HOSTS file have no txt extension

>If you still don't see file make sure you allow display of system and hidden files in Windows Explorer


#### 10.2 Add entry to create an alias to localhost

Type in the notepad new line with content **and save the file**

    127.0.0.1 app.local

>You can use other names but they need to have domain. Example: app.loc, applocal.int

#### 10.3 Verify localhost alias

Open in browser [http://app.local:8100/](http://app.local:8100/), make sure application is running

