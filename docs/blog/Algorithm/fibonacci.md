# Fibonacci

## Summary

> 斐波那契数列：1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...  
> 如果设F(n）为该数列的第n项（n∈N*），那么这句话可以写成如下形式：F(n)=F(n-1)+F(n-2)

### Recursive approach

使用递归法，时间复杂度 O(n^2)，空间复杂度 O(n)

```py
def fib_recur(n):
    if n < 2:
        return  n
    return fib_recur(n-1) + fib_recur(n-2)
```

### Dynamic programmming approach <Badge text="reco" type="tip"/>

使用 DP, 时间复杂度和空间复杂度均为 O(n)

```py
def fib_dyn(n):
    if n < 2:
        return n
    memo = [-1 for i in range(n+1)]
    # 使用 range(n) 会数组越界
    memo[0] = 0
    memo[1] = 1
    for i in range(2, n + 1):
        memo[i] = memo[i - 1] + memo[i - 2]
    return memo[n]
```

### Recursion of Memoization

Memoization of Fibonacci:

The Python code is:

```py
def fib(N):
    cache = {}
    def recur_fib(N):
        if N in cache:
            return cache[N]
        if N < 2:
            result = N
        else:
            result = recur_fib(N - 1) + recur_fib(N - 2)

        cache[N] = result
        return result
    return recur_fib(N)
```

### Imperative approach

使用公式，时间复杂度 O(n), 空间复杂度 O(1)

```py
def fib_imp(n):
    if n < 2:
        return n
    a = 0
    b = 1
    for i in range(1, n):
        a, b = b, a + b
    return b
```

## Extend

### 跳台阶游戏

> 一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法（先后次序不同算不同的结果）。

这是一个换了个考法的斐波那契数列问题：

第一次跳台阶只有两种选择：

- 跳 1 阶，则剩余的跳法为 f(n-1)
- 跳 2 阶，则剩余的跳法为 f(n-2)

所有的跳法就是 f(n-1) + f(n-2), 是不是和斐波那契数列一模一样？至此，就可以使用斐波那契数列的三种解法解决这个问题，只需要注意边界条件即可。

```py
class Solution:
    def jumpFloor(self, n):
        # write code here
        if n < 2:
            return n
        a = 1
        b = 1
        for i in range(1, n):
            a, b = b, a + b
        return b
```

扩展问题：
> 一只青蛙一次可以跳上1级台阶，也可以跳上2级……它也可以跳上n级。求该青蛙跳上一个n级的台阶总共有多少种跳法。

```py
class Solution:
    def jumpFloorII(self, n):
        # write code here
        if n <= 1:
            return n
        return 2 ** (n-1)
```

### 矩形覆盖

> 我们可以用 $2*1$ 的小矩形横着或者竖着去覆盖更大的矩形。请问用 n 个 $2*1$ 的小矩形无重叠地覆盖一个 $2*n$ 的大矩形，总共有多少种方法？

矩形覆盖无非就是两种情况：

1. 刚好填满一列：

|  √   |      |      |      |      |      |      |      |
| :--: | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
|  √   |      |      |      |      |      |      |      |

2. 横向需要两个填满两列：

|  √   |  √   |      |      |      |      |      |      |
| :--: | :--: | ---- | ---- | ---- | ---- | ---- | ---- |
|  ×   |  ×   |      |      |      |      |      |      |

这两种方式都可以实现填满，那么总的方式 $f(n) = f(n-1) + f(n-2)$ ，$f(n-1)$  为方法1，填满其中的一列，剩余 $n-1$ 列，$f(n-2)$ 为方法2，填满其中的两列，剩余 $n-2$ 列。

所以代码的编写就和斐波那契数列相同。