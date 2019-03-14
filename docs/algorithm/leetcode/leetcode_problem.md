# LeetCode Note

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>

最近在找工作，比较好的面试题目求解思路整理到这里来。

## DP

## Maximum Subarray -53

### Solution of slide window

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

### Solution of dp

这个题目的动态规划求解可能没有上述求解方法时间复杂度低，但是为了更深理解 dp 思想，故在此探索动态规划答案。

（参考《编程之美》的动态规划思路）

对于某序列 A 而言, 得出其动态规划状态转移方程：

`dp(A, i) = (dp(A, i - 1) > 0 ? dp(A, i - 1) : 0)+ A[i]`

并且可以进一步简化为：

`dp[i] = dp[i - 1] > 0 ? dp[i - 1] : 0  + A[i]`

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