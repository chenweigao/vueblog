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
}sockInfo;

sockInfo* sinfo = (sockInfo*)malloc(sizeof(sockInfo));
sinfo->fd = lfd;
sinfo->sock = serv_addr;

struct epoll_event ev;
// *ptr
cv.data.ptr = sinfo
```

令 ptr 指向这个结构体，传入 `epoll_ctl()` 即可。

更复杂的带回调的 `epoll_data_t` 例子：

```cpp
struct myevent_s {
    int fd; // 要监听的文件描述符
    int events; // 对应的监听事件
    void *arg; // 指向 myevent_s 的函数指针
    void(*call_back)(int fd, int events, void *arg); // 回调函数
    int status; // 1：在红黑树上监听；0：不监听
    char buf[BUFLEN];
    int len;
    long last_active; // time(NULL) 记录每次加入红黑树 g_efd 的时间值
}
```

epoll_ctl 的 op 操作：

1. EPOLL_CTL_ADD

2. EPOLL_CTL_MOD

3. EPOLL_CTL_DEL

## epoll 三种工作模式

1. 水平触发模式（默认模式）- LT

   - 只要 fd 对应的缓冲区有数据，`epoll_wait` 就返回，例如读缓冲区的 buf 设置过小，就会使得读操作次数变多，`epoll_wait` 调用变多，直到读完缓冲区中的数据；

   - 返回的次数和发送数据的次数没有关系；

   - `epoll_wait` 调用次数越多，系统开销越大；

   - 在 EPOLL_OUT 中，`epoll_wait` 会一直返回，缓冲区能写数据，该函数会返回，缓冲区满的时候，不返回。**本质上是检测写缓冲区是否可以写。**

2. 边沿触发模式 - ET

    - `ev.events = EPOLLIN | EPOLLET`

    - fd - 默认阻塞属性

    - 客户端给 server 发数据：发一次数据 server 的 `epoll_wait` 返回一次；

    - 缓冲区中要是有没发完的数据，除非新数据到达，剩余的数据才会被发送出来，**不在乎数据是否读完**；

    - 可以减少系统开销，提高 `epoll_wait` 的效率；

    - 如果数据读不完，如何全部读出来？

        `while(recv())` 数据读完之后 `recv` 会阻塞，需要**设置 fd 非阻塞**，也就是边沿非阻塞触发模式。

    - EPOLL_OUT 中，第一次设置的时候 `epoll_wait` 会返回一次，然后就不返回了，除非满缓冲区被读，从 满 -> 不满的时候再返回一次，然后不再返回。

3. 边沿非阻塞触发模式- [代码实现](https://github.com/chenweigao/socket-epoll/blob/master/cpp_webserver/nonblock_et_epoll.c)

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

   - 将缓冲区的数据全读出，特别是针对缓冲区大小不够的情况

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

## Libevent Abstract

:::tip 简介
libevent 封装了 socket 通信、IO 多路转接；精简，专注于网络，性能高；跨平台；**事件驱动**。
:::

安装：

```sh
# 检测安装环境，生成 makefile
./configure
make
sudo make install
```

`make install` 会将数据拷贝到对应的目录，如果目录不存在，则创建该目录。

默认目录是：

- `/usr/local/include`

- `/usr/local/bin`

- `/usr/local/lib`

验证是否安装成功：

```sh
cd sample/
gcc hello-world.c -o hello-world -l event

./hello-world
nc localhost 9995
```

1. 事件的底层处理框架
   1. 一个函数

2. 消息循环
   1. 一个函数

3. **创建事件**
   1. 不带缓冲区 - event
      1. 几个函数
   2. 带缓冲区 - bufferevent
      1. 几个函数

4. 资源的释放
   1. 几个函数

总结其使用方法是：[参考程序 bufferevent_server.c](https://github.com/chenweigao/socket-epoll/blob/master/cpp_webserver/bufferevent_server.c)

1. 创建一个事件处理框架：`struct event_base* base = event_base_new();` （流水线或设备初始化完成）

2. 创建一个事件，并将事件添加到框架上：

   - （服务端）使用 **链接监听器** 直接创建: `struct evconnlistener* listen =  evconnlistener_new_bind();`, 函数中要求实现 `listen_cb` 函数回调；

   - 使用 `struct event* ev = event_new()` and `event_add()`, [参考这里的 40 - 44 行](https://github.com/chenweigao/socket-epoll/blob/master/cpp_webserver/libevent_read_fifo.c)

    如果要使用终端标准输入，可以使用 stdin 的文件描述符创建一个事件：`struct events* ev_in = event_new(base, STDIN_FILENO, EV_READ | EV_PERSIST, read_terminal, NULL);`

3. 开始事件循环: `event_base_dispatch(base);`

4. 释放资源: `evconnlistener_free(listen);`, `event_base_free(base);` and `event_free();`

## bufferevent

`bufferevent` 相比于 `event` 是创建带缓冲区的事件，包括读缓冲区和写缓冲区，参考[libevent 官网示例](https://github.com/libevent/libevent/blob/master/sample/hello-world.c)：

- 读：只要缓冲区有数据，就会被通知；

- 写：一般用不掉，自动发送并且返回回调。

`listen_cb` 回调中：

1. 创建一个带缓冲区的事件：`struct bufferevent* bev = bufferevent_socket_new(base, fd, BEV_OPT_CLOSE_ON_FREE);`

2. 然后 `bufferevent_setcb(bev, read_cb, write_cb, event_cb, NULL);`

3. 然后分别实现三个回调:

   - 以 `read_cb()` 为例，读写回调函数原型为：`typedef void (*bufferevent_data_cb)(struct bufferevent *bev, void *ctx);`

   - 事件回调函数原型为：`typedef void (*bufferevent_event_cb)(struct bufferevent *bev, short what, void *ctx);` `what` 包括的有: `BEV_EVENT_*`;

4. 释放资源：使用 `bufferent_free()`.

:::warning bug avoid
在初始化 `listen_cb` 的回调函数中，会使用读缓冲区和写缓冲区，bufferevent 默认读缓冲区是不可用的；

一般情况下，我们将这两个缓冲区都 `bufferevent_enable()`, 防止出现段异常
:::

在套接字通信中，客户端连接服务器使用：`int bufferevent_socket_connect(struct bufferevent *, const struct sockaddr *, int);`
