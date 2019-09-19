# Python Coroutines

## Why Coroutiones

- Python 的多线程不能利用多核CPU

因为 GIL（全局解释器锁）, python 只有一个 GIL, 运行时只有拿到这个锁才能执行，同一时间只有一个获得 GIL 的线程在跑，其他线程都在等待状态。

相当于每个 CPU 在同一时间只能执行一个线程。

## 计算密集和I/O 密集

### 计算密集型

也叫 CPU 密集型，主要特点是要进行大量的计算，消耗CPU资源，比如计算圆周率、对视频进行高清解码等等，全靠CPU的运算能力。这种计算密集型任务虽然也可以用多任务完成，但是任务越多，花在任务切换的时间就越多，CPU 执行任务的效率就越低，所以，要最高效地利用 CPU，计算密集型任务同时进行的数量应当等于 CPU 的核心数。

计算密集型任务由于主要消耗 CPU 资源，因此，代码运行效率至关重要。Python 这样的脚本语言运行效率很低，完全不适合计算密集型任务。对于计算密集型任务，最好用 C 语言编写。

### I/O 密集型

IO 密集型涉及到网络、磁盘 IO 的任务都是 IO 密集型任务，这类任务的特点就是 CPU 消耗很少，任务大部分时间都在等待 IO 操作完成。

## Python 多线程结论

综上，Python 多线程相当于单核多线程。

多线程有两个好处：CPU 并行，IO 并行，单核多线程无法使用多核 CPU，所以在 Python中不能使用多线程来使用多核。

## 并发和并行

### 并发
