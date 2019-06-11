# Networks

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>

Four Layers of TCP/IP model.

## IP

IP 是网络层（数据包）协议，分为 IPv4 和 IPv6。

### IP 地址的长度

IPv4 长度是 32位，是 4 组 8 位二进制，可以用点分十进制表示，如 `255.255.255.255`, 用二进制表示就是 `11111111 11111111 11111111 11111111`, 即 32 位。

IPv6 长度是 128 位，由 8 个字段组成，每一块都表示四个 16 进制数，如 `ABCD:EF01:2345:6789:ABCD:EF01:2345:6789`, 最大地址个数为 2^32 个。一个 16(0 - F) 进制由 4 位二进制表示，一个字段长度为 16 字节，总长度 16 * 8 = 128 字节。

### IP 地址的类别

| 类别 | 网段    | 区分             | 地址范围                    |
| ---- | ------- | ---------------- | --------------------------- |
| A    | 0~127   | 二进制首位为0    | 1.0.0.1~127.255.255.254     |
| B    | 128~191 | 二进制首位为10   | 172.16.0.0~172.31.255.254   |
| C    | 192~223 | 二进制首位为110  | 192.168.0.1~192.168.255.254 |
| D    | 224~239 | 二进制首位为1110 | 224.0.0.0~239.255.255.254   |
| E    | 240~255 | 二进制首位为1111 | 240.0.0.0~255.255.255.255   |

## TCP

TCP 和 IP 的关系：IP 数据包分为 IP 头部和 IP 数据部分，IP 数据部分中包括 TCP 头部加 TCP 数据部分。

### Questions

