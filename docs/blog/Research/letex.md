# LaTeX

本文主要总结 LaTeX 的安装配置和一些使用方法。

<!-- more -->

## Tools and Enviroment Installation

### Tex Tools

- 西安电子科技大学毕业论文 LaTex 模板，[链接](https://gr.xidian.edu.cn/info/1047/5087.htm)

- 下载 windows 客户端，[链接-ctex-tsinghua](https://mirrors.tuna.tsinghua.edu.cn/ctex/legacy/2.9/), 需要注意的是 ctex 不是很好用，在实验室老师的建议下，使用 texlive + vscode 的方式

- 下载 TexLive 安装包，[TexLive 官方网站](http://tug.org/texlive/)

### Install TexLive of Windows

考虑到在官网下载可能会速度比较慢，所以使用清华的软件源下载，地址为[https://mirrors.tuna.tsinghua.edu.cn/CTAN/systems/texlive/Images/](https://mirrors.tuna.tsinghua.edu.cn/CTAN/systems/texlive/Images/)

选择一个版本下载完成后，打开其中的 `install-tl-advanced.bat` 文件，然后等待安装完成。

安装完成后在 cmd 中输入 `tex -version`, 出现版本号则安装成功。

### Install TeXStdio

由于官方的下载地址可能需要翻墙，所以使用第三方的地址进行下载：

[下载地址](https://sourceforge.net/projects/texstudio/files/latest/download)

`Options—> Configure Texstudio —> General—> Language—> zh_CN` 设置中文。

## LaTex File Struct

LaTex 通过 `.cls` 和 `.sty` 来控制样式，类似于网页中的 css 一样，再经过 Tex 引擎渲染成 PDF。

LaTex 有宏包的概念，引入方式为 `\usepackage{foo}`, 可以类比于 C 中的 `#include`。

对于 LaTex 中的常见类型总结如下：

| LaTeX模板常见文件类型 | 功能简要介绍                                             |
| --------------------- | -------------------------------------------------------- |
| .dtx                  | Documented LaTeX sources，宏包重要部分                   |
| .ins                  | installation，控制 TeX 从 .dtx 文件里释放宏包文件        |
| .cfg                  | config， 配置文件，可由上面两个文件生成                  |
| .sty                  | style files，使用\usepackage{…}命令进行加载              |
| .cls                  | classes files，类文件，使用\documentclass{…}命令进行加载 |
| .aux                  | auxiliary， 辅助文件，不影响正常使用                     |
| .bst                  | BibTeX style file，用来控制参考文献样式                  |

------------------------------------------------
具体可以参考这里：
本文为CSDN博主「Mikchy」的原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接及本声明。
原文链接：[https://blog.csdn.net/Mikchy/article/details/94448707](https://blog.csdn.net/Mikchy/article/details/94448707)


## Hello World of Ctex