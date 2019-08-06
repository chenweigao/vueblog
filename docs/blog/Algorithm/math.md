# Math


## XOR: 数组中只出现一次的元素

Python 中的异或为 `^`, 其基本应用是**线性时间内求解一个数组中只出现过一次的元素**[LC136](https://leetcode.com/problems/single-number/)。

```py
2 ^ 2 = 0
0 ^ 3 = 3
```

任何数字异或自己都等于 0, `0` 异或某个整数，其结果是该整数。

进阶的题目：[LC260](https://leetcode.com/problems/single-number-iii/): 线性时间内求解一个数组中出现过一次的**两个**元素。


## Mutilply Big Integers

对于两个比较大的数据的相乘，需要一个固定的标准写法并加以记忆。

```py
res = [0 for _ in range(len(str1) + len(str2))]
for i in range(len(str1) - 1, -1, -1):
    x = int(str1[i])
    for j in range(len(str2) - 1, -1, -1):
        y = int(str2[j])
        res[i + j] += (x * y + res[i + j + 1]) // 10
        res[i + j + 1] = (x * y + res[i + j + 1]) % 10
```

## 求众数(Mode)

要求一个数的众数，有如下思路：[参考代码](https://github.com/chenweigao/_code/blob/master/LeetCode/LC169_majority_element.py)

1. 使用一个 dict 来统计每个数出现的次数，返回出现次数最多的那个数；

    ```py
    def majorityElement(self, nums: 'List[int]') -> int:
        counts = collections.Counter(nums)
        return max(counts, key=counts.get)
    ```

2. 使用一个堆栈：

    ```py
    stack = []

    for num in nums:
        if stack == [] or stack[-1] == num:
            stack.append(num)
        else:
            stack.pop()
    return stack[-1]
    ```