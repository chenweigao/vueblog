# Redis & redis-py

## Abstract

```sh
pip install redis
```

[官方文档](https://redis-py.readthedocs.io/en/latest/)

> redis 提供两个类 Redis 和 StrictRedis 用于实现 Redis 的命令，StrictRedis 用于实现大部分官方的命令，并使用官方的语法和命令，Redis 是 StrictRedis 的子类，用于向后兼容旧版本的 redis-py。

### StrictRedis()

初始化 Redis:

```py
from redis import StrictRedis

def create_redis_client():
    redis_client = StrictRedis(
            host='localhost',
            port=6379,
            password=None)
    return redis_client
```

也可以使用 `Redis()` 类初始化，如果遇到了向后兼容的问题。

### append()

```py
redis_client.append(key, value)
```

如果 key 不存在则创建。

