# Networks

Four Layers of TCP/IP model.

## TCP/IP

TCP 和 IP 的关系：IP 数据包分为 IP 头部和 IP 数据部分，IP 数据部分中包括 TCP 头部加 TCP 数据部分。

### Questions

[Code TCP/IP stack](http://www.saminiir.com/lets-code-tcp-ip-stack-3-tcp-handshake/)

1. How long should the sender wait for an acknowledgement from the receiver?

2. What if the receiver cannot process data as fast as it is sent?

    Flow control is required, when the receiver cannot process data as fast it is sent.

3. What if the network in between (a router, for example) cannot process data as fast as it is sent?

### TCP Basics

TCP 是一个面向连接(connection-oriented)的协议。

TCP 是一个流协议，所以当丢包、包乱序或者包损坏时会 buffer 数据，直到把完整的数据发送给应用层的 socket.

TCP header 中保存着在流中的 index,  这使得流可以分割为若干个段(segments), 而 TCP 可以重新打包它们。

如果 TCP 收到了被损坏的包或者段，直接丢弃之而不需要通知发送端；发送端未收到接收端的 ack 的话，则会重传。

### TCP 四层模型

| 层数   | 备注                                                         |
| :----- | :----------------------------------------------------------- |
| 应用层 | FTP 协议                                                     |
| 运输层 | TCP 协议，在不可靠的 IP 层上，提供了一个可靠的运输层，为了提供这种可靠的服务，TCP采用了超时重传、发送和接受端到端的确认分组等机制。 |
| 网络层 | IP 协议，提供的是一种不可靠的服务。它只是尽可能快地把分组从源节点送到目的节点，但不提供任何可靠性的保证。 |
| 链路层 | 以太网协议、令牌环协议                                       |

对比 OSI 的七层模型：

|        | OSI 七层模型                                                 |
| ------ | ------------------------------------------------------------ |
| 应用层 | HTTP, FTP, SMTP, POP3…等应用程序协议，SNMP，SOCKET, S-HTTP 等；计算机用户以及各种应用程序和网络之间的接口。 |
| 表示层 | 信息的语法已经它们的关联，加密解密，压缩解压缩等             |
| 会话层 | 不同用户机器上的用户之间建立以及管理会话，安全协议，目录访问协议 |
| 传输层 | TCP,UDP；OSI的下三层的主要任务是数据传输，上三层的主要任务是数据处理；该层的作用是保证**报文**的正确传输；功能有传输连接管理、处理传输差错。 |
| 网络层 | IP/IPv6, ICMP, IGMP, 控制子网的运行，如逻辑编址、分组传说、路由选择；将数据链路层的数据转化成**数据包**，通过路径选择、分段组合、顺序、进出路由控制等，将信息从一个网络设备传送到另一个网络设备，解决同意网络内节点之间的通信 |
| 链路层 | 物理寻址，同时将原始比特流转变为逻辑传输线路; 通过各种控制协议，将有差错的物理信道变为无差错的、能可靠传输数据帧的数据链路; 将物理层的数据封装成**帧**，传送到上一层，或者将上一层的数据帧拆装为位流形式转发到物理层。 |
| 物理层 | 原始比特流传输，IEEE 802.2, Ethernet v2, Internetwork        |



### TCP Header

```txt
        0                            15                              31
       -----------------------------------------------------------------
       |          source port          |       destination port        |
       -----------------------------------------------------------------
       |                        sequence number                        |
       -----------------------------------------------------------------
       |                     acknowledgment number                     |
       -----------------------------------------------------------------
       |  HL   | rsvd  |C|E|U|A|P|R|S|F|        window size            |
       -----------------------------------------------------------------
       |         TCP checksum          |       urgent pointer          |
       -----------------------------------------------------------------
```

对于 `sequence number` 而言，the Sequence Number represents the TCP segment’s window index, **握手是存储的是 ISN(Initial Sequence Number).**

ACK 段包含了发送端希望接收的下一个字节的窗口索引，握手过后 ACK 这段始终不能为空。

HL 表示 Header Length，其他字段含义如下：

|            标志位             |                   含义                   |
| :---------------------------: | :--------------------------------------: |
| Congestion Window Reduced (C) |            发送端降低发送速率            |
|         ECN Echo (E)          |            发送端收到拥塞通知            |
|      Urgent Pointer (U)       |            段中包含优先级数据            |
|            ACK (A)            | 握手时状态，连接保持时一直保持 on 的状态 |
|            PSH (P)            |  接收端应该尽快将数据推 (PUSH) 向应用层  |
|            RST (R)            |              重置 TCP 连接               |
|            SYN (S)            |              握手时同步 ISN              |
|            FIN (F)            |            发送端终止发送数据            |

window size 是表示接收端可以接受的字节大小，16-bit 位最大可以接收 65536 字节的数据。

TCP checksum 用于检验 TCP 数据段的完整性。

Urgent Pointer 表示 U 状态位打开的话，该字段用于表示优先级数据（紧急数据）在流中的位置。

以上就是报头的信息，报头后面也可以提供若干选项，例如:

1. MSS(Maximum Segment Size)

   发送端通知另一端数据段的最大值，IPV4 指定的是 1460 字节(bytes).

2. Selective Acknowledgment (SACK)

   SACK 用于传输过程中大量丢包的情况，这样会导致吞吐率下降，利用这种方式通知发送端。

3. Window Scale

   发送端和接收端都包含此字段，则成倍增加滑动窗口大小，有利于容量较大的数据的传输。

4. Timestamps

   在 TCP 数据段添加一个时间戳，用于计算每一个 ACK 的 RTT(往返延迟时间 Round-Trip Time), 也可以用来计算 TCP 的超时重传。

   对于丢包有两种判定方式，一种是超时重传（在一定时间内如果没有得到发送数据报的 ACK 报文，那么就重新发送数据），一种是收到三个重复的 ACK.

### TCP Handshake

#### 连接过程

```txt
        TCP A                                                TCP B

1.  CLOSED                                               LISTEN

2.  SYN-SENT    --> <SEQ=100><CTL=SYN>               --> SYN-RECEIVED

3.  ESTABLISHED <-- <SEQ=300><ACK=101><CTL=SYN,ACK>  <-- SYN-RECEIVED

4.  ESTABLISHED --> <SEQ=101><ACK=301><CTL=ACK>       --> ESTABLISHED

5.  ESTABLISHED --> <SEQ=101><ACK=301><CTL=ACK><DATA> --> ESTABLISHED
```

SEQ 表示 sequence number, 握手时发送的为自己的 ISN 内容。

为了避免 ISN 攻击，ISN 的计算方式为：`ISN = M + F(localhost, localport, remotehost, remoteport)`, 其中 M 表示一个计数器，每隔 4 秒加 1，F 是一个 Hash 算法。

:::tip 知识拓展：TCP 序列号回绕
由于 ISN 是随机产生的，所以序列号就很容易超过 2^31-1, 因此出现了 TCP 序列号回绕的问题，如何判断 TCP 回绕呢？

```c
static inline int before(__u32 seq1, __u32 seq2){
     return (__s32)(seq1-seq2) < 0;
}

#define after(seq2, seq1) before(seq1, seq2)
```

`s32` 表示有符号整型的意思，如果发生了回绕，那么会导致 `seq1` 大于 `seq2`, 例如 `seq1 = 255`, `seq2 = 1` 的时候，两者相减，我们将结果转化成有符号数：

seq1 - seq2 = 1111 1111 - 0000 0001 = 1111 1110, 由于结果被强制类型转化为负数，所以其差值小于 0, 判断发生了回绕，交换 seq1 和 seq2.
:::

使用指数退避法来决定是否放弃连接：目前，Linux 下默认会进行 5 次重发 SYN-ACK 包，重试的间隔时间从 1s 开始，下次的重试间隔时间是前一次的双倍，5 次的重试时间间隔为 1s, 2s, 4s, 8s, 16s, 总共 31s, 称为指数退避，第 5 次发出后还要等 32s 才知道第 5 次也超时了，所以，总共需要 1s + 2s + 4s+ 8s+ 16s + 32s = 63s, TCP才会把断开这个连接。

如果连接两端同时发送 SYN 信号，这种情况叫做 Simultaneous Open，解决方法是两端都发送一个 ACK 并且两端同步 SYN-ACK。

#### 三次握手

1. 客户端发送一个 SYN, 并指明客户端的 ISN.

2. 服务端发送自己的 SYN 段作为应答，指明自己的 ISN. 为了确认客户端的 SYN, 将客户端的 ISN + 1 作为 ACK 数值。

3. 为了确认服务端的 SYN, 客户端将自己的 ISN + 1 作为返回的 ACK.

### TCP Data Flow

> **TCB**: In short, the TCP has to keep track of the sequences of data it has sent and received acknowledgments for. To achieve this, a data structure called the *Transmission Control Block*(TCB) is initialized for every opened connection. [see there](http://www.saminiir.com/lets-code-tcp-ip-stack-4-tcp-data-flow-socket-api/)

TCB 是每个连接的 own records.

TCB 一个用于保存 TCP 连接的 ISN, SEQ, ACK 等的数据结构，一般至少为 280 字节，有些操作系统甚至需要 1300 字节。

由于，SYN 超时需要 63 秒，那么就给攻击者一个攻击服务器的机会，攻击者在短时间内发送大量的 SYN 包给 Server (俗称SYN flood攻击)，如果恶意地向某个端口发送大量的 SYN 包，则会造成 **SYS Flood 攻击**，其原理是利用合理的服务器请求来占用过多的服务资源，使得服务器打开大量的半开连接，分配 TCB，消耗大量服务器资源，同时也使得正常的连接请求无法被响应。

解决方法：

1. 无效连接的监视释放

    监视系统的半开连接和不活动连接，到一定阈值的时候释放。

2. 延缓 TCB 分配

    由于 SYS Flood 很难建立起连接，所以采用在连接建立后再分配 TCB 的方法：

    - Syn Cache

        系统在收到一个 SYN 报文时，在一个专用的 hash 表中保存这种半连接信息，直到收到正确的回应 ACK 报文再分配 TCB。

    - Syn Cookie

        使用一种特殊的算法计算 Sequence Number, 在收到对方的 ACK 报文以后，重新计算看其是否与回应报文中的 Sequence Number - 1 相同，从而决定是否分配 TCB 资源。

    - Syn Proxy 防火墙

        使用防火墙技术，略过。

### 连接队列

在外部请求到达时，被服务程序最终感知到前，连接可能处于 SYN_RCVD 状态或是 ESTABLISHED 状态，但还未被应用程序接受。

对应的，服务器会维护两种队列：

1. SYN_RCVD 状态

    半连接队列 `syns queue`, 位于 `/proc/sys/net/ipv4/tcp_max_syn_backing` 下，值为 256；

    在三次握手协议中，服务器维护该半连接队列，该队列为客户端的每个 SYN 开设一个条目(request_sock), 表明服务器已收到 SYN 包，并向客户端发送 ACK 确认，等待客户端的确认 ACK。当服务器收到客户的确认包时，删除该条目，服务器进入 ESTABLISHED 状态。

2. ESTABLISHED 状态

    全连接队列 `accept queue`, 位于 `/proc/sys/net/core/somaxconn`, 值为 128, 或者和 `backlog` 取最小值。

    当第三次握手服务端接收到 ACK 包以后，会进入 accept queue, 当该队列满了以后，即使客户端继续向服务端发送 ACK 的包，也不会被响应，并且 `ListenOverflows + 1`, 服务端通过 `tcp_abort_on_overflow` 来决定如何返回，0 表示直接丢弃，1 表示发送 RST 通知客户端，客户端会回应 `read timeout` 或者 `connection reset by peer`.



如果这两个队列满了，就会出现各种丢包的情况。

### 流量控制

TCP(Transmission Control Protocol) 使用滑动窗口来进行流量控制

```txt
            Left window edge             Right window edge
                       |                             |
                       |                             |
          ---------------------------------------------------------
          ...|    3    |    4    |    5    |    6    |    7    |...
          ---------------------------------------------------------
                  ^     ^                            ^    ^
                  |      \                          /     |
                  |       \                        /      |
             Sent and           Window size: 3         Cannot be
             ACKed                                     sent yet
```

### 拥塞控制

拥塞控制(Congestion control)作用于整体网络，它是防止过多的包被发送到网络中，避免出现网络负载过大，网络拥塞的情况。

There are two general methods for this: in the explicit version, the protocol has a field for specifically informing the sender about the congestion status. In the implicit version, the sender tries to guess when the network is congested and should throttle its output.

拥塞控制有其状态机和四种算法。[可以参考这篇文章](https://mp.weixin.qq.com/s/v8dBxRSOwJaQWxuKVyLv2A)

#### 状态机

Congestion Control State Machine. 拥塞控制状态机的状态有五种，分别是Open, Disorder, CWR, Recovery 和 Loss 状态。

#### 四种算法

四种算法分别为：

1. 慢启动 - slow start

    TCP 刚建立连接时，一点点提速，试探一下网络的承受能力。

2. 拥塞避免

    该方法是在慢启动算法后发现拥塞窗口大小大于等于慢启动阈值后，就进入拥塞避免算法。

3. 拥塞发生时算法

    上面提到过超时重传和接收到 3 个以上的重复 ACK, 对于后者情况，TCP 认为数据发生丢失，需要重传。这个机制不需要等待 Timestamps 或者定时器超时，所以叫做快速重传，由于在快速重传后使用拥塞避免算法（而未转到慢启动），所以也叫作快速恢复算法。

4. 快速恢复

### Model


### TCP&UDP

**Tips:** HOST means Domain or IP address.

TCP(20bits) and UDP(8bits) could use a same port in a host without conflict.、

### FTP

FTP is often secured with **SSL/TLS(FTPS)** or **SFTP**.

FTP通信中使用两条TCP连接：

- 控制
- 数据传输

FTP uses multiple TCP connections:

- control channel(port 21)
- data channel(port 20)

## HTTP

### Request and Response

Request:

```html
GET /hello.txt HTTP/1.1
Host: www.mysite.com
Accept-Language: en
```

Response:

### TCP socket

[Code in Github](https://github.com/chenweigao/python_web/tree/master/socket)

Note that if the client is the type of `str`, the `encode()` it:

```python
message = "Current time is " + str(dt)
conn.send(message.encode())
```
