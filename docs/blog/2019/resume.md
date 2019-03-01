# Resume

## 联系方式

:::tip 姓名：陈惟高

- 电话：13201750172
- Email: [mail@weigao.cc](mailto:mail@weigao.cc)
- QQ/微信：297859260

:::

## 个人信息

- 性别：男
- 学历：工学硕士
- 专业及研究方向：软件工程，智能感知，移动计算与物联网
- 个人博客：[https://www.weigao.cc](https://www.weigao.cc)
- GitHub: [chenweigao](https://github.com/chenweigao)


## 教育背景

2013.09 - 2017.07：

​西安电子科技大学，软件学院，软件工程，本科

2017.09 - 今：

​西安电子科技大学，计算机学院，软件工程，硕士

## 项目经历

### 室内定位系统

**2017.09 - today**:

#### 项目阶段1：基于 Flask 的 web 应用

- [项目 GitHub](https://github.com/chenweigao/smarttrack)
- [项目技术博客 - Flask](https://www.weigao.cc/blog/2017/flask.html), [项目技术博客 - Flask MongoDB](https://www.weigao.cc/blog/2018/database.html#flask-pymongo)

​该项目目的是搭建一个易用的 web 系统，使用 Python **Flask** Web 框架，结合 **JinJa2** 模板引擎配合 Bootstrap 使用，使用 **MongoDB** 作为雷达坐标信息数据存储，使用 SqlLite3存储用户数据，并部署在腾讯云服务器上，使用配置 Python 脚本一键部署(**pipenv**)。数据库的迁移使用 flask_migrate，用户管理使用邮件验证 flask_mail 和 flask_login，使用基于 **OpenCV** 的人脸识别技术作为定位的 ground truth。

#### 项目阶段2：基于 Vue.js 前端框架的前后端分离 web 应用

- [项目演示](118.24.241.17)

- [项目技术博客 - vue.js](https://www.weigao.cc/blog/2018/vue.html)

在一段时间使用以后，发现基于 JinJa2 模板的前端技术存在很多弊端，于是转而使用当下流行的前端框架 **Vue.js** 作为前端，并在 element-vue 的 UI 下进行二次开发，最终实现了单一界面的前端 APP，实现了前后端分离。

后端实现的变化体现为：使用新的 UDP 通信向前端发送雷达坐标数据，避免了在云服务器上的数据库存储读取开销，前端通过 [axios](https://www.weigao.cc/blog/2018/vue.html#axios0) (AJAX) 和 socketio 实现通信，使得地图数据实时刷新，并且舍弃原有臃肿的 Python Flask 后端，使用 nginx 在满足需求的同时，提升了服务器的访问效率，ng 只负责 web 服务的相关功能，而其他的数据处理存储用 Python 或者 C++ 通过不同的进程实现。

#### 项目阶段3： 基于 electron-vue 的本地跨平台客户端

- [项目演示]()(本地项目)

- [项目地址]()

考虑到项目有时候的跨平台和离线的需求，故需要开发本地客户端，使用 **electron-vue** 打包上个版本的项目，并使用和 Vue.js 框架匹配的 element-ui 作为 UI 库，开发出离线的本地客户端，实现了跨平台打包和发布。

---

### CSI 超带宽：基于Linux 内核开发

**2017.10 - 2017.12**: [项目地址](https://github.com/chenweigao/Linux_build)

由于实验室科研需求，基于 Linux 4.9 内核，修改无线模块内核代码，自定义 C++ 驱动，重新编译内核，实现自定义内核功能。

编写内核一键配置脚本，实现自动化内核编译。

使用 deb 将驱动打包成二进制，并基于 GitLab CI 进行自动伞升级版本，二进制包自动安装等功能。

迁移 4.9 内核至最新版本 4.13，diff 内核版本无线模块关键代码改动，并重新编译。

## 开源项目和成果

### Vuepress：个人博客

**2018.02 - Today**：[项目地址](https://github.com/chenweigao/chenweigao.github.io)

个人博客项目，用于记录技术心得和关键技术总结，开发经历三个版本：

1. 使用 Jekyll + GitHub 的静态界面并二次开发 Jekyll 主题。
2. 使用基于 Vue.js 的 Vuepress 博客框架，后端使用 Netify 和 GitHub 保持同步，使用 Letsentrypts 进行 Https 加密，申请使用域名([weigao.cc](https://www.weigao.cc))。[项目地址](https://github.com/chenweigao/vueblog)
3. 基于第2阶段的开发，使用 element-ui 在 Vuepress 上自定义主题，自定义分类、时间管理、留言管理以及界面美化等工作。

### Linux命令行应用汇：Kilo 文本编辑器

练习项目，使用 C/C++ 进行开发，熟悉并强化语言基础知识，实现了类似于 Vim 编辑器的轻量级文本编辑器。[项目地址](https://github.com/chenweigao/LinuxConsoleApp/blob/master/ConsoleApplication4/kilo.c)

主要的功能有：插入、删除、查找、关键词高亮、文件编辑、行列提示等。

### 深度学习：人脸签到系统

**2018.03 - 2018.04**：[技术博客地址-人脸识别](https://www.weigao.cc/blog/2017/face_recognition.html#_1-abstract)

为实验室开发，考勤用。使用 Tensorflow + CNN + OpenCV，实现了人脸的检测、识别，使用 YOLO 算法确保其实时性。

### 微信小程序：睡眠健康

**2018.11 - 2018.11**：[项目地址](https://github.com/chenweigao/wechat_applet)

微信小程序项目，使用微信开发者工具和 vant UI，实现了一个简单的微信小程序，主要包括功能：用户登录，睡眠监测（可监测整天睡眠，包括午休、打盹等情景），总睡眠时长分析，云端睡眠数据同步等功能。

## 论文和专利

### 论文

Indoor Positioning via 24GHz Radio Frequency.

*International Conference on Embedded Wireless Systems and Networks (EWSN). 2019.Beijing*.

### 专利

1. 《一种基于大数据的 Linux 系统下自动构建工具方法》，专利号：1910XD0445
2. 《一种基于时空相似度的无线传感网异常检测方法》，专利号： 108260155A

## 技能清单

以下均为我熟练使用的技能：

- 编程语言：C/C++, Python, JavaScript, HTML
- Linux: Bash Shell, 云平台相关技术
- Web 工具：Vue.js
- 数据库相关：MySQL, MongoDB
- 版本管理：Git
- 开放平台：微信应用开发
- 计算机视觉：OpenCV
- 机器学习：TensorFlow

## 致谢

感谢您花时间阅读我的简历，期待能有机会和您共事。