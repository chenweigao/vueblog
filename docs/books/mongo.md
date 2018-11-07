---
title: The Definitive Guide to MongoDB
description: 3th edition
---

A complete guide to dealing with big date using mongodb, third edition
<!--more -->

## Note

`_id` 标识符12字节的值包含:

- 4 字节的时间戳

- 3 字节的机器ID

- 2 字节的进程ID

- 3 字节的计数器

计数器和时间戳字段都以大端格式存储，这是因为MongoDB 希望保证这些值能够按升序存储，而大端格式符合此要求