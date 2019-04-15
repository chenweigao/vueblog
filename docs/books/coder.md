---
title: Coder Book
description: Computer Basic Knowledges
---

An application consists of one or more processes. A process, in the simplest terms, is an executing program. One or more threads run in the context of the process. A thread is the basic unit to which the operating system allocates processor time. A thread can execute any part of the process code, including parts currently being executed by another thread.
<!-- more -->

## Thread and Process

回答面试中进程和线程的问题：

1. 进程

    进程是程序的一次执行过程，是一个动态概念，是程序在执行过程中分配和管理资源的基本单位，每一个进程都有自己的一个地址空间，至少有 5 种基本状态，他们分别是：初始态，就绪态，执行态，等待态，终止态。

2. 线程

    线程是 CPU 调度和分派的基本单位，它可以与同属一个进程的其他线程共享进程所拥有的全部资源。

3. 联系

    线程是进程的一部分，一个线程只能属于一个进程，而一个进程可以有多个线程，但至少有一个线程。

4. 区别

    根本区别：进程是操作系统资源分配的基本单位，而线程是任务调度和执行的基本单位

MSDN 上的总结如下：

1. What is *process*?

    A *process*, in simplest terms, is an executing program.

2. What is *thread*?

    One or more threads run in the context of the process. A *thread* is the basic unit to which the operating system allocates processor time. A thread can execute any part of the process code, including parts currently being executed by another thread.

3. *threading pool*

    A *thread pool* is a collection of worker threads that efficiently execute asynchronous callbacks on behalf of the application. The thread pool is primarily used to reduce the number of application threads and provide management of the worker threads.

4. About Process and Threads

    1. All threads of a process share its *virtual address* space and *system resources*.
    2. Each process is started with a single thread, often called the primary thread, but can create additional threads from any of its threads.

5. Multitasking

    There are two ways to implement multitasking: as a *single process with multiple threads* or as *mutiple process*, each with one or more threads.

    It is typically more efficient for an application to implement multitasking by creating a single, multithreaded process, rather than creating multiple processes, for the following reasons:
    - The system can perform a context switch more quickly for threads than processes, because a process has more overhead than a thread does (the process context is larger than the thread context).
    - All threads of a process share the same address space and can access the process's global variables, which can simplify communication between threads.
    - All threads of a process can share open handles to resources, such as files and pipes.

- 线程的状态？
- 锁和死锁

### 进程

早期的计算机只能够做一件事，直到冯洛伊曼提出了“存储程序”的思想

- PCB: 进程控制块
- MMU
- 分页（程序的局部性原理）

## TCP/IP Socket

对于端口号的解释:

1. TCP是**进程间通信**，所以需要Port,不使用进程号是因为进程号是**动态**的，服务器重启后发生改变，故使用Port
2. 客户端的端口号由操作系统自动分配

:::tip Socket的简单理解
由于TCP协议十分复杂，程序员没有必要重复开发，操作系统需要抽象出一个概念，让上层应用去编程，这就是Socket
:::

### TCP/IP

- 三次握手
- 滑动窗口

### CPU

- DMA
- 缓存（程序的局部性原理）
- 流水线
  取指定 - 翻译指令 - 执行 - 把结果写回内存
- 多cpu多线程
