# Epoll and Libevent

## Epoll

epoll 主要有三个方法：

1. `epoll_create(int __size)`: 返回一个 epfd 文件描述符

2. `int epoll_ctl (int __epfd, int __op, int __fd, struct epoll_event *__event)`

3. `int epoll_wait (int __epfd, struct epoll_event *__events, int __maxevents, int __timeout);`

```cpp
struct epoll_event
{
  uint32_t events;  /* Epoll events */
  epoll_data_t data;    /* User data variable */
}
```

```cpp
typedef union epoll_data
{
  void *ptr;
  int fd;
  uint32_t u32;
  uint64_t u64;
} epoll_data_t;
```

epoll_ctl 的 op 操作：

1. EPOLL_CTL_ADD

2. EPOLL_CTL_MOD

3. EPOLL_CTL_DEL

