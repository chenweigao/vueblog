
# VPS and Shadowsocks


## 1. 配置shadowsocks客户端

[GitHub of shadowsocks](https://github.com/shadowsocks/shadowsocks/tree/master)

```bash
yum -y install epel-release
yum -y install python-pip
pip install shadowsocks

#查看系统 
cat /etc/redhat-release
#查看内核
cat  /proc/version
uname -r
vi /etc/shadowsocks.json
{
    "server":"0.0.0.0",
    "server_port":8388,
    "local_port":1080,
    "password":"chen852gao",
    "timeout":600,
    "method":"aes-256-cfb"
}
#启动ss服务
ssserver -c /etc/shadowsocks.json -d start
```

## 2. 配置91云一键加速工具

在[91云](https://www.91yun.co/serverspeeder91yun "91云") 上面下载加速工具

chrome上的插件Proxy SwitchyOmega使用方法为：

- 从GitHub下载该插件，进入到google chrome的插件中心

- 配置Proxy

  - protocol : SOCKS5
  - server: 127.0.0.1
  - Port: 1080

- 配置Auto Switch

  - Rule List rule 的Profile 填 proxy

  - Default 的Profile 填[Direct]

  - Rule List Format选择Autoproxy

  - Rule List URL填写：

    ```html
    https://raw.githubusercontent.com/gfwlist/gfwlist/master/gfwlist.txt
    ```

  - 保存apply changes即可

## 3. kcptun 加速工具

- 安装并配置服务端

  [kcptun GitHub](https://github.com/kuoruan/shell-scripts)

  ```bash
  #查找shadowsocks端口，将8388替换为ss端口
  netstat -nl | grep 8388
  ss -nl | grep 8388
  ```

  参考[教程](https://blog.kuoruan.com/110.html)

  ```bash
  #使用脚本一键安装
  wget --no-check-certificate https://github.com/kuoruan/shell-scripts/raw/master/kcptun/kcptun.sh
  chmod +x ./kcptun.sh
  ./kcptun.sh
  ```

  进入配置界面，按照步骤进行，需要注意到 *需要加速的端口* 为shadowsocks的端口，本例中为8388

- 安装客户端

  首先下载一个启动Kcptun的工具，注意到这只是用来启动 Kcptun 的工具，而不是 Kcptun 客户端。[启动工具下载地址](https://github.com/dfdragon/kcptun_gclient/releases)

  注意要下载服务端对应的Keptun，[客户端下载地址](https://github.com/dfdragon/kcptun_gclient/releases)

- 配置客户端

  - 本地侦听端口：任意
  - KCP服务器地址：VPS的IP
  - 端口：默认的29900
  - 其他都和服务端的配置一致

- 配置shadowsocks客户端

  - 服务器地址：127.0.0.1
  - 服务器端口：本地侦听端口
  - 密码和加密方式：VPS的密码和加密方式

  配置完以上步骤以后，启动ss客户端和KCPTun客户端配置管理工具，日志区产生记录，即成功

  ```bash
  #查看服务器日志
  ./kcptun.sh
  ```



