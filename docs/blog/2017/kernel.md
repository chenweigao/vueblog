# Linux Kernel Build

<!--more-->

## 1. 预备工作

阿里云开源镜像站下载内核：[阿里云](http://mirrors.aliyun.com/)。下载内核和patch包。

安装必要的软件

``` shell
#安装必要的软件
apt-get install kernel-package build-essential libncurses5-dev fakeroot
#解压缩内核
tar -xzf linux-4.x.x.tar.gz
```

把内核目录linux-4.x.x和补丁patch都复制到/usr/src，然后进入/usr/src

```shell
cp linux-x.x /usr/src -rf
cp patch-x.x /user/src
cd /usr/src
```

## 2. 准备编译

```shell
#复制当前内核的config文件到linux-x.x/下
cp linux-headers-$(uname -r)/.config linux-x.x/
cd linux-x.x/
make menuconfig
```

选择load→OK→Save→OK→EXIT→EXIT的执行顺序。

## 3. 开始编译

```shell
# 编译启动映像，N表示CPU核数，单核为2.双核为4，以此类推
make bzImage -jN
#编译模块
make modules -jN
#安装模块
make modules-install
#安装内核
make install
```

## 4. 更新grub

```shell
# 4.5.0为版本号
mkinitramfs 4.5.0 -o /boot/initrd.img-4.5.0
update-grub2
```

---

## 内核与内核模块

###  内核模块

一般内核模块放置在`lib/modules/$(uname -r)/kernel`当中，包括arch, drivers和net等子文件。

在新建模块的时候，会遇到模块的依赖性问题，在 `lib/modules/$(uname -r/modules.dep)` 文件中存储，这个文件的创建使用 `depmod [-Ane]` 命令：

``` shell
depmod [-Ane]
-A: 查找到新模块再更新该文件
-n: 不写入modules, 但在屏幕上输出
-e: 显示出当前已加载但不可执行的模块名称
```

举例：如果我做好了一个网卡驱动程序，文件名为a.ko，则更新内核模块：

```shell
cp a.ko /lib/modules/$(uname -r )/kernel/drivers/net
depmod
```

### 内核模块的查看

`lsmod`命令可查看已加载的模块，查看内核模块的信息，使用`modinfo`

```shell
modinfo [-adln] [module_name|filename]
-a: 仅列出作者名称
-d: 仅description
-l: 仅列出授权
-n: 列出该模块的详细路径
```

e.g. 列出ath模块的路径：`modinfo -n ath`

### 内核模块的加载与删除

`modprobe`命令可解决依赖性并决定需要加载的模块，优于`insmod`

对于删除模块：

```shell
rmmmod [-fw] module_name
-f: 强势删除，无论是否被使用
-w: 若该模块在使用，则等待该模块使用完后再删除
```

但是通常情况下，不推荐使用`insmod`和`rmmod`命令，万一模块存在依赖属性的问题时，将无法直接加载或删除该模块，所以使用`modprobe`来处理加载模块的问题：

```shell
modprobe [-lcfr] module_name
-r: 删除某个模块
```

### 内核模块的额外参数

