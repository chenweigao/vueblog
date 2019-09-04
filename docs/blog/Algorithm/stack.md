# Stack

[[toc]]

## Abstract

## Problems

### 用两个栈实现一个队列

这是面试中的经典问题，应当熟练掌握。

[Leetcode 232](https://leetcode.com/problems/implement-queue-using-stacks/)

所谓两个栈实现一个队列，应当是指实现队列的 **尾插** 和 **头删** 两个操作。

我们定义两个栈 S1 和 S2：

- S1：只进行插入数据
- S2：删除 S1 中的数据

！注意 S2 不为空时不要从 S1 中添加数据，类似于下图三的情况。

![stcak_queue](/stack_queue.jpg)

代码实现如下，思路就是使用两个栈，一个做插入，一个做删除：

```py
# -*- coding:utf-8 -*-
class Solution:
    def __init__(self):
        self.s1 = []
        self.s2 = []
    def push(self, node):
        self.s1.append(node)
    def pop(self):
        if self.s2 == []:
            while self.s1:
                self.s2.append(self.s1.pop())
            return self.s2.pop()
        return self.s2.pop()
```

### 用两个队列实现一个栈




### 括号匹配

### 后缀表达式
