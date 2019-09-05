# Slide Window Algorithm

双指针技术可以解决很多问题，在面试中往往能成为加分项。

## Problems

### 和为 S 的连续正数序列

遇到连续序列，应当要想到双指针。

> 小明很喜欢数学,有一天他在做数学作业时,要求计算出9~16的和,他马上就写出了正确答案是100。但是他并不满足于此,他在想究竟有多少种连续的正数序列的和为100(至少包括两个数)。没多久,他就得到另一组连续正数和为100的序列:18,19,20,21,22。现在把问题交给你,你能不能也很快的找出所有和为S的连续正数序列? Good Luck!

```py
# -*- coding:utf-8 -*-
class Solution:
    def FindContinuousSequence(self, tsum):
        # write code here
        l = 1
        r = 2
        res = []
        while l < r:
            sum1 = (l + r) * (r - l + 1) / 2
            if  sum1 == tsum:
                res.append(range(l, r + 1))
                r += 1
                sum1 += r
            elif sum1 < tsum:
                r += 1
                sum1 += r
            else:
                l += 1
                sum1 -= l
        return res

```

注意到一个细节：在相等判断以后应当右移，以免陷入死循环。

### 和为 S 的两个数

> 输入一个递增排序的数组和一个数字S，在数组中查找两个数，使得他们的和正好是S，如果有多对数字的和等于S，输出两个数的乘积最小的。

```py
class Solution:
    def FindNumbersWithSum(self, array, tsum):
        l = 0
        r = len(array) - 1
        while l < r:
            sum1 = array[l] + array[r]
            if sum1 == tsum:
                break
            elif sum1 > tsum:
                r -= 1
            else:
                l += 1
        if l >= r:
            return []
        return [array[l], array[r]]
```