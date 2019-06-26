# Nginx

[Beginner's Guide](http://nginx.org/en/docs/beginners_guide.html)

## Command

```sh
nginx -s signal
```

`-s`: signal:
- stop — fast shutdown
- quit — graceful shutdown
- reload — reloading the configuration file
- reopen — reopening the log files

查看运行 nginx 进程：

```sh
ps -ax | grep nginx
```

## Configuration

By default, the configuration file is named *nginx.conf* and placed in the directory `/usr/local/nginx/conf`, `/etc/nginx`, or `/usr/local/etc/nginx`.

> The `events` and `http` directives reside in the `main` context, `server` in `http`, and `location` in `server`.

```js
http {
    server {
        listen 8080;
        root /data/upl;

        location / {
            root /data/www;
        }
        localtion /images/ {
            root /data;
        }
        location ~ \.(gif|jpg|png)$ {
            root /data/images;
        }
    } 
}
```

`location` 未定位到的 URL 将被重定向到 `/` 下的 root 中。

Reload 配置：

```sh
nginx -s reload
```

>In case something does not work as expected, you may try to find out the reason in `access.log` and `error.log` files in the directory `/usr/local/nginx/logs` or `/var/log/nginx`.

<!-- 2019-6-26 -->
## 虚拟主机

nginx 可以配置多种类型的虚拟主机：

1. 基于 IP

2. 基于域名

3. 基于端口

以基于端口的虚拟主机为例，对 `nginx.conf` 进行配置。

```conf
http {
    include       mime.types;
    #default_type  application/octet-stream;
    
    # 为了使 echo 可用
    default_type text/html;

    server {
        listen       8088;
        server_name  localhost;
        location / {
            root   html;
            index  index.html index.htm;
        }

        #error_page  404              /404.html;

        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }

    # custom config -- weigao
    server {
        listen      8089;
        location / {
            echo 'hello server2!';
        }
    }
    server {
        listen      8090;
        location / {
            echo 'hello server3!';
        }
    }
}
```

现在，访问 8088, 8089, 8090 端口就可以发现不同的输出结果，这样就实现了多个虚拟主机的代理。

## 反向代理

```conf
http {
    # 指定 upstream
    upstream to_google {
        server localhost:8089;
        server localhost:8090;
    }
    server {
        listen      80; # 对外暴露
        server_name www.google.com;
        location / {
            proxy_pass  http://to_google;
            # 使用 http:// + upstream 别名指定
        }
    }

    # 以下为内部服务器，对外不可见
    server {
        listen      8089;
        location / {
            echo 'Welcome to google! This is 8089 machine!!!';
            echo 'remote_addr=$remote_addr'; # 防止逐层代理，获取到真实 ip.
        }
    }
    server {
    listen      8090;
    location / {
        echo 'Welcome to google! This is 8090 machine!!!';
    }
    }
}
```

(记得将 www.google.com 在 host 文件中指向本地，或者注释掉 server_name)

需要注意，`upstream` 为关键词，紧跟着的 to_google 为这个 upstream 的别名，在 `proxy_pass` 中 使用 http:// + 别名的方式指定。

当 upstream 发现其中有两个 server 可以用的时候，使用轮询策略（默认）依次访问 8089 和 8090, 个人猜测会不会也用 epoll?


## 负载均衡

### 概述

Nginx 的负载均衡策略有三种：

1. RR
    每个请求按照时间顺序逐一分配到不同的后端服务器；

2. 权重
    指定轮询几率，weight 和访问比率成正比，用于后端服务器性能不均的情况。

3. ip_hash
    按访问 ip 的 hash 结果分配。

upstream 用于负载均衡的时候，可以支持以下参数：

- weight：权重，常用于机器性能不均衡时，权重越大被访问的几率越大。

- down：用于其他 server 设置当前不参与负载均衡，即访问不到

- backup：用于其他 server 无法访问或者忙时备用 server

- max_fails：server 允许请求失败的次数

- fail_timeout：请求失败次数达到 max_fails 时，指定 server 停留多久，以便管理员检测故障原因

例子：

```conf
upstream loadBalance {
    server localhost:8090 weight=1;
    server localhost:8091 weight=2 backup;
}
```

### ip_hash

每个请求按访问 IP 的 hash 结果分配，这样来自同一 IP 访客固定访问一个后端服务器，有效解决了动态网页存在的 sesion 共享问题。

```conf
upstream loadBalance {
    ip_hash;
    server localhost:8090;
    server localhost:8091;
}
```

除此之外，还有 url_hash 方法。此方法按访问 url 的 hash 结果来分配请求，使每个 url 定向到同一个后端服务器。此方法再 Nginx 的 hash 软件包中。

### least_conn

即最少连接数策略，nginx 可以使请求分配到最少连接数的机器上。

```conf
upstream loadBalance {
    least_conn;
    server localhost:8090;
    server localhost:8091;
}
```

## 缓存

Nginx 缓存在 `ngx_http_proxy_module` 下的 几个模块中 [http://nginx.org/en/docs/http/ngx_http_proxy_module.html](http://nginx.org/en/docs/http/ngx_http_proxy_module.html).

```conf
http {
    proxy_cache_path cache/test levels=1:2 keys_zone=myCache:10m maxsize=1g inactive=30s;

    server {
        listen  80;
        add_header  X-Cache $upstream_cache_status;
        location / {
            proxy_pass  http://localhost:8080;
            proxy_cache_vaild   10s;
            proxy_cache myCache;
        }
    }
}
```
