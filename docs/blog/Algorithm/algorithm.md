# Algorithm Analysis and Design

## Asymptotic Growth

### O-notation

- O-notation(Bog-O), When we say “the running time is $O(n^2)$” we mean that the worst-case running time is $O(n^2)$ – the best case might be better. (渐进上界)

- When we say the running time is $\Omega (n^2)$ we mean that the best-case running time is $\Omega (n^2)$ – the worst case might be worse.(渐进下界)

- Substitution method
- Recursion-tree method
- Master method

:::tip Simplified Master Theorem
Let $a \geq 1$ and $b > 1$ be constants

Let $T(n)$ be the recurrence $T(n) = aT(\frac{n}{b}) + cn^k$, defined for $n \geq 0$.

1. If $a > b^k$, then $T(n) = \Theta(n^ {log_{a}b})$.
2. If $a = b^k$, then $T(n) = \Theta(n^ k{logn})$.
3. If $a < b^k$ then $T(n) = \Theta(n^k)$.
:::

## Math


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

$dp(A, i) = (dp(A, i - 1) > 0 ? dp(A, i - 1) : 0) + A[i]$

并且可以进一步简化为：

$dp[i] = dp[i - 1] > 0 ? dp[i - 1] : 0  + A[i]$

或者可以最终简化为：

$dp[i] = max(dp[i - 1] + A[i], A[i])$

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

### Climbing Stairs

[可以参考这个文章对于该问题的讲解](https://mp.weixin.qq.com/s?__biz=MzUyNjQxNjYyMg==&mid=2247484350&idx=1&sn=fc88aa125f5a5269575b4c4d83774f41&chksm=fa0e6c3fcd79e5297257a05b8c75898b4059b1193956c702ff5ef3f2d8d46432bb7484bf6428&token=110841213&lang=zh_CN#rd)

[Leetcode 70](https://leetcode.com/problems/climbing-stairs/)

使用动态规划的思想，思路可以是：

可以根据第一步的走法把所有走法分为两类：

1. 第一类是第一步走了 1 个台阶

2. 第二类是第二步走了 2 个台阶

所以 n 个台阶的走法就等于先走 1 阶后， n-1 个台阶的走法，然后加上先走 2 阶后， n-2 个台阶的走法，用公式表示就是：

$f(n) = f(n - 1) + f(n - 2)$

很容易知道，当有一个台阶的时候 `f(1) = 1`, 两个台阶的时候 `f(2) = 2`.

所以可以写出代码：

```py
def climbStairs(n: int) -> int:
    if n == 1:
        return 1
    if n == 2:
        return 2
    return climbStairs(n - 1) + climbStairs(n - 2)
```

该算法算法计算相当于计算了一个高为 N-1 的二叉树，所以其时间复杂度近似看做 $O(2^N)$

但是这样的递归写法很容易产生重复计算，我们可以采用自底向上的写法避免这种情况：

| 台阶数 |  1   |  2   |    3     |     4     |     5     |
| :----: | :--: | :--: | :------: | :-------: | :-------: |
| 走法数 |  1   |  2   | 1+ 2 = 3 | 2 + 3 = 5 | 3 + 5 = 8 |

从表格中可以看出，由前往后计算只需要一次计算，然后返回最后一个值就可以了，代码实现如下：

```py
def climbStairs(n):
    if n == 1:
        return 1
    dp = [0 for _ in range(n)]
    dp[1] = 1
    dp[2] = 2
    for i in range(3, n + 1):
        dp[i] = dp[i - 1] + dp[i - 2]
    return dp[n]
```

该方法的时间复杂度为 $O(n)$, 空间复杂度为 $O(1)$.

进而会有一个更深层次的问题为，假设上每一层楼都有消耗，而消耗完之后可以选择上 1 阶或者 2 阶，现在需要求解爬上楼顶的最少消耗，下标从 0 开始，爬上楼顶意味着需要经过 n-1 层到达 n 层以后。

代码实现为：

```py
def minCostClimbingStairs(cost: List[int]) -> int:
    n = len(cost)
    dp = [0 for _ in range(n)]
    dp[0] = cost[0]
    dp[1] = cost[1]

    for i in range(2, n):
        dp[i] = cost[i] + min(dp[i - 1], dp[i - 2])


    return min(dp[n - 1], dp[n - 2])
```

对比代码好好理解其动态规划的思想。
