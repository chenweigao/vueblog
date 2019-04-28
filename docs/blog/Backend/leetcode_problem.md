# LeetCode Note

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>

最近在找工作，比较好的面试题目求解思路整理到这里来。

## DP

### Maximum Subarray - LC53

#### Solution of slide window

[LeetCode 53: Maximun Subarray](https://leetcode.com/problems/maximum-subarray/)

题目要求大概是给定一个数组，求其上和最大的子数组。

```html
Input: [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
```

对于这个问题，扩展一下其实可以求出其最大的子数组为多少，而不仅仅是求和，其思路为：

- 设定两个值：
  - `max_so_far`: 存储最大值；

  - `max_ending_here`: 从哪个位置开始舍弃前面的数，记录下这个位置；

- 再设定两个变量 `s`: start, `e`: end；

- **由于数组中存在负数，所以和小于 0 的子数组均可被舍弃**；

- 然后计算 `max_ending_here = max_ending_here + nums[i]`: 每次从 `max_ending_here` 开始向后计算，直到找到比存储最大值的 `max_so_far` 大的值为止；

- 这时候更新 `max_so_far` 的值，返回即为要求的最大值。

代码如下：

```py {5-7,11,17-19}
class Solution:
    def dp(self, nums):
        max_so_far = nums[0]
        max_ending_here = nums[0]
        s = 0
        e = 0
        res = []
        for i in range(1, len(nums)): # 由于已设置初始值，故从 1 开始
            if max_ending_here < 0:
                max_ending_here = 0 # 小于 0 之前的全部被舍弃
                s = i

            max_ending_here = max_ending_here + nums[i]

            if max_ending_here > max_so_far:
                max_so_far = max_ending_here
                e = i
        for i in range(s, e + 1):
            res.append(nums[i])
        return max_so_far
```

注意到上述代码的深色部分，在计算最大值的时候是可以**舍弃**的（为了代码的简洁和运行效率）。

:::tip

如果要计算出本身的 subarry 的值，这时候只需要利用 `s` 和 `e` 的下标位置即可，代码中示例的 `res` 就是。

:::

#### Solution of dp

这个题目的动态规划求解可能没有上述求解方法时间复杂度低，但是为了更深理解 dp 思想，故在此探索动态规划答案。

（参考《编程之美》的动态规划思路）

对于某序列 A 而言, 得出其动态规划状态转移方程：

`dp(A, i) = (dp(A, i - 1) > 0 ? dp(A, i - 1) : 0)+ A[i]`

并且可以进一步简化为：

`dp[i] = dp[i - 1] > 0 ? dp[i - 1] : 0  + A[i]`

或者可以最终简化为：

`dp[i] = max(dp[i - 1] + A[i], A[i])`

简化后方便书写代码，但是不好理解，代码如下：

```py
def maxSubArrayDP(self, nums):

    dp = [0 for _ in range(len(nums))]
    dp[0] = nums[0]
    max = dp[0]

    for i in range(1, len(nums)):
        if dp[i - 1] < 0:
            dp[i] += nums[i]
        else:
            dp[i] = dp[i - 1] + nums[i]
        if max < dp[i]:
            max = dp[i]
    return max
```

### 0/1 Knapsack

[LC416 partition equal subset sum](https://leetcode.com/problems/partition-equal-subset-sum/)

题目要求大概是给定一个只存在正数的数组，能否把该数组拆分成两个子数组，使得两个子数组之和相等？

这是一个典型的 0/1 背包问题，问题可以转化为：**从该数组中取若干个元素，使得这些元素的和为数组总和的一半**

对于每一个元素而言，我们有两种选择：pick or not pick. 所以可以使用一个 bool 类型的 dp 数组：$dp(i, j)$ 的含义是**是否可以由前 i 个元素得到 j**，可以得到以下的递推公式：

- $dp(i, j) = dp(i - 1, j)$  选择不 pick 第 i 个元素

- $dp(i, j) = dp(i - 1, j - nums[i - 1])$  选择 pick 第 i 个元素，表示 j 由当前的 nums[i - 1] 组成，而之前的里面不包括 nums[i - 1]

## Binary Tree

### Level Order Traversal

[LC102 - Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/)

代码实现如下：

[Code GitHub - binary_tree](https://github.com/chenweigao/_code/blob/master/python/binary_tree.py)

```py
def levelOrder(root):
    '''
    二叉树的层次遍历
    '''
    if not root:
        return []

    result = [[root.data]]  # 存储层次遍历的结果
    current = [root]  # 存储当前层次内的节点，在循环里面更新

    while True:
        node_list = []  # 临时存储节点
        for node in current:  # 循环内遍历
            if node.left:
                node_list.append(node.left)
            if node.right:
                node_list.append(node.right)
        if node_list == []:
            break
        vals = [node.data for node in node_list]  # 拿出当前层次的节点的值
        result.append(vals)
        current = node_list  # 更新层次
    return result
```

这是目前可以写出的比较高效的一个算法，应当牢记。

## Linked List

### reverse linked list

- Iterative method

```py
def reverseList(self, head):

    preNode = None
    curNode = head

    while curNode is not None:
        next = curNode.next
        curNode.next = preNode
        preNode = curNode
        curNode = next

    return preNode
```

- Recursive method

 1) Divide the list in two parts - first node and rest of the linked list.
 2) Call reverse for the rest of the linked list.
 3) Link rest to first.
 4) Fix head pointer

