# 2018/work log

<DateComponent/>

## July

[Jul 17](https://www.weigao.cc/blog/2018/07/19/facerecog.html)  Darknet, YOLO, write the patent, new version.

[Jul 18](https://www.weigao.cc/blog/2018/07/25/flask.html) Flask web development, with Visual Studio

[Jul 23](https://github.com/chenweigao/smarttrack.git)  Flask video stream

[Jul 24](https://www.weigao.cc/blog/2018/07/25/flask.html)  Flask database: MongoDB

[Jul 25]()  Flask unit test; meeting about Flask site develop

[Jul 26](https://www.weigao.cc/blog/2017/11/13/csitool.html) visit NLP team; rebuild CSI tool(**ERROR** in `log_to_file`); modify [`one_key_install.sh`](https://www.weigao.cc/blog/2018/03/31/shell#4-sed)

[Jul 27](https://www.weigao.cc/blog/2018/07/25/flask.html#rendering-templates) Flask 404 page, rendering templates

[Jul 28]() test bootstrap: how to import flask from `flask_bootstrap` and use it in `extends`; Flask struct, **FAILED** and checkout all code(sad..); path import problem

[Jul 29](https://www.weigao.cc/blog/2018/07/25/flask.html#flask_bootstrap) add new branch `bootstrap_test` and **SUCCESS** [import](https://www.weigao.cc/blog/2018/07/25/flask.html#flask_bootstrap)

[Jul 30](https://www.weigao.cc/blog/2018/07/25/flask.html#flask_bootstrap) add new function into `bootstrap_test` branch; initialize the app by flask extend; `Flask-Moment` to show time format

## August

[Aug  01]() Flask MongoDB initialization

[Aug  02](https://www.weigao.cc/blog/2018/07/25/flask.html#blueprint) solved path problem in Flask; Login [v1.0](#) with `wtforms`; new Struct  [v2.0](#); [blueprint](https://www.weigao.cc/blog/2018/07/25/flask.html#blueprint)

[Aug  03]() `@property` in Python; login in terminal

[Aug 22](http://www.runoob.com/sqlite/sqlite-tutorial.html) `@mian.route()` usage; SQLite

[Aug 23]() switches by Flask Forms

[Aug 30]() Flask PyMongo, bootstrap CSS, CDN, Jinja block

[Aug 31](https://www.weigao.cc/blog/2018/08/31/charts.html) Charts, JavaScript used in Flask

## September

[Sep 01]() `Charts.js`, npm

[Sep 05]() responsive charts

[Sep 06]() solved problem, `kramdown` problem, fix bug highlight problem in Jekyll, with [highlight.js](https://highlightjs.org/)

[Sep 11](https://flask-socketio.readthedocs.io/en/latest/) Flask-SocketIO

[Sep 12]() rebuild struct, add the extra servers for socket server

[Sep 13]() CSS `!important` usage

[Sep 14]() [Vundle.vim](https://github.com/VundleVim/Vundle.vim),plugin: [YCM](https://github.com/Valloric/YouCompleteMe)

[Sep 15]() Mongo DB restore, rebuild Flask site, implemented web camera

[Sep 18]() Dashboard, the new version of frontend

[Sep 19]() Start `vue.js`, `vuepress` docs

[Sep 24]() Update `README.md` make the site easy to deploy for non-professionals

[Sep 25]() Deploy the site in Aliyun, let the site available via [IP address: 120.78.71.220](120.78.71.220)(unused), new Tencent server IP is [118.24.241.17](118.24.241.17)

[Sep 26]() Debug the site, delete unused files, Jinja2 will not be used in the future

[Sep 27]() Use Vue.js rebuild site’s frontend, start `Vue Cli3`, make the backend and frontend separated

[Sep 28]() Deploy the radar device, apply for custom domain, server migration

## October

[Oct 10]() Create a qqbot

[Oct 11]() Vuex and components

[Oct 12]() Write some components in vuepress

[Oct 15]() Vue `v-on` and `v-model`

[Oct 16]() Vue `dev-tools`, custom directives `.focus()` and `keyup.enter`

[Oct 18]() Vue animation, custom css using `Animate.css`

[Oct 19]() Vue todo app, make some css beautiful

[Oct 22]() Use the `vue-element-admin`, build vuepress site with new function: `Discuss` by `Valine`

[Oct 23]() Use `element UI` to build a table(data from radar project by axios), make the table adjustable and read data by `props`

[Oct 24]() `Element UI` date component: add a new function date choose, vue-router, import element ui in `enhanceApp.js`

[Oct 25]() Add a new table attribution: **angle**, and make the project home dashboard more professional; add new map using `<iframe>`; tool: **Studio 3T for MongoDB**

[Oct 26]() MongoDb database’s CRUD

[Oct 29]() Vue-router: query, params, children

## November

[Nov 01]() basic webpack

[Nov 02]() basic css

[Nov 05](https://docs.microsoft.com/en-us/windows/desktop/procthread/creating-processes) new site header: Books, different between *Process* and *Thread*

[Nov 06]() String problem solved(1/2)

[Nov 07]() Vector and extral string konwledge(2/2), iterator

[Nov 08]() Iterator usage, sequential containers

[Nov 12](https://github.com/eliben/code-for-blog/blob/master/2017/async-socket-server/sequential-server.c) Sample markdown editor, c++ sequential-server

[Nov 13](https://github.com/chenweigao/LinuxConsoleApp/blob/master/ConsoleApplication4/kilo.c) A custom editor build with c. **phase 1**, init the project with VS, remote debug in subsystem, config the `sshd_config` allows the password authentication in `/etc/ssh`; Custom editor mode: *raw mode*; Using `sys/ioctl.h` to get the window size.

[Nov 14](https://github.com/snaptoken/kilo-src/blob/home-end-simple/kilo.c) Editor key press, editorKey including 'WASD' and 'PAGEUP' 'PAGEDOWN'.

[Nov 18]() New function: scorll

[Nov 19](https://github.com/chenweigao/LinuxConsoleApp/commit/70f8034c0da2ca60dbc5748281dac9638d0a0c93) add render tab, add empty inverted color black status bar, add message bar, learn: variadic function

[Nov 20]() New function: insert chars and prevent inserting special characters; dirty flag for modified file, and quit confirmation.

[Nov 21]() Fix bug: backspace invalid error, backsapcing at the start of a line.

[Nov 22]() finish the text editor basic functions.

[Nov 26]() book reading, [git tag](https://www.weigao.cc/blog/tool/git.html#tag)

[Nov 27]() update the new version and format the time using moment, add a function: marquee

[Nov 28]() moment in js

## December

[Dec 03]() fix bug in vuepress; search function in kilo editor; fix bug: [time local error](https://stackoverflow.com/questions/17493309/how-do-i-change-the-language-of-moment-js): `lang: zh-ch`

[Dec 04]() update blog, add new label: project, and move python lable to code

[Dec 05]() [Emailjs](https://www.emailjs.com/)

[Dec 10]() VPS and BOOK: c++ primer # 2

[Dec 12]() map, unordered map, some cpp functions