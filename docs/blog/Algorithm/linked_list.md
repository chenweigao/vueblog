# Linked List

[[toc]]

## Basic Implement

### revrse

> 输入一个链表，反转链表后，输出新链表的表头。

#### 递归解法

```py
class Solution:
    # 返回ListNode
    def ReverseList(self, head):
        # write code here
        if not head or not head.next:
            return head
        # p 是尾节点
        p = self.ReverseList(head.next)
        head.next.next = head
        head.next = None
        return p
```

这是链表反转的递归解法，其中 p 存在的意义相当于一个要返回的尾节点。

[leetcode 206 解析](https://leetcode-cn.com/problems/reverse-linked-list/solution/fan-zhuan-lian-biao-by-leetcode/)

#### 迭代方法

```py
class Solution(object):
    def reverseList(self, head):
        pre = None # 这个 None 不好理解的话拿一个中间节点看
        cur = head

        while cur is not None:
            next = cur.next  # 存储 cur 的下一个节点，避免下次找不到
            cur.next = pre  # 指向前面的节点
            pre = cur  # 向后遍历
            cur = next  # 向后遍历
        return pre
```

总结起来迭代方法主要完成了以下的事情：

1. 存储当前节点(cur)的 next 节点
2. 当前节点的 next 指向其前节点
3. 前节点 pre 和当前节点 cur 后移
4. 返回 pre 节点

## Problem

### 链表逆序存储到数组

> 输入一个链表，按链表从尾到头的顺序返回一个ArrayList。

#### 1. 递归实现

这种题目使用递归实现比较优雅：

```py
class Solution:
    def __init__(self):
        self.ret = []

    def printListFromTailToHead(self, head):
        if head:
            if head.next:
                self.printListFromTailToHead(head.next)
            self.ret.append(head.val)
        return self.ret
```

注意到这里的核心是要创建一个全部变量供递归调用。

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

### 链表中倒数第 k 个节点

> 输入一个链表，输出该链表中倒数第k个结点。

这道题目可以使用快慢指针的方法：

```py
class Solution:
    def FindKthToTail(self, head, k):
        if not head or k <= 0:
            return None
        slow = head
        fast = head
        while k > 1:
            if fast.next:
                fast = fast.next
                k -= 1
            else:
                return None

        while fast.next:
            fast = fast.next
            slow = slow.next
        return slow
```

注意：  

1. 不要忘记判断异常条件
2. 快指针先走 k-1 步，然后再一起走，当快指针为最后一个时，慢指针就为倒数第 k 个

### 合并两个排序的链表

> 输入两个单调递增的链表，输出两个链表合成后的链表，当然我们需要合成后的链表满足单调不减规则。

给出较为简洁的递归解法：

```py
class Solution:
    # 返回合并后列表
    def Merge(self, list1, list2):
        # write code here
        if not list1:
            return list2
        if not list2:
            return list1
        if list1.val <= list2.val:
            list1.next = self.Merge(list1.next, list2)
            return list1
        else:
            list2.next = self.Merge(list1, list2.next)
            return list2
```


