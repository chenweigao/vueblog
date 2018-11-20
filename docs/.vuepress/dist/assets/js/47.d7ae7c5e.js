(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{346:function(e,t,s){"use strict";s.r(t);var a={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},r=s(4),i=Object(r.a)(a,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.slotKey}},[s("p",[e._v("An application consists of one or more processes. A process, in the simplest terms, is an executing program. One or more threads run in the context of the process. A thread is the basic unit to which the operating system allocates processor time. A thread can execute any part of the process code, including parts currently being executed by another thread.\n")]),e._v(" "),s("h1",{attrs:{id:"thread-and-process"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#thread-and-process","aria-hidden":"true"}},[e._v("#")]),e._v(" Thread and Process")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("What is "),s("em",[e._v("process")]),e._v("?")]),e._v(" "),s("p",[e._v("A "),s("em",[e._v("process")]),e._v(", in simplest terms, is an executing program.")])]),e._v(" "),s("li",[s("p",[e._v("What is "),s("em",[e._v("thread")]),e._v("?")]),e._v(" "),s("p",[e._v("One or more threads run in the context of the process. A "),s("em",[e._v("thread")]),e._v(" is the basic unit to which the operating system allocates processor time. A thread can execute any part of the process code, including parts currently being executed by another thread.")])]),e._v(" "),s("li",[s("p",[s("em",[e._v("threading pool")])]),e._v(" "),s("p",[e._v("A "),s("em",[e._v("thread pool")]),e._v(" is a collection of worker threads that efficiently execute asynchronous callbacks on behalf of the application. The thread pool is primarily used to reduce the number of application threads and provide management of the worker threads.")])]),e._v(" "),s("li",[s("p",[e._v("About Process and Threads")]),e._v(" "),s("ol",[s("li",[e._v("All threads of a process share its "),s("em",[e._v("virtual address")]),e._v(" space and "),s("em",[e._v("system resources")]),e._v(".")]),e._v(" "),s("li",[e._v("Each process is started with a single thread, often called the primary thread, but can create additional threads from any of its threads.")])])]),e._v(" "),s("li",[s("p",[e._v("Multitasking")]),e._v(" "),s("p",[e._v("There are two ways to implement multitasking: as a "),s("em",[e._v("single process with multiple threads")]),e._v(" or as "),s("em",[e._v("mutiple process")]),e._v(", each with one or more threads.")]),e._v(" "),s("p",[e._v("It is typically more efficient for an application to implement multitasking by creating a single, multithreaded process, rather than creating multiple processes, for the following reasons:")]),e._v(" "),s("ul",[s("li",[e._v("The system can perform a context switch more quickly for threads than processes, because a process has more overhead than a thread does (the process context is larger than the thread context).")]),e._v(" "),s("li",[e._v("All threads of a process share the same address space and can access the process's global variables, which can simplify communication between threads.")]),e._v(" "),s("li",[e._v("All threads of a process can share open handles to resources, such as files and pipes.")])])])]),e._v(" "),s("ul",[s("li",[e._v("线程的状态？")]),e._v(" "),s("li",[e._v("锁和死锁")])]),e._v(" "),s("h3",{attrs:{id:"进程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进程","aria-hidden":"true"}},[e._v("#")]),e._v(" 进程")]),e._v(" "),s("p",[e._v("早期的计算机只能够做一件事，直到冯洛伊曼提出了“存储程序”的思想")]),e._v(" "),s("ul",[s("li",[e._v("PCB: 进程控制块")]),e._v(" "),s("li",[e._v("MMU")]),e._v(" "),s("li",[e._v("分页（程序的局部性原理）")])]),e._v(" "),s("h3",{attrs:{id:"tcp-ip"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tcp-ip","aria-hidden":"true"}},[e._v("#")]),e._v(" TCP/IP")]),e._v(" "),s("ul",[s("li",[e._v("三次握手")]),e._v(" "),s("li",[e._v("滑动窗口")])]),e._v(" "),s("h3",{attrs:{id:"cpu"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cpu","aria-hidden":"true"}},[e._v("#")]),e._v(" CPU")]),e._v(" "),s("ul",[s("li",[e._v("DMA")]),e._v(" "),s("li",[e._v("缓存（程序的局部性原理）")]),e._v(" "),s("li",[e._v("流水线\n取指定 - 翻译指令 - 执行 - 把结果写回内存")])])])},[],!1,null,null,null);i.options.__file="coder.md";t.default=i.exports}}]);