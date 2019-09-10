# Openresty

## Install

[官方安装教程](http://openresty.org/cn/installation.html)

尝试了很多安装方法，自我感觉源码安装比较可靠，操作步骤如下：

1. 下载官方源码安装包：[源码地址](http://openresty.org/cn/download.html)
2. 安装必要的依赖

```bash
apt-get install libpcre3-dev \
    libssl-dev perl make build-essential curl
```

3. 解压并且编译

```bash
tar -xzvf openresty-VERSION.tar.gz
cd openresty-VERSION/
./configure
make
sudo make install
```

## Hello World

安装完成后测试：

```bash
resty -e 'print("hello, world")'
```