[Code TCP/IP stack](http://www.saminiir.com/lets-code-tcp-ip-stack-3-tcp-handshake/)

1. How long should the sender wait for an acknowledgement from the receiver?

2. What if the receiver cannot process data as fast as it is sent?

    Flow control is required, when the receiver cannot process data as fast it is sent.

3. What if the network in between (a router, for example) cannot process data as fast as it is sent?

### TCP Basics

TCP 是一个面向连接(connection-oriented)的协议。

TCP 的可靠基于超时和重传策略。

TCP 是一个流协议，所以当丢包、包乱序或者包损坏时会 buffer 数据，直到把完整的数据发送给应用层的 socket.

TCP header 中保存着在流中的 index,  这使得流可以分割为若干个段(segments), 而 TCP 可以重新打包它们。

如果 TCP 收到了被损坏的包或者段，直接丢弃之而不需要通知发送端；发送端未收到接收端的 ack 的话，则会重传。

### TCP 四层模型

| 层数   | 备注                                                                                                                                |
| :----- | :---------------------------------------------------------------------------------------------------------------------------------- |
| 应用层 | FTP 协议(21 连接, 20 传输)                                                                                                                            |
| 运输层 | TCP 协议，在不可靠的 IP 层上，提供了一个可靠的运输层，为了提供这种可靠的服务，TCP采用了超时重传、发送和接受端到端的确认分组等机制。 |
| 网络层 | IP 协议，提供的是一种不可靠的服务。它只是尽可能快地把分组从源节点送到目的节点，但不提供任何可靠性的保证。                           |
| 链路层 | 以太网协议、令牌环协议                                                                                                              |

对比 OSI 的七层模型：

|        | OSI 七层模型                                                                                                                                                                                                                  |
| ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 应用层 | HTTP, FTP, SMTP, POP3…等应用程序协议，SNMP，SOCKET, S-HTTP 等；计算机用户以及各种应用程序和网络之间的接口。                                                                                                                   |
| 表示层 | 信息的语法已经它们的关联，加密解密，压缩解压缩等                                                                                                                                                                              |
| 会话层 | 不同用户机器上的用户之间建立以及管理会话，安全协议，目录访问协议                                                                                                                                                              |
| 传输层 | TCP,UDP；OSI的下三层的主要任务是数据传输，上三层的主要任务是数据处理；该层的作用是保证**报文**的正确传输；功能有传输连接管理、处理传输差错。                                                                                  |
| 网络层 | IP/IPv6, ICMP, IGMP, 控制子网的运行，如逻辑编址、分组传说、路由选择；将数据链路层的数据转化成**数据包**，通过路径选择、分段组合、顺序、进出路由控制等，将信息从一个网络设备传送到另一个网络设备，解决同意网络内节点之间的通信 |
| 链路层 | 物理寻址，同时将原始比特流转变为逻辑传输线路; 通过各种控制协议，将有差错的物理信道变为无差错的、能可靠传输数据帧的数据链路; 将物理层的数据封装成**帧**，传送到上一层，或者将上一层的数据帧拆装为位流形式转发到物理层。        |
| 物理层 | 原始比特流传输，IEEE 802.2, Ethernet v2, Internetwork                                                                                                                                                                         |

### TCP Header

```html
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
|            FIN (F)            |          发送端终止**发送**数据          |

window size 是表示接收端可以接受的字节大小，16-bit 位最大可以接收 65536 字节的数据。

TCP checksum 用于检验 TCP 数据段的完整性。

Urgent Pointer 表示 U 状态位打开的话，该字段用于表示优先级数据（紧急数据）在流中的位置。

FIN 一般是应用层主动关闭的结果，TCP 不背锅。

以上就是报头的信息，报头后面也可以提供若干选项，最大 40 字节，例如:

1. MSS(Maximum Segment Size) 最大报文长度

    见[MSS](#mss)

2. Selective Acknowledgment (SACK)

   SACK 用于传输过程中大量丢包的情况，这样会导致吞吐率下降，利用这种方式通知发送端。

3. Window Scale

   发送端和接收端都包含此字段，则成倍增加滑动窗口大小，有利于容量较大的数据的传输。

4. Timestamps

   在 TCP 数据段添加一个时间戳，用于计算每一个 ACK 的 RTT(往返延迟时间 Round-Trip Time), 也可以用来计算 TCP 的超时重传。

   TCP的 RTO（重传超时时间）值的计算方法：

   - RFC793：使用低通过滤器来更新一个平滑的 RTT 值。
   - Jacobson 1988: $RTO = A + 4D$, 其中 A 为平均 RTT，D为被平滑的均值偏差。

   对于丢包有两种判定方式，一种是超时重传（在一定时间内如果没有得到发送数据报的 ACK 报文，那么就重新发送数据），一种是收到三个重复的 ACK.

### MTU

其关系可以表示为 { 数据帧 {IP 包 {TCP/UDP 包 {DATA} } } }

在应用程序中我们用到的 data 的长度最大是多少，直接取决于底层的限制。

链路层：数据帧长度为 MTU 为 1500

网络层：IP 包的首部需要占 20 字节，所以这里的 MTU 为 1500 - 20 = 1480

传输层：UDP 包首部占 8 字节，MTU = 1472; TCP 首部占 20 字节, MTU = 1460。

特别注意，当我们 UDP 包中的数据多于 1472 的时候，发送方的 IP 层需要分片进行传输，而在接收方 IP 层则需要对数据进行重组，由于 UDP 是不可靠的协议，如果分片导致重组失败，UDP 包就会被丢弃。

在网络编程中，Internet 上标准的 MTU 为 578，所以 UDP 编程时最好在 576 - 20 - 8 = 548 字节以内。

PMTU: 两个端点之间的若干个 MTU 值计算出来的 MTU值。

### MSS

全称 Maximun Segmeant Size, 最大分段大小。

发送端通知另一端数据段的最大值，对于一个以太网，IPV4 指定的是 1460 字节(bytes), MSS = 1500(MTU) - 20(IP) - 20(TCP) = 1460B.

一般网络接口都有一个 MTU, 如果 IP 包的尺寸 <= MTU, 原封不动从这个网络接口发送，否则就需要分片，所以为了避免分片，尽量发送小于 MTU 大小的数据包。

TCP 在第一次握手的时候就有一个 option 4, 协商通信双方的 MSS, 如果一方 MSS=1460, 另一方 MSS=1500, 会选择较小的一方的 MSS=1460 作为这个 TCP 连接的 MSS, 这样双向通信都可以避免因为 IP 包太大引起的分片。

如果一方不接收来自另一方的 MSS 值，则 MSS 就定为默认的 536 字节(非本地的默认值，根据 IP 和子网判断是不是本地)。

**问题**：如果 TCP 通信时，发送的数据包大小大于 MTU 该怎么办？

**答**：TCP 在三次握手的时候会协商 MSS, 假设发送了 2000 字节的数据，如果发送缓冲区滑动窗口够大，应该会全部成功，否则会返回实际发送的字节。假设 2000 字节全部成功，TCP 实际上会将其分为 1460 和 540 这两个包，接收端收到 1460 这个包就会回一次 ACK, 接收到 540 大小这个再 ACK 一次，每个分节都带有 IP 头和 TCP 头的。IP分片只有第一个带有传输层头，其余分片只有 IP 头。

补充说明：由于 TCP 是数据流协议，在不考虑缓冲区的情况下，不存在包大小的限制，这里是指在使用 `send` 函数时，数据长度参数不受限制，而实际上如果这段数据较长，会被分段发送；如果比较短，可能会等待和下次数据一起发送。

### IP 分片

由于 TCP 层已经进行了分段，所以 TCP 包向下到达 IP 层的时候，IP 层的数据绝对不会超过 MTU, 因此，对于 TCP 传输来说，IP 层是没有必要分片的，因为 TCP 层分段的时候，已经考虑到了这个限制。

所以，UDP 传输中，IP 分片是受到了 MTU 的限制，TCP 传输中，TCP 分段，是受到了 MSS 的限制。

为什么会有 IP 分片？当发送的 IP 数据报的大小超过了 MTU 时，IP 层就需要对数据进行分片，否则数据将无法发送成功。

> IP 分片发生在 IP 层，不仅源端主机会进行分片，中间的路由器也有可能分片，因为不同的网络的 MTU 是不一样的，如果传输路径上的某个网络的 MTU 比源端网络的 MTU 要小，路由器就可能对 IP 数据报再次进行分片。而分片数据的重组只会发生在目的端的 IP 层。

IP 报文中有一个标志位 **DF(Donot Fragment**, 表示能否进行 IP 数据包的分片，设置为 1 不分片。

IP 分片和组装的过程对传输层是透明的，原因是 IP 数据进行分片之后，只有当它达到下一站时，才可进行重新组装，且是由目的端的 IP 层来完成的。在 IP 头中，16 标识的标志位记录了一个 IP 包的 ipid, 具有同一个 ipid 的 IP 分片将会重新组装，而 13 位片偏移则记录了 IP 片相对整个包的位置，两个字段之间的 3 位标志位表示该分片后面是否还有新的分片和是否要分片(DF)。接收方（目的端的 IP 层）可以利用这些信息对 IP 数据重新进行组织。组织好之后再提交到上层协议传输层。


网络层 IP 协议会检查每个从上层协议下来的数据包的大小，并根据本机 MTU 的大小决定是否作分片处理。

需要注意由于 IP 没有超时重传的机智，当分片后来自 TCP 报文段的某一片丢失后，TCP 在超市后会重发整个 TCP 报文段，该报文段对应于一份 IP 数据报，没办法实现值重传 IP 数据报中的一片。

### TCP 三次握手

1. 客户端发送一个 SYN, 并指明客户端的 ISN.

2. 服务端发送自己的 SYN 段作为应答，指明自己的 ISN. 为了确认客户端的 SYN, 将客户端的 ISN + 1 作为 ACK 数值。

3. 为了确认服务端的 SYN, 客户端将自己的 ISN + 1 作为返回的 ACK.

```html
        TCP A                                                TCP B

1.  CLOSED                                               LISTEN

2.  SYN-SENT    --> <SEQ=100><CTL=SYN>               --> SYN-RECEIVED

3.  ESTABLISHED <-- <SEQ=300><ACK=101><CTL=SYN,ACK>  <-- SYN-RECEIVED

4.  ESTABLISHED --> <SEQ=101><ACK=301><CTL=ACK>       --> ESTABLISHED

5.  ESTABLISHED --> <SEQ=101><ACK=301><CTL=ACK><DATA> --> ESTABLISHED
```

SEQ 表示 sequence number, 握手时发送的为自己的 ISN 内容。

为了避免 ISN 攻击，ISN 的计算方式为：`ISN = M + F(localhost, localport, remotehost, remoteport)`, 其中 M 表示一个计数器，ISN 可以看做是一个32 比特的计数器，每隔 4ms 加 1，F 是一个 Hash 算法。

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

### TCP 状态机

<!-- ![TCP STATE](/tcp.jpg) -->
![TCP state](https://upload-images.jianshu.io/upload_images/4010128-b83e0e722007f62a.jpg)

连接：

1. SYN_SENT
2. SYN_RCVD(LISTEN 转变)
3. ESTABLISHED

关闭：

1. FIN_WAIT_1
2. CLOSE_WAIT
3. FIN_WAIT_2：处于半关闭状态。
4. TIME_WAIT：2MSL 后完全断开。
5. LAST_ACK
6. CLOSED

2MSL 等待时间：

收到 FIN 请求后等待。每个具体 TCP 必须实现选择一个报文段的最大生存时间 MSL，它是任何报文被丢弃在网络内的最长时间（RFC793 指出 MSL 为 2 分钟，实现中可以改变这个值）

假设由于客户端发送确认 FIN 的 ACK 不一定能被服务器收到，在丢失的情况下，需要等待大于 RTO（动态变化，取决于 RTT）的时间，一般 2MSL 的时长是远大于 RTO 的。

处于这个等待时间时，主动发起断开的一端的 IP 和端口不能再被使用，任何迟到的数据包都被丢弃。对于服务器主动发起断开而言，处于 TIME_WAIT 等待状态的端口号在 2MSL 时间内不能被使用，一般需要等待 1-4 分钟。

异常终止一个连接：

不同于有序释放，异常终止连接丢弃任何待发数据立即发送 RST 位置 1 的复位报文，执行异常关闭。

RST 的作用：

1. 连接未启动的服务或者端口，直接回复 RST 报文
2. 异常终止
3. 检测半打开连接，存在半打开连接的话，使用 RST 关闭

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

### 指数退避

使用指数退避法来决定是否放弃连接：目前，Linux 下默认会进行 5 次重发 SYN-ACK 包，重试的间隔时间从 1s 开始，下次的重试间隔时间是前一次的双倍，5 次的重试时间间隔为 1s, 2s, 4s, 8s, 16s, 总共 31s, 称为指数退避，第 5 次发出后还要等 32s 才知道第 5 次也超时了，所以，总共需要 1s + 2s + 4s+ 8s+ 16s + 32s = 63s, TCP才会把断开这个连接。

其他情况算法：如果 服务器 CPU 时钟时间为 500 ms, 重传时间利用指数退避的计算方式为 1.5 的整数倍，$1.5 * 2^0$, $1.5 * 2^1$...以此类推，最终的结果是1、3、6、12、24、48、64、64...

如果连接两端同时发送 SYN 信号，这种情况叫做 Simultaneous Open，解决方法是两端都发送一个 ACK 并且两端同步 SYN-ACK。

### 超时和重传

拥塞控制(Congestion control)作用于整体网络，它是防止过多的包被发送到网络中，避免出现网络负载过大，网络拥塞的情况。

> There are two general methods for this: in the explicit version, the protocol has a field for specifically informing the sender about the congestion status. In the implicit version, the sender tries to guess when the network is congested and should throttle its output.

拥塞控制有其状态机和四种算法。[可以参考这篇文章](https://mp.weixin.qq.com/s/v8dBxRSOwJaQWxuKVyLv2A)

Congestion Control State Machine. 拥塞控制状态机的状态有五种，分别是Open, Disorder, CWR, Recovery 和 Loss 状态。

#### 拥塞控制算法

四种算法分别为：

1. 慢启动 - slow start

    TCP 刚建立连接时，一点点提速，试探一下网络的承受能力。

    慢启动允许一方放松连续的未经确认的分组的增加方式采用**指数增加**。

2. 拥塞避免

    一般情况下，有两组分组丢失的指示：**超时**和**接收到重复的确认**。

    该方法是在慢启动算法后发现拥塞窗口大小大于等于慢启动阈值后（执行慢启动算法一般是 cwnd < ssthresh），就进入拥塞避免算法。

    拥塞避免允许一方放松连续的未经确认的分组的增加方式采用**线性增加**。

    拥塞避免算法和慢启动算法需要对每个连接维持两个变量：一个**拥塞窗口 cwnd** 和一个**慢启动门限 ssthresh**。算法的工作过程如下：

    1. 对于一个给定的连接，初始化 cwnd 为 1 个报文段(这是慢启动过程，初始化为 1，指数增长直到到达 ssthresh 后进行拥塞避免)，每收到一个确认就加 1，这会使得窗口按指数方式增长。
    2. 拥塞避免算法要求每收到一个确认时将 cwnd 增加 1/cwnd，这是一种线性增长。在一个往返时间最多为 cwnd 增加1个报文段。
    3. 如果 cwnd 值小于或者等于 ssthresh，则进行慢启动，否则进行拥塞避免。

    举例说明：

    ![cwnd and ssthresh](/cwnd.jpg)

    假设在 cwnd 为32个报文段时发生拥塞（超时引起），于是设 ssthresh 为16个报文段，而 cwnd 为1个报文段，cwnd 在收到发送报文的 ACK 时指数增长，直到 cwnd 等于 ssthresh 才停止，从这时起 cwnd 线性增加，并在每个往返时间内最多增加1个报文段。

3. 拥塞发生时算法

    上面提到过超时重传和接收到 3 个以上的重复 ACK, 对于后者情况（前者情况在上面举例说明了），TCP 认为数据发生丢失，需要重传。这个机制**不需要等待 Timestamps 或者定时器超时**，所以叫做快速重传，由于在快速重传后使用拥塞避免算法（而未转到慢启动），所以也叫作快速恢复算法。

    没有执行慢启动的原因：
    收到重复的ACK不仅仅告诉我们一个分组丢失了，还告诉我们一个数据包离开网络顺利到达接受者，而接收方只是没有收到需要序号的报文才会重复发送ACK。这种情况下，在收发两端之间仍然有流动的数据，而我们不想执行慢启动来突然减少数据流。

4. 快速恢复

    当收到第三个重复的 ACK 的时候，将 ssthresh 的值设置为当前拥塞窗口 cwnd 值的一半。重传丢失的报文段，设置 cwnd 的 ssthresh（微观上等于 cwnd / 2 + 3）, 3 表示之前收到的 3 个重复的 ACK，进入拥塞避免算法。

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

### 流量控制

TCP(Transmission Control Protocol) 使用滑动窗口来进行流量控制

```html
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

FTP 端口号：21 端口用于连接，20 端口用于传输数据。具体过程为：进行 FTP 文件传输时，客户端首先连接到服务器的 21 端口，进行用户的认证，传输文件时，服务器打开 20 端口来进行传输。

## ARP - 网络层

ARP 即地址解析协议，工作在网络层(与 IP 同一层), 其作用是将 IP 解析为 MAC 地址（在IPv6 中使用邻居发现协议进行解析），相应的，RARP 是将 MAC 地址解析为 IP 地址。

在以太网中，一个主机和另一个主机进行直接通信，必须要知道目标主机的 MAC 地址，所谓地址解析就是主机在发送帧（链路层）前，将目标 IP 地址转化成目标 MAC 地址的过程。ARP 协议的基本功能就是通过目标设备的 IP 地址，查询目标设备的 MAC 地址，保证通信的顺利进行。

IP 地址为 32 位，MAC 地址为 48 位。

### 工作原理

在每台安装有 TCP/IP 的电脑中都有一个 ARP 缓存表，表中的 IP 地址与 MAC 地址是一一对应的，发送数据时，主机会在自己的 ARP 缓存表中查询是否有目标 IP 地址：

- 有，则得出目标的 MAC 地址

- 没有，则在网络上发送一个广播

## HTTP

### HTTP 和 HTTPS

关系：**HTTP + 加密 + 认证 + 完整性保护 = HTTPS**

### DNS 解析

DNS 属于应用层协议，其使用端口号 53，同时使用 TCP 和 UDP 协议，具体为：

- DNS 在区域传输的时候使用 TCP 协议

    辅助域名服务器会定时(一般为 3 小时)向主域名服务器进行查询以便于了解数据是否有变动，如果有变动，会执行一次区域传送，进行数据同步，这时候使用 TCP 连接，因为数据同步传送的数据量比一个请求应答的数据量要多得多，同时 TCP 的可靠性也保证了数据的准确性。

- 其他时候使用 UDP 协议

    客户端向 DNS 服务器查询域名，一般返回的内容都不超过 512 字节，所以使用 UDP 查询即可。不用经过三次握手，这样 DNS 服务器的负载更低，响应更快。

### GET and POST

- GET 和 POST 方法的长度限制

    GET 方法提交的数据大小长度并没有限制，HTTP协议规范没有对 URL 长度进行限制(GET 参数带在 URL 后面)。这个限制是特定的浏览器及服务器对它的限制。

    POST是没有大小限制的。HTTP 协议规范也没有进行大小限制，起限制作用的是服务器的处理程序的处理能力。如 Tomcat 下可以配置 POST 大小或者取消 POST 的限制，某些数据(如 file) 只能由 POST 携带。

- GET 请求能够被 cache, POST 不进行缓存

- 获取一个网站的 GET 请求头部：`curl -I www.weigao.cc`: 只请求头部；如果要显示全部信息，使用 `-i`; 显示全部请求过程，使用 `-v`.

- 一个 POST 请求体的举例

    POST 请求可以分为 请求行、请求头、请求体。

### Request and Response

Request:

```html
GET /hello.txt HTTP/1.1
Host: www.mysite.com
Accept-Language: en
```

Response:

响应消息包括四部分：**状态行，消息报头，空行，响应正文**

```html
HTTP/1.1 200 OK
Content-Type: text/plain;charset=utf-8

--content here--
```

状态码包括：

- 1xx: 指示信息：表示请求已经接受，继续处理
- 2xx：成功消息
- 3xx：重定向
- 4xx：客户端错误：请求有语法错误或请求无法实现
- 5xx：服务器端错误

### TCP socket

[Code in Github](https://github.com/chenweigao/python_web/tree/master/socket)

Note that if the client is the type of `str`, the `encode()` it:

```python
message = "Current time is " + str(dt)
conn.send(message.encode())
```
