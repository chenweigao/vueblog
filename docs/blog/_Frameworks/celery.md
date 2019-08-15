# Celery

## Abstract

Celery 是一个基于分布式消息传输的异步任务队列，它专注于实时处理，同时也支持任务调度。

[官方文档](http://docs.celeryproject.org/en/latest/index.html)

安装 python 版本：

```bash
pip install -U Celery
```

或者可以安装 Celery 的一个或多个扩展：

```bash
pip install celery[librabbitmq, redis, auth, msgpack]
```

## Config

- 使用 Redis 作为消息代理和后端存储，序列化和反序列化使用 msgpack, 也可以使用 json, msgpack 相比 json 是一个二进制的类 json 的序列化方式，比 json 的数据结构更小、更快

- 安装 Redis 可视化软件 RDM(redis desktop manager)

## 调用 Task

参考这篇文章：[https://mp.weixin.qq.com/s/kxwlLQ5H479PXCKuS4ZueA](https://mp.weixin.qq.com/s/kxwlLQ5H479PXCKuS4ZueA)

celery 调用 task 有三种方式：

1. `apply_async(args[, kwargs[, …]])`, 这种方式会往消息队列发送消息, 并支持各种参数使用

2. `delay(*args, **kwargs)`, 是apply_async 一种简明调用方式，但是不支持很多额外的参数

3. `calling ( __call__)`, 应用支持调用API的对象，例如add(2,2), 意味着任务将在当前进程中执行，而不是由worker执行（不会发送消息）

示例：

```py
说明：本例中的 T 即为 task 名称

# 相当于apply_async 的简单调用方式
T.delay(arg, kwarg=value)

T.apply_async((arg, ), {'kwarg': value})

# 任务会在10s 后开始执行
T.apply_async(countdown=10)

# 任务会在 now 之后的10秒开始执行
T.apply_async(eta=now + timedelta(seconds=10))

# 任务会在一分钟之后执行，在两分钟后过期
T.apply_async(countdown=60, expires=120)

# 任务会在now之后的两天过期
T.apply_async(expires=now + timedelta(days=2))
```

