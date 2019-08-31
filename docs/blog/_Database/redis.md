# Redis & redis-py

## Abstract

Redis(Remote Dictionary Server) server 的启动：

```sh
redis-server.exe redis.windows.conf
```

安装 redis-py:

```sh
pip install redis
```

[官方文档](https://redis-py.readthedocs.io/en/latest/)

> redis 提供两个类 Redis 和 StrictRedis 用于实现 Redis 的命令，StrictRedis 用于实现大部分官方的命令，并使用官方的语法和命令，Redis 是 StrictRedis 的子类，用于向后兼容旧版本的 redis-py。

可以使用 Redis 可视化工具 **RDM(redis deaktop manager)**

## Redis 简述

什么是 Redis？有什么优缺点？

- Redis本质上是一个 key-value 类型的内存数据库，整个数据库都在内存中加载，通过异步操作可以持久化到磁盘中
- Redis的性能十分出色，是已知的性能最快的 key-value DB(每秒大概处理10W次IO操作)
- Redis 拥有丰富的数据结构（5 种，分别是 string, list, hash, set, zset）
- Redis 丰富的数据结构给了它很多的应用，如 celery 就可以维护一个高性能的消息队列(list)
- 不同于 memcached, redis 的单个 value 可以保存的最大数据限制是 1GB(memcached 是 1M)
- 缺点在于 redis 的数据存储受到物理内存的限制，不能做海量的数据场景

## Redis 原理

## 数据淘汰策略

当达到内存最大限制的时候，Redis 会采用一些策略(maxmemory-policy配置), 来进行数据淘汰：

1. noeviction：默认策略，不淘汰，达到最大的内存限制的时候，如果再请求更多的数据，直接报错
2. allkeys-lru：LRU 策略，删除最近最少使用的 key, 针对于所有的key
3. volatile-lru：设置的 expire 的key使用 LRU
4. allkeys-random：随机删除一部分key
5. volatile-random：对设置的 expire 的key随机删除
6. volatile-ttl：对设置 expire 的key使用，优先删除剩余时间短的key

对于这六种数据淘汰策略的使用场景可以归纳为：

1. 如果分为热数据和冷数据的场景（所有key中有一部分经常被读写），使用 LRU 方法
2. 如果是循环读所有的 key, 那么就使用 allkeys-random 策略

## Redis 生产适用场景

1. session cache 会话缓存
    一般业界使用 memcached, 但是 redis 多了持久化功能，可以维护严格要求一致性的缓存
2. FPC 全页缓存
3. redis queues
    如 celery 队列可以使用 redis作为broker
4. 排行榜、计数器
    使用了 redis 中的递增和递减操作
5. 原子操作、事务操作
    事务是一个单独的隔离操作，事务中的所有命令都会序列化、按顺序地执行；
    事务在执行的过程中不会被其他客户端发送过来的命令打断；
    事务是一个原子操作，事务中的所有命令要么全部被执行，要么全部不执行。
    事务相关的命令：`MULTI, EXEC, DISCARD, WATCH`

## Redis 优化

1. 设置key的过期时间
    使用`expire`命令，如果想要永久有效，那么就使用 `presist`.

2. 使用散列表
    比如说有一个场景，需要存储用户的账户、密码等信息，尽量不给每一个字段去设置单独的key, 而是将他们一起存储于一张散列表里面。

## Redis 分布式锁

### 分布式锁

分布式的流行使得原单机部署情况下的并发控制策略失效。

分布式锁大致分为三种：
1. 数据库乐观锁
2. 基于 redis 的分布式锁
3. 基于 ZooKeeper 的分布式锁

分布式锁的实现条件：
1. 互斥性，任何时候只能有一个客户端持有锁
2. 可靠性，尽量避免死锁
3. 一致性，锁只能由加锁人解锁，不能产生A的加锁被B用户解锁的情况

## Redis 分布式集群

目前已知的可以通过 proxy 来实现

### Redis 分布式锁

基本上实现如下，主要使用三个命令：

```bash
# SETNX
SETNX key val
# EXPIRE
expire key timeout
# DELETE
delete key
```

redis 锁的实现思路基本上是：

1. setnx加锁，并设置超时时间，这时候锁的 value 值就是一个随机生成的 UUID
2. 获取锁和超时时间
3. 释放锁的时候根据 UUID 判断，而后 DELETE 删除（注意这里要注意原子性）

### Redis Cluster 槽

## redis-py

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

