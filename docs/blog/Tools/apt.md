# Source

## apt source

Source:[USTC](http://mirrors.ustc.edu.cn/)

```bash
sudo vim /etc/apt/source.list
```

or use the command:

```bash
sudo sed -i 's/archive.ubuntu.com/mirrors.ustc.edu.cn/g' /etc/apt/sources.list
```

For Kali Linux:

```bash
deb https://mirrors.ustc.edu.cn/kali kali-rolling main non-free contrib
deb-src https://mirrors.ustc.edu.cn/kali kali-rolling main non-free contrib
```

For more information [USTC Open Source](http://mirrors.ustc.edu.cn/)

Finally:

`sudo apt-get update`

## pip source

```bash
pip install pythonModuleName -i https://pypi.douban.com/simple
```

永久指定 pip source:

- windows: 在 c:/windows/user/your-name/pip/ 下，新建文件 `pip.ini`:

```txt
[global]
trusted-host=mirrors.tools.huawei.com
index-url=http://mirrors.tools.huawei.com/pypi/simple/
```

如果找不到这个文件夹，就新建一个。

在有些 winodws 电脑中，可能不是这个文件夹，那么快速找到这个文件夹的方法是：在 windows 的资源管理器中输入 `%APPDATA%`, 会跳转到一个文件夹下，然后在这个文件夹下面新建 pip 文件夹，然后新建 `pip.ini` 文件，输入一下内容：

```txt
[global]
timeout = 6000
index-url = https://pypi.douban.com/simple
trusted-host = pypi.douban.com
```

- linux: 在 ~/.pip/ 下创建 `pip.conf`:

```conf
[global] 
trusted-host=mirrors.tools.huawei.com
index-url=http://mirrors.tools.huawei.com/pypi/simple/ 
```

## gem source

[gem source](https://ruby.taobao.org/):

```bash
$ gem sources --add https://gems.ruby-china.org/ --remove https://rubygems.org/
$ gem sources -l
*** CURRENT SOURCES ***

https://gems.ruby-china.org
# 请确保只有 gems.ruby-china.org
```
