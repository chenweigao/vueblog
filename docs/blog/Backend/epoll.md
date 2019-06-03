# Epoll and Libevent

## epoll

epoll 主要有三个方法：

1. `epoll_create(int __size)`: 返回一个 epfd 文件描述符，红黑树的根节点

2. `int epoll_ctl (int __epfd, int __op, int __fd, struct epoll_event *__event)`

3. `int epoll_wait (int __epfd, struct epoll_event *__events, int __maxevents, int __timeout);`

```cpp
struct epoll_event
{
  uint32_t events;  /* Epoll events */
  epoll_data_t data;    /* User data variable */
}
```

events 包括：

- EPOLLIN

- EPOLLOUT

- EPOLLERR

判断是否已连接的客户端：`!all[i] & EPOLLIN`

判断是否新连接： `fd == lfd`

```cpp
typedef union epoll_data
{
  void *ptr;
  int fd;
  uint32_t u32;
  uint64_t u64;
} epoll_data_t;
```

`*ptr` 的用法：

```cpp
struct sockinfo
{
    int fd;
    struct sockaddr_in addr;
}
```

令 ptr 指向这个结构体，传入 `epoll_ctl()` 即可。

epoll_ctl 的 op 操作：

1. EPOLL_CTL_ADD

2. EPOLL_CTL_MOD

3. EPOLL_CTL_DEL

## epoll 三种工作模式

1. 水平触发模式（默认模式）- LT

   - 只要 fd 对应的缓冲区有数据，`epoll_wait` 就返回，例如读缓冲区的 buf 设置过小，就会使得读操作次数变多，`epoll_wait` 调用变多，直到读完缓冲区中的数据；

   - 返回的次数和发送数据的次数没有关系；

   - `epoll_wait` 调用次数越多，系统开销越大。

2. 边沿触发模式 - ET

    - fd - 默认阻塞属性

    - 客户端给 server 发数据：发一次数据 server 的 `epoll_wait` 返回一次；

    - 缓冲区中要是有没发完的数据，除非新数据到达，剩余的数据才会被发送出来，**不在乎数据是否读完**；

    - 可以减少系统开销，提高 `epoll_wait` 的效率；

    - 如果数据读不完，如何全部读出来？

        `while(recv())` 数据读完之后 `recv` 会阻塞，需要**设置 fd 非阻塞**，也就是边沿非阻塞触发模式。

3. 边沿非阻塞触发模式[代码实现]()

   - 效率最高

   - 如何设置非阻塞？

        1. `open()`: 修改 flags: `O_WDRW | O_NONBLUCK`, 使得文件描述符设置为非阻塞。适用于终端文件 dev/tty

        2. `fcntl()`:

            ```cpp
            #include <fcntl.h>
            int flag = fcntl(fd, F_GETFL);
            flag |= ONNBLOCK;
            fcntl(fd, F_SETFL, flag);
            ```

   - 将缓冲区的数据全读出

        ```cpp
        while ((len = recv(fd, buf, sizeof(buf), 0)) > 0)
                    {
                        write(STDOUT_FILENO, buf, len);

                        send(fd, buf, len, 0);
                    }

        ```

## 突破文件描述符上限

查看受计算机限制的文件描述符上限：

```sh
cat /proc/sys/fs/file-max
```

通过配置修改上限值：

```sh
# see open files's num: 1024
ulimit -a

vi /etc/security/limits.conf

# add lines
*   soft    nofile  8000
*   hard    nofile  8000

# temp setting
ulimit -n 2000
```
