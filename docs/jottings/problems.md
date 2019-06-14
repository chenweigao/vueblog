---
{
  "title": "不懂的准备面试问的问题",
  "tags": ["interview"],
  sidebar: false,
}
---

整理一些平时不懂的问题，面试的时候问面试官。

<!-- more -->

# Problems

1. socket 编程中的 `accept` 函数会接收三个参数

```c
// SOCKET accept(int sockfd, struct sockaddr *addr, socklen_t *addrlen);
struct sockaddr_in client_addr;
socklen_t cli_len = sizeof(client_addr);
int cfd = accept(lfd, (struct sockaddr*) & client_addr, &cli_len);
```

为何第三个参数是 `socklen_t*` 类型的但是却用 sizeof 计算出结果？

- 因为 addrlen 是**值-结果参数**
