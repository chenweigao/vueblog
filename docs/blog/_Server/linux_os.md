# Operating System

## Thread and Process

1. 进程

    进程是程序的一次执行过程，是一个动态概念，是程序在执行过程中分配和管理资源的基本单位，每一个进程都有自己的一个地址空间，至少有 5 种基本状态，他们分别是：初始态，就绪态，执行态，等待态，终止态。

2. 线程

    线程是 CPU 调度和分派的基本单位，它可以与同属一个进程的其他线程共享进程所拥有的全部资源。

3. 联系

    线程是进程的一部分，一个线程只能属于一个进程，而一个进程可以有多个线程，但至少有一个线程。

4. 区别

    根本区别：进程是操作系统资源分配的基本单位，而线程是任务调度和执行的基本单位。

    开销方面：每个进程都有独立的代码和数据空间（进程上下文），程序之间切换会有较大的开销；线程可以看做轻量级的进程，同一类线程共享代码和数据空间，每一个线程都有自己独立的 **运行栈** 和 **程序计数器（PC）**，线程之间的切换开销小。

    内存分配：系统在运行时为每个进程分配不同的内存空间；而对线程而言，除了 CPU 外，系统不会为线程分配内存，线程组之间只能共享资源。

    包含关系：没有线程的进程可以看做是单线程的，如果一个进程内有多个线程，则执行过程是多个线程共同完成的；线程是进程的一部分，所以线程也被成为轻量级进程。

5. 并发和隔离

    操作系统中有两个重要的概念：并发和隔离。

    并发是为了尽量让硬件利用率高，线程是为了在系统层面做到并发，线程上下文切换效率比进程上下文切换效率高很多，这样可以提高并发效率。

    隔离是并发以后要解决的重要问题，计算机的资源一般是共享的，隔离能保障资源的回收，不影响其他代码的使用。

## 多进程

### fork()

程序运行时操作系统会创建一个进程，并为它分配资源，然后把该进程放入就绪队列，进程调取器选中的话就为该进程分配 CPU 时间，程序真正开始运行。

Linux使用 `fork()` 来创建子进程，其返回值的含义是：

- 负数：创建子进程失败

- 0： 返回在子进程中

- 正数：返回在父进程中，该正数为新创建的子进程的 pid

注意到 fork 函数在调用之后会返回**两次**, 他在调用进程中(称为父进程)中返回一次，返回值是新派生进程(子进程)的进程 ID 号；在子进程中又返回一次，进程号为 0。因此，返回值本身告知当前进程是子进程还是父进程。

fork 在子进程返回 0 而不是父进程的进程 ID 的原因在于：任何子进程只有一个父进程，而且子进程总是可以通过 getppid 取得父进程的进程 ID。相反，父进程可以有很多个子进程，而且无法获得各个子进程的进程 ID。如果父进程想跟踪所有子进程的进程 ID，那么它必须记录每次调用 fork 的返回值。

注意子进程结束时，父进程应当回收子进程，不然子进程会变成僵尸进程。

Linux 下查看僵尸进程使用 `top` 命令，其中的 `zombie` 前的数量就代表僵尸进程的数量。

问题：连续调用三次 `fork()`, 会返回几个进程？

答：2^3 个。

多进程相比于多线程而言更加健壮，因为多线程程序只要有一个线程奔溃，整个进程也会奔溃，而一个进程奔溃并不会对另一个进程造成影响，因为进程拥有自己的地址空间。

### exec()

fork 有两种典型用法：

1. 一个进程创建自身的副本，这样每个副本都可以在另一个副本执行其他任务的同时处理各自的某个操作。网络服务器一般都用这个方法。

2. 一个进程想要执行另外一个程序。该进程调用 fork 创建一个自身的副本，然后其中一个副本(通常为子进程)调用 exec 把自身替换成新的程序。shell 就是使用的这个方法。

exec 函数有 6 个，但是只有 execve 是内核中的系统调用，其他 5 个都是调用 execve 的库函数。

## 进程间通信

进程间通信（IPC）的方式包括：信号，管道，共享内存，消息队列，信号量，封装的有 TCP/IP 套接字。

