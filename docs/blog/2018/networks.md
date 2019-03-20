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

   在 TCP 数据段添加一个时间戳，用于计算每一个 ACK 的 RTT, 也可以用来计算 TCP 的超时重传。

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

使用指数退避法来决定是否放弃连接。

如果连接两端同时发送 SYN 信号，这种情况叫做 Simultaneous Open，解决方法是两端都发送一个 ACK 并且两端同步 SYN-ACK。

#### 三次握手

1. 客户端发送一个 SYN, 并指明客户端的 ISN.

2. 服务端发送自己的 SYN 段作为应答，指明自己的 ISN. 为了确认客户端的 SYN, 将客户端的 ISN + 1 作为 ACK 数值。

3. 为了确认服务端的 SYN, 客户端将自己的 ISN + 1 作为返回的 ACK.

### TCP Data Flow

**TCB**: In short, the TCP has to keep track of the sequences of data it has sent and received acknowledgments for. To achieve this, a data structure called the *Transmission Control Block*(TCB) is initialized for every opened connection. [see there](http://www.saminiir.com/lets-code-tcp-ip-stack-4-tcp-data-flow-socket-api/)

TCB 是每个连接的 own records.

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

1. open 状态

#### 四种算法

四种算法分别为：

1. 慢启动 - slow start

    TCP 刚建立连接时，一点点提速，试探一下网络的承受能力。

2. 拥塞避免

3. 拥塞发生时算法

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
