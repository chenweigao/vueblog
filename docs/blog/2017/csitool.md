# <Badge text="Research" type="tip"/> CSI Tool


These instructions are currently expected to work on Linux operating systems that are based on an upstream Linux kernel version between 3.2 (e.g. Ubuntu 12.04) and 4.2 (e.g. Ubuntu 14.04.4).
The IWL5300 provides 802.11n channel state information in a format that reports the channel matrices for 30 subcarrier groups, which is about one group for every 2 subcarriers at 20 MHz or one in 4 at 40 MHz. Each channel matrix entry is a complex number, with signed 8-bit resolution each for the real and imaginary parts. It specifies the gain and phase of the signal path between a single transmit-receive antenna pair.


## 1.1 预备工作

**硬件环境:**

1. intel 5300网卡（笔记本为mini-pcie接口，半高网卡、台式机为pcie接口，全高网卡）
2. 无线路由器，一般为市面上常见的商用路由器即可，不设置wifi密码

**软件环境**

软件环境的配置较为困难，一有不慎可能会前功尽弃，不要气馁，多尝试几次也是自身提升的过程！
软件要求：
 - Ubuntu >= 12.04LTS 操作系统镜像
 - csi-tool.tar文件
    (PS：这两个文件我已经上传到百度云，[csi-tool.tar](http://pan.baidu.com/s/1dEZ9zSt "csi-tool.tar")和[Ubuntu-12.04-Desktop](http://pan.baidu.com/s/1qY6wZN2 "Ubuntu-12.04-Desktop"))


## 1.2 配置CSI-Tool

**注意：系统安装完成后，查看一下内核信息，是否为：`Linux Version 3.2.0.84-generic-pae`，然后进行下一步**

可以参考官方文档：[Linux 802.11n CSI Tool](http://dhalperi.github.io/linux-80211n-csitool/installation.html "Linux 802.11n CSI Tool")

为了提高下载速度，首先需要**更换软件源**。进入Ubuntu桌面系统，CTRL++ALT+T打开命令行，在命令行输入：

`sudo vi /etc/apt/source.list`

将里面所有的内容替换成搜狐的软件源，具体可以参考[apt-source](https://www.weigao.cc/blog/2017/01/02/aptsource.html)上面说的。
接下来：
```bash
sudo apt-get install gcc make linux-headers-$(uname -r) git-core
#这一步是安装csitool所需要的一些依赖

sudo apt-get install iw
echo iface wlan0 inet manual | sudo tee -a /etc/network/interfaces
sudo restart network-manager
#依次执行这三步

echo blacklist iwldvm | sudo tee -a /etc/modprobe.d/csitool.conf
echo blacklist iwlwifi | sudo tee -a /etc/modprobe.d/csitool.conf
#这两步是为了电脑在开机的时候不启动无线，不然有可能导致电脑无法正常开机
```
接下来找到我们之前下载好的csi-tool.tar文件，解压：

`tar -xvf csi-tool.tar`

得到zip文件，校验一下：

`MD5 (csi-tool.zip) = 9390f2d1a38d7e0cbd2d8115ea6dc05b`

然后继续解压得到的zip文件：

`unzip csi-tool.zip`

解压以后：
```bash
#首先用cd命令进入到linux-80211n-csitool文件目录下
cd linux-80211n-csitool

#对于特殊版本的内核：
#CSITOOL_KERNEL_TAG=csitool-$(uname -r | cut -d . -f 1-2)

#接下来编译
make -C /lib/modules/$(uname -r)/build M=$(pwd)/drivers/net/wireless/iwlwifi modules
sudo make -C /lib/modules/$(uname -r)/build M=$(pwd)/drivers/net/wireless/iwlwifi INSTALL_MOD_DIR=updates \
    modules_install
sudo depmod
cd ..
```
完成之后，会看到提示 *Can't read private key* 的提示，可以进行下一步：
在 supplyment 文件夹外面执行：
```bash
for file in /lib/firmware/iwlwifi-5000-*.ucode; do sudo mv $file $file.orig; done
sudo cp linux-80211n-csitool-supplementary/firmware/iwlwifi-5000-2.ucode.sigcomm2010 /lib/firmware/
sudo ln -s iwlwifi-5000-2.ucode.sigcomm2010 /lib/firmware/iwlwifi-5000-2.ucode
make -C linux-80211n-csitool-supplementary/netlink
```
执行完以后基本上就完成了，接下来是测试步骤：
```bash
sudo modprobe -r iwlwifi mac80211
#如果提示 "FATAL: Module iwlwifi is in use." ，执行下一步
sudo modprobe -r iwldvm iwlwifi mac80211

#接下来reload
sudo modprobe iwlwifi connector_log=0x1
sudo linux-80211n-csitool-supplementary/netlink/log_to_file csi.dat
```