由于迭代较快，故建议经常使用迭代法。

### intersection of linked list

判断两个链表是否有交叉(Intersection), LC160.

实现思路有：

- 根据链表是否有环判断

先遍历一个链表找到其尾部，然后将尾部的 next 指针指向另一个链表，这样子两个链表就合成了一个链表，判断原来的两个链表是否有交叉也就变成了判断一个**单链表是否有环**。

找出交点的方法是，遍历两个链表，长度较长的链表指针向后移动 |len1 - len2| 个单位，然后开始遍历两个链表，判断节点是否相等（节点的地址）。

- 根据总结的规律判断

该方法比较巧妙，代码如下：

```py
def getIntersectionNode(self, headA, headB):
    if headA is None or headB is None:
        return None

    pa = headA
    pb = headB

    while pa is not pb:
        pa = headB if pa is None else pa.next
        pb = headA if pb is None else pb.next

    return pa
```

核心思路在于，同时遍历两个链表，如果到链表结束，则将指针指向另一个链表，遍历直到两个移动的指针相等。

:::tip 判断单链表是否有环

一般判断单链表是否有环的方法是设置一块一慢两个指针，看其是否会相等。

:::

## HashMap in Python

### Counter object

```py
from collections import Counter
```

在腾讯面试的过程中，被问到了一个题目，要求找出一个数组中第一个单独出现的数字，例如 [2, 4, 2, 3, 1, 3], 则结果应该是 4.

题目如果用 hashmap 去求解的话只需要：

```py

from collections import Counter
nums = [2, 4, 2, 3, 1, 3]

nums_counter = Counter(nums)

res = min(nums_counter, key = nums_counter.get)

```

`Counter` 为 Python 内置的 hashmap, 具体可以查询 [Counter](https://docs.python.org/3/library/collections.html#collections.Counter), 对于那个排序而言，`key` 会指定一个函数用于元素的比较，`nums_counter.get()` 方法用于得到某个 key 的 value 值。

## String

### Get All Substring

对于字符串运算中，获得所有的子串并进行操作是很常见的问题，故将代码总结如下：

```py
def getAllSubstring(s):
    n = len(s)
    return [s[i:j + 1] for i in range(n) for j in range(i, n)]
```

generator 版本：

```py
def getAllSubstring(s):
    length = len(s)
    for i in range(length):
        for j in range(i + 1, length + 1):
            yield(s[i:j])

print([_ for _ in getAllSubstring('aaab')])
```

### Is Palindromic Substrings

比较常用的方法为动态规划判定法：

```py {5}
def longestPalindrome(s):
    dp = [[0 for _ in range(len(s))] for _ in range(len(s))]
    for i in range(n - 1, -1, -1):
        for j in range(i, n):
            dp[i][j] = s[i] == s[j] and (j - i < 3 or dp[i + 1][j - 1])

            if dp[i][j] and (res == '' or j - i + 1 > len(res)):
                res = s[i:j+1]

    return res
```

上述代码为求最长回文子串的代码，核心状态转移公式为第 5 行重点部分，如果是会问子串的话，则 $S_{ij}$ , 对应的 `dp[i][j]` 的值为 1.

:::warning formula

dp(i, j) = true, if $S_{ij}$ 是回文串。

dp(i, j) = false, otherwise.

=> dp(i, j) = { dp(i + 1, j - 1) and $S_i$ == $S_j$ }

so,

dp(i, j) = true

dp(i, i + 1) = ($S_i$ == $S_{i+1}$)
:::

### longest Palindrome

经过优化后，有一种简单的 Python 解法：

```py
class Solution:
    def longestPalindrome(self, s):
        res = ''
        for i in range(len(s)):
            res = max(self.helper(s, i, i), self.helper(
                s, i, i + 1), res, key=len)
        return res

    def helper(self, s, l, r):
        while l >= 0 and r < len(s) and s[l] == s[r]:
            l -= 1
            r += 1
        return s[l + 1:r]

print(Solution().longestPalindrome('cbbd'))
```

### Reverse String

将一个字符串翻转，可以实现的方法有：

1. 递归实现

2. 前后双指针交换，该方法速度较快

```cpp
void helper(int index, string str)
{
    if (index >= str.length())
    {
        return;
    }
    helper(index + 1, str);
    putchar(str[index]);
}
void printReverse(string str)
{
    helper(0, str);
}

void reverseStringInplace(vector<char> &s)
{
    int start = 0, end = s.size() - 1;
    while (start < end)
    {
        swap(s[start++], s[end--]);
    }
}
```

代码详情可以[参考这里](https://github.com/chenweigao/_code/blob/b23fb3b74e/cpp/recursion_reverse_string.cpp)