[代码实现可以参考 GitHub](https://github.com/chenweigao/multi_thread_and_process)

### 命名管道 FIFO

用到 `sys/stat.h`, `unistd.h`, `linux/stat.h` 等头文件。

命名管道变编程使用 `FILE` 对象，和文件读写的操作很相似，创建 FIFO 使用：

`mkfifo(FIFO_FILE, 0666)`:

- FIFO_FILR 为宏定义的文件名：`#define FIFO_FILE "MYFIFO"`

- 返回值小于 0 则说明命名管道存在

- 返回值大于 0 则说明创建命名管道成功

- `0666` 代表权限。在此对权限进行以下说明：

  |  读  |  写  | 执行 |
  | :--: | :--: | :--: |
  |  4   |  2   |  1   |

    从表格中可以看出， `6`  代表的含义为 4 + 2, 为读和写。四位数字代表特殊权限位，拥有者位，同组用户位，其余用户位。

要进行命名管道的通信，则使用一个 buff 读取文件指针，例如：

`FILE* fp = fopen(FIFO_FILE, "r")` 打开命名管道；

`fgets(readbuf, 80, fp)` 读取命名管道，相应的，可以使用 `fputs()` 写入命名管道。

### IPC 消息

用到 `sys/ipc.h`, `sys/msg.h` 等头文件。

创建一个 ipc 消息的方式一般为：

`int msgid = msgget((key_t)1234, 0666|IPC_CREAT);`

返回值说明如下：

- 返回 -1：创建失败

- 否则，成功创建，该消息的 id 为 1234

接收和发送消息使用：

- `msgrcv(msgid, data, BUFSIZE, 0, 0)`: 返回 -1 则失败，否则接收到消息值 data.

- `msgsnd(msgid, data, BUFSIZE, 0)`: 返回 -1 则失败，否则发送消息。

### 共享内存

用到 `sys/ipc.h`, `sys/shm.h` 头文件。

创建一个共享内存的方式一般如下：

`int shmid = shmget((key_t)1234, 256, 0666|IPC_CREAT)`:

- 返回负数：`shmget` 失败

`char *shmptr = shmat(shmid, 0, 0)`:

- 返回 -1：失败

然后使用 `strcpy` 将 `shmptr` 拷贝出来或者拷贝出去：

- write: `strcpy(shmptr, char* text)`

- read: `strcpy(buf, shmptr)`

## SSH

```bash
sudo ssh-keygen -t rsa -f /etc/ssh/ssh_host_rsa_key
sudo service ssh start
```

```bash
sudo apt-get install openssh-server
#ssh config
/etc/ssh/sshd_config
```

start server:

```bash
sudo service ssh restart/start
```

A bug:

```bash
sudo ssh-keygen -t rsa -f /etc/ssh/ssh_host_ed25519_key
```

## Python File Server

```bash
python -m http.server
#default port: 8000

python -m http.server 80
#in port 80
```

## Program Status

```bash
echo $?

echo %ERRORLEVEL%
#windows
```

---

:::tip Shell

This is a basic note about Linux shell, I have wrote plenty of bash shell,  which helps solve problem easily.

Include **system information, SSH, read -p, shell array, sed, AWK**

:::

## System Information

Sometimes, you may want to see the system kernel version, 2 ways are available :

```bash
lsb_release -a
cat /etc/issue
```

change password for a user:

```bash
sudo passwd root
```

echo current time as a file name:

```bash
echo test >> $(date -d "today" +"%Y%m%d_%H%M%S").txt 
# work log
git log -4 > log/$(date -d "today" +"%Y%m%d").txt
```

## Add Choice for User - Read -p

`read -p` is very useful for  this, for example:

```bash
read -n1 -p "What is your system version? 
1: Ubuntu 16.04;
2: Ubuntu 17.10;
3: Ubuntu 18.04;
choose a number between 1, 2 and 3: " answer
case $answer in
1) ...;;
2) ...;;
3) ...;;
esac
```

*Tips* :

- `-n1` : -n and 1 are used together, which means `read` commmand will quit when system accept a single character, no need for Enter.
- `-s` : this options will avoid displaying user *passwords* on the screen.
- `-t 5`: overtime option, this means that user must complete the input within 5 seconds.

## Shell Array

```bash
arrayName=(array_content)
#get the content of arrary, or [*]
echo ${arraryName[@]}
#get the size of array
echo ${#arrayName[*]}
```

## Sed

```bash
current_plugins_version=$(dpkg -s picoscenes-plugins-demo-rxsbroadcaster-chronos | grep Version | sed 's/Version: //g')
```

This is a basic use of sed, `sed 's/Version: //g'` means that a select:

``` shell
Version: 18.0406.2333
```

Output is:

``` shell
18.0406.2333
```

That means **replace** "Version:  " with **empty**.

To replace the string in the file, use `-i`:

```bash
sudo sed -i 's/GRUB_HIDDEN_TIMEOUT=0/#GRUB_HIDDEN_TIMEOUT=0/g'  /etc/default/
```

This is an example that we do the CSI experiment, update the `~/etc/default/grub` make the new kernel version could be seen.

## tr and awk

`tr` 可以理解为`sed`的简化版本

Usage: `tr [OPTION]... SET1 SET2`

- -c, -C, --complement: use the complement of SET1(不常用)

- -d, -delete: delete characters in SET1

- -s: replace each sequence of a repeated character, 删除所有重复出现字符序列，只保留第一个

```bash
#将所有的the替换为my
tr -s 'the' 'my'
tr -s ' ' '\n'

#删除所有的the
tr -d 'the'

#小写变大写
tr [a-z] [A-Z]

#删除连续的重复字母
tr -s [a-zA-Z]
```

[AWK Tutorial](https://www.tutorialspoint.com/awk)

```bash
which awk
$ usr/bin/awk
```

display the complete content of the files using AWK:

```bash
awk '{print}' xx.txt
```

AWK script:

create a text file `command.awk` containing the AWK command:

```bash
{print}
```

the use it:

```bash
awk -f command.awk xx.txt
```

Options:

```bash
# -v option
awk -v name=Jerry 'BEGIN{printf "Name = %s\n", name}'

awk --help
```

print column:

```bash
awk '{print $3 "\t" $4}' marks.txt

# or in any order
awk '{print $4 "\t" $3}' marks.txt
```

there we print the third and the fourth fields.

```bash
awk '/a/ {print $4 "\t" $3}' marks.txt
```

the pattern, only print 4 lines:

```bash
awk '/a/{++cnt} END {print "Count = ", cnt}' marks.txt
# Count = 4(where the marks.txt has 5 lines)
```

> **$0** variable stores the entire line and in the absence of a body block, default action is taken, i.e., the print action.

## tar

解压一般的 tag.gz:

```bash
tar -xzvf [file]
```

解压 xz：

```bash
xz -d *.tar.xz
tar -xvf *.tar
```

## 查看端口号

查看端口被哪个进程占用：

```bash
lsof -i:80
```

或者

```bash
netstat -tunlp | grep 80
```

