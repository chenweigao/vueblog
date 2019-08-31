---
{
  "title": "Resume",
}
---

<Titles title="RESUME"></Titles>

## 陈惟高

:::tip 24 岁 | 男

- 邮箱： [mail@weigao.cc](mailto:mail@weigao.cc)
- GitHub：[https://github.com/chenweigao](https://github.com/chenweigao)
- 个人博客：[https//:www.weigao.cc](https//:www.weigao.cc)
:::

[网页版简历链接 - https://www.weigao.cc/blog/2019/resume.html](https://www.weigao.cc/blog/2019/resume.html)

## 教育背景

**​西安电子科技大学** <Badge text="2013.09 - 2017.07" type="tip"/> 软件学院 软件工程 本科

**​西安电子科技大学** <Badge text="2017.09 - 2020.07" type="tip"/> 计算机学院 软件工程 工学硕士(智能感知，移动计算与物联网)

## 专业技能

- 熟悉 Python
- 熟悉 Git, Vim 等基本操作，熟悉 Visual Studio, VS Code 等开发工具
- 了解 Linux 和 Linux bash shell 基本操作
- 了解 Python Flask 框架和 MongoDB 数据库
- 了解 TCP/IP
- 了解 C, C++, JavaScript, Vue.js等

- 前端：Vue.js
- Web 框架：Flask, Tronado
- 架构思想：微服务架构、规则引擎
- 版本管理：Git
- DevOps：蓝鲸&蓝盾, GitLab CI
- 容器：Docker, K8S
- 服务器：Nginx/OpenResty/Kong
- 异步模型：Celery, Epoll/libevent
- 数据库：Mysql, MongoDB, Redis
- 深度学习：OpenCV, TensorFlow
- 文档构建：Vuepress

## 项目经历

### 室内定位系统 <Badge text="2017.09 - today" type="tip"/>

**核心技术：Python, Flask, Vue.js**

**项目职责：后台开发，前端开发**

项目单位：中国电子科技集团第二十研究所

项目介绍：中电二十所熠星大赛前 5 名创业孵化项目。使用雷达检测人体位置，并跟踪显示每个人的移动轨迹。受室内环境对电磁波传播的影响，雷达定位极易出现误差，​造成目标丢失，系统使用滤波算法对定位坐标进行修正，使用聚类算法区分目标进而构建多目标运动轨迹。使用 web 技术展示轨迹，进行安防、监控等实际应用。

- [项目 GitHub](https://github.com/chenweigao/smarttrack)
- [项目技术博客 - Flask框架](https://www.weigao.cc/blog/2017/flask.html), [项目技术博客 - Flask MongoDB](https://www.weigao.cc/blog/2018/database.html#flask-pymongo), [项目技术博客 - Vue.js](https://www.weigao.cc/blog/2018/vue.html)

个人项目贡献：
使用 Python **Flask** Web 框架，结合 **JinJa2** 模板引擎配合 Bootstrap 使用，使用 **MongoDB** 作为雷达坐标信息数据存储，使用 SqlLite3存储用户数据，并部署在腾讯云服务器上，使用配置 Python 脚本一键部署(**pipenv**)。

第二阶段使用当下流行的前端框架 **Vue.js** 作为前端，并在 element-vue 的 UI 下进行二次开发，最终实现了单一界面的前端 APP，实现了前后端分离。

后端使用新的 UDP 通信向前端发送雷达坐标数据，避免了在云服务器上的数据库存储读取开销，前端通过 [axios](https://www.weigao.cc/blog/2018/vue.html#axios0) (AJAX) 通信，使得地图数据实时刷新，并且舍弃原有臃肿的 Python Flask 后端，使用 nginx 在满足需求的同时，提升了服务器的访问效率，ng 只负责 web 服务的相关功能，而其他的数据处理存储用 Python 或者 C++ 通过不同的进程实现。

考虑到项目有时候的跨平台和离线的需求，故需要开发本地客户端，使用 **electron-vue** 打包上个版本的项目，并使用和 Vue.js 框架匹配的 **element-ui** 作为 UI 库，开发出离线的本地客户端，实现了跨平台打包和发布。

---

### WiFi 人体活动感知 <Badge text="2017.08 - 2017.12" type="tip"/>

核心技术：**Deeplearning, WiFi Sensor**

项目单位：西安电子科技大学 Mobisys 实验室

项目介绍：实验室项目，分析收到人体反射影响的 WiFi 信号， 判断人体的肢体动作。系统使用 Matlab + Python 开发，使用 AlexNet 对数据进行深度学习训练和分类。 用户在 WiFi 路由器和网卡所在的信号范围内执行行走、坐下、起立等动作，系统即可对动作类型进行判别。

- [项目技术博客 - CSI-TOOL](https://www.weigao.cc/blog/2017/csitool.html#_1-1-%E9%A2%84%E5%A4%87%E5%B7%A5%E4%BD%9C)

项目职责：将 802.11 物理层信号进行可视化，选择有效特征作为深度神经网络的输入，经过训练之后分类的模型并加以应用。

---

### CSI 超带宽：基于Linux 内核开发 <Badge text="2017.12 - 2018.04" type="tip"/>

- [项目地址](https://github.com/chenweigao/Linux_build)

核心技术：**C++, Linux Shell, CI**

项目职责：
由于实验室科研需求，基于 Linux 4.9 内核，修改无线模块内核代码，自定义 C++ 驱动，重新编译内核，实现自定义内核功能。编写内核一键配置脚本，实现自动化内核编译。使用 deb 将驱动打包成二进制，并基于 GitLab CI 进行自动伞升级版本，二进制包自动安装等功能。迁移 4.9 内核至最新版本 4.13，diff 内核版本无线模块关键代码改动，并重新编译。

<br />

## 个人开源项目和成果

### 个人博客 <Badge text="2018.02 - Today" type="tip"/>

核心技术：**Jekyll, GitHub Pages, Vuepress, Netify**

项目介绍：

个人博客项目，用于记录技术心得和关键技术总结，开发经历三个版本：

1. 使用 Jekyll + GitHub 的静态界面并二次开发 Jekyll 主题。
2. 使用基于 Vue.js 的 Vuepress 博客框架，后端使用 Netify 和 GitHub 保持同步，使用 Letsentrypts 进行 Https 加密，申请使用域名([weigao.cc](https://www.weigao.cc))。[项目地址](https://github.com/chenweigao/vueblog)
3. 基于第2阶段的开发，使用 element-ui 在 Vuepress 上自定义主题，自定义分类、时间管理、留言管理以及界面美化等工作。

- [项目地址 - Current Version](https://github.com/chenweigao/chenweigao.github.io)
- [项目技术博客-1: Jekyll](http://localhost:8080/blog/2017/jekyll.html#github-pages)
- [项目技术博客-2: Vuepress](http://localhost:8080/blog/2018/vueblog.html)

### Kilo 文本编辑器

核心技术: **C**

项目介绍：使用 C/C++ 进行开发，熟悉并强化语言基础知识，实现了类似于 Vim 编辑器的轻量级文本编辑器。主要的功能有：插入、删除、查找、关键词高亮、文件编辑、行列提示等。

- [项目地址](https://github.com/chenweigao/LinuxConsoleApp/blob/master/ConsoleApplication4/kilo.c)

### 人脸签到系统

核心技术：**CNN, TensorFlow, Python**

项目介绍：为实验室开发，考勤用。使用 Tensorflow + CNN + OpenCV，实现了人脸的检测、识别，使用 YOLO 算法确保其实时性。

- [技术博客地址-人脸识别](https://www.weigao.cc/blog/2017/face_recognition.html#_1-abstract)

### 睡眠健康小程序

核心技术：**JavaScript**

项目介绍：微信小程序项目，使用微信开发者工具和 vant UI，实现了一个简单的微信小程序，主要包括功能：用户登录，睡眠监测（可监测整天睡眠，包括午休、打盹等情景），总睡眠时长分析，云端睡眠数据同步等功能。

- [项目地址](https://github.com/chenweigao/wechat_applet)

## 论文专利以及竞赛等成果

### 论文

**Indoor Positioning via 24GHz Radio Frequency.**
*International Conference on Embedded Wireless Systems and Networks (EWSN). 2019.Beijing*.

### 专利

1. 《一种基于大数据的 Linux 系统下自动构建工具方法》，专利号：1910XD0445
2. 《一种基于时空相似度的无线传感网异常检测方法》，专利号： 108260155A

### 竞赛

#### 第五届全国高校物联网应用创新大赛 <Badge text="2017.12 - 2018.04" type="tip"/>

比赛结果：入选决赛，西北赛区前 22 名内

项目介绍：参赛项目为已开发完成的多目标室内定位系统，在实际环境中进行部署，因正值十九大召开迎来大批参观者，收集了大量测试数据和用户反馈意见。

项目职责：本人担任主要开发者，协助收集用户数据并不断改进系统。根据用户需求设计应用场景，整理出商业化运营模式。

#### 2018年 “创业大西安” 创业大赛 <Badge text="2018.08 - 2018.09" type="tip"/>

比赛结果：入选决赛，团队组优秀奖

项目介绍：参赛项目为**高精度多目标定位与追踪系统**，荣获2018年 “创业大西安” 创业大赛暨一带一路阿里巴巴诸神之战全球创客大赛（西安决赛）优秀奖（团队组）

### 其他

- CET6: 455
- 二等学业奖学金
- 参加ACM TURC 2018 图灵中国大会，并担任宣传志愿者，获得志愿者证书