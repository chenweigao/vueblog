---
title: Coder Book
description: Thread and Process
---

An application consists of one or more processes. A process, in the simplest terms, is an executing program. One or more threads run in the context of the process. A thread is the basic unit to which the operating system allocates processor time. A thread can execute any part of the process code, including parts currently being executed by another thread.
<!-- more -->

# Thread and Process

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

### TCP/IP

- 三次握手
- 滑动窗口

### CPU

- DMA
- 缓存（程序的局部性原理）
- 流水线
  取指定 - 翻译指令 - 执行 - 把结果写回内存
