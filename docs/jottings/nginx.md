---
{
  "title": "Nginx",
  "tags": ["backend","Cloud"],
  sidebar: false,
}
---
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

## 负载均衡

Nginx 的负载均衡策略有三种：
1. RR
    每个请求按照时间顺序逐一分配到不同的后端服务器；
2. 权重
    指定轮询几率，weight 和访问比率成正比，用于后端服务器性能不均的情况。
3. ip_hash
    按访问 ip 的 hash 结果分配。
