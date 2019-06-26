---
{
  "title": "kong",
  "tags": ["backend","Cloud"],
}
---
# kong

## Available contexts

The plugins interface allows you to override any of the following methods in your `handler.lua` file to implement custom logic at various entry-points of the execution life-cycle of Kong: [https://docs.konghq.com/1.2.x/plugin-development/custom-logic/](https://docs.konghq.com/1.2.x/plugin-development/custom-logic/)

- HTTP Module: is used for plugins written for HTTP/HTTPS requests

- Stream Module：is used for plugins written for TCP stream connections

> To be more precise, Kong is a Lua application running in Nginx and made possible by the lua-nginx-module. Instead of compiling Nginx with this module, Kong is distributed along with OpenResty, which already includes lua-nginx-module. OpenResty is not a fork of Nginx, but a bundle of modules extending its capabilities.

## config

```sh
cd /etc/kong/
cp kong.conf.default kong.conf
```

不适用数据库启动 kong:

```sh
# generated a kong.yml file
kong init

vim /etc/kong/kong.conf

database = off
# declarative_config = /path/to/kong.yml
```

除了制定 conf 文件中的 database 字段外，还可以使用环境变量: `export KONG_DATABASE=off`, 然后再 start.

注意到不适用数据库会无法使用除 GET 意外的其他 API 请求。

```sh
kong start -c /etc/kong/kong.conf

kong stop
```

## Usage

使用 `curl` 来测试 kong 的启动和 API：

`POST` 添加一个 service:

```sh
curl -i -X POST --url http://localhost:8001/service \
--data "host=weigao.cc" --data "name=weigao"
```

host(添加时必须指定 host 为必选项) 为 weigao.cc, name 为 weigao 的 service, 我们可以在 postgres 数据库中的 services 表单中查询到它，或者使用 `GET` 方法获取：

```sh
curl -i -X GET --url http://localhost:8001/service/weigao
```

就会返回这个 service 的相关信息。注意 GET service 信息只能通过其 name 或者 id.

这里 8001 端口是 API Admin 的端口。

使用 `PATCH` 更新 service 的信息，这里使用了 id 访问，然后更新其名字为 weigao.

```sh
curl -i -X PATCH \
--url http://localhost:8001/services/1158ae81-fcef-4e59-bd8b-480b3e175fff \
--data "name=weigao"
```

使用 `DELETE` 删除 service：

```sh
curl -i -X DELETE --url http://localhost:8001/services/weigao
```

返回 HTTP 204 No Content

使用 `PUT` 添加或更新：

```sh
curl -i -X PUT --url http://localhost:8001/services/weigao \
--data "host=weigao.cc"
```

以上是针对 service 的例子，同样适用于 Route, Consumer, Plugins, Tags 等。

