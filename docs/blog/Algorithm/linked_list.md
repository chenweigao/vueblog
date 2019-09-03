# Linked List

[[toc]]

## Basic Implement


## Problem

### 链表逆序存储到数组

> 输入一个链表，按链表从尾到头的顺序返回一个ArrayList。

#### 1. 递归实现

这种题目使用递归实现比较优雅：

#### 2. 翻转数组

这种方法比较直观，先按序存储到数组中，然后再把数组逆序：

```py
def printListFromTailToHead(self, listNode):
    # write code here
    res = []
    cur = listNode
    while cur:
        res.append(cur.val)
        cur = cur.next
    return res[::-1]
```

#### 3. 使用堆栈

利用栈的先进后出特性，把结果存到一个栈中，在 Python 中这种方式和上述解法差不多。
