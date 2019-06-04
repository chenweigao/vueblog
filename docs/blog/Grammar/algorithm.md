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

## Sort

[GitHub Sort code](https://github.com/chenweigao/_code/tree/master/sort)

### Merge Sort

$T(n) = O(nlog_{2}n)$

another example:

- Counting Inversions

- Matrix Multiplication:
  - Brute Force(暴力):  $O(n^3)$ arithmetic operations

### Quick Sort

- Worst-case running time $O(n^2)​$ :
  - input sorted or reverse sorted, partition around min or max element.
  - one side of partition has no elements.
  - $T(n) = T(0) + T(n–1) + cn$
- Expected running time $O(nlgn)$
  - If we are really lucky, partition splits the array evenly $\frac{2}{n}$ : $T(n)=2T(n/2)+Θ(n)=Θ(nlgn)$

```py
def qsort(arr):
    if not arr:
        return []
    else:
        pivot = arr[0]
        l = [_ for _ in arr if _ < pivot]
        r = [_ for _ in arr[1:] if _ >= pivot]
        return qsort(l) + [pivot] + qsort(r)
```

### Selection Sort

```py
def selection_sort(arr):
​    for i in range(len(arr)):
​        minimum = i
​        for j in range(i+1, len(arr)):
​            if arr[j] < arr[minimum]:
​                minimum = j
​        arr[minimum], arr[i] = arr[i], arr[minimum]
​    return arr
```

### Heapsort

### Sort using Template

C++ 使用模板降序排列：

```cpp
struct greater
{
    template<class T>
    bool operator()(T const &a, T const &b) const { return a > b; }
};
std::sort(numbers.begin(), numbers.end(), greater());
```

## Swap

1. 基本实现：

    ```cpp
    //引用实现
    swap(int &x, int &y){
    ​    int temp;
    ​    temp = x;
    ​    x= y;
    ​    y =x;
    }
    swap(x, y);

    //指针实现
    swap(int *x, int *y){
    ​       int temp;
    ​       temp = *x;
    ​       *x = *y;
    ​       *y = temp;
    }
    swap(&x, &y);
    ```

2. 异或实现：

    ```cpp
    void swap(int &x, int &y){
    ​    x ^= y;
    ​    y ^= x;
    ​    x ^= y;
    }
    swap(x, y);

    void swap(int *x, int *y){
    ​    *x ^= *y;
    ​    *y ^= *x;
    ​    *x ^= *y;
    }
    swap(&x, &y);
    ```

3. 加减操作：

    ```cpp
    void swap(int &x, int &y){
    ​    x = x + y;
    ​    y = x - y;
    ​    x = x - y;
    }
    swap(x, y);

    void swap(int *x, int *y){
    ​    *x = *x + *y;
    ​    *y = *x - *y;
    ​    *x = *x - *y;
    }
    swap(&x, &y);
    ```

4. 宏定义：

   ```cpp
   #define swap(x, y) { x ^= y; y ^= x; x ^= y; }
   #define swap(x, y) { x = x + y; y = x - y; x = x - y; }
   swap(x, y);
   ```

## Binary Search

在二分查找中，要特别注意边界的问题，二分查找的边界，分为 `[left, right)` 和 `[left, right]`.

- 初始化时，形式为 `left = 0, right = n`, 其中 `n` 表示数组的长度，由于数组取不到下标 `n`, 故为左闭右开区间；
- 初始化时，形式为 `left = 0, right = n - 1`, 故为左闭右闭区间。

:::danger bug!!!
对于左闭右开区间(`[left, right)` )而言，应注意：

在写代码时，应当注意边界条件：

如果初始化为左闭右开区间，则当 `mid` 的值小于要查找的值的时候，`left = mid  + 1` 是正确的

而当 `mid` 的值大于要查找的值的时候（这时候需要向左查找），此时如果让 `right` 赋值为 `mid - 1`, 则有可能存在 `mid - 1` 正好是要查找的值的情况，要十分慎重。
:::

基于此，在写二分查找时，可以基于以下原则：[标准程序参考链接](https://github.com/chenweigao/_code/blob/master/cpp/binary_search.cpp)

1. 使用左右闭区间初始化，查找后条件应当变成：`left = mid + 1` and `right = mid -1`, 否则会出现死循环；
2. 使用左闭右开区间初始化，查找后条件应当是：`left = mid + 1` and `right = mid`;
3. `left` 初值为 `-1`, 循环条件使用 `while(left + 1 != right)`;
4. 对边界条件专门进行判断。

wiki 伪代码：

:::tip 记住口诀
**mid 在前，先小后大，先左后右**

解析：mid 总是在比较的左边：mid < target; 先写 mid 小于，对应左边 l = mid + 1; 再写 mid 大于，对应右边。
:::

```c
function binary_search(A, n, T):
    L := 0
    R := n − 1
    while L <= R:
        m := floor((L + R) / 2)
        if A[m] < T:
            L := m + 1
        else if A[m] > T:
            R := m - 1
        else:
            return m
    return unsuccessful
```

二分查找有序序列中某个元素的位置，如果没找到，则返回其需要插入的位置(LC 035):

```py
def binarySearch(nums, target):
    l, r = 0, len(nums) - 1

    while l <= r:
        mid = (l + r) // 2
        if nums[mid] < target:
            l = mid + 1
        else:
            r = mid - 1
    return l
```

使用二分查找判断某个数是否完全平方数：

```py
def isPerfectSquare(self, num: int) -> bool:
    '''
    using binary search
    '''
    l, r = 0, num
    while l <= r:
        mid = (l + r) // 2
        if mid * mid == num:
            return True
        elif mid * mid < num:
            l = mid + 1
        else:
            r = mid - 1
    return False
```

- 向上、下取整

1. 使用 $\frac {(A+B-1)} {B}$ 计算

2. 使用 `math.ceil()` 和 `math.floor()`:

```py
imprt math
math.ceil(7/4) # 2
math.floor(7/4) # 1 or 7//4
round(2.6) # 3 四舍五入
```

一般而言，我们在快速排序或者二分查找中如果要计算 mid, 则可以使用 $$mid = left + \frac{right - left}{2}$$ 来计算，可以参考[二分查找 python 代码](https://github.com/chenweigao/_code/blob/master/data_struct/binary_search.py)

## DFS and BFS

### Problems content

- [number of island: LC200](https://leetcode.com/problems/number-of-islands/)

- [Target Sum: LC494](https://leetcode.com/problems/target-sum/)

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

## Math

### xor

Python 中的异或为 `^`, 其基本应用是**线性时间内求解一个数组中只出现过一次的元素**[LC136](https://leetcode.com/problems/single-number/)。

```py
2 ^ 2 = 0
0 ^ 3 = 3
```

任何数字异或自己都等于 0, `0` 异或某个整数，其结果是该整数。

进阶的题目：[LC260](https://leetcode.com/problems/single-number-iii/): 线性时间内求解一个数组中出现过一次的**两个**元素。

### Bit Manipulation

Example: 求 12 的二进制

假设所求得的二进制串为 32 位，求一个 10 进制数的某一位可以用如下方法：

```python
# 12 的二进制第 0 位是 0
12 >> 0 & 1
0
```

由此可以编程求解 12 的 32 位二进制串：

```py
res = []
for i in range(31, -1, -1): # 逆序 rang(32)
    res.append(str(12 >> i & 1))
print("".join(res))
```

或者先计算再逆序，最终得到 12 的二进制字符串：

```py
res = []
for i in range(32):
    res.append(str(12 >> i & 1))
res.reverse()
print("".join(res))
```

如若想把二进制串转回**十进制**：

```py
int("".join(res), 2)
```

---
Example 2: 计算一个二进制串中 1 的个数，用到了一个 trick:

```py
n &= (n-1)
```

其作用在于，drop 掉二进制串的最后面的那个 1, 如 `00101000` 运算后就变成了 `00100000`, 最后一位 1 消失了。

代码如下：

```py
count = 0
n = 12

while(n):
    n &= (n-1)
    count += 1

print(count) #2
```

上述代码中 `n &= (n-1)` 等价的效果是**去掉 n 二进制数的最后一位 1**, 以 33 为例， 33 的二进制表示为 `0b100001`, 在运行时候会变成 `0b100000`(32), 相当于去掉了最后一位的 1.

[LC-338 使用动态规划求解 0-n 之间每个数分别对应多少个 1](https://leetcode.com/problems/counting-bits/)

> Given a non negative integer number num. For every numbers i in the range 0 ≤ i ≤ num calculate the number of 1's in their binary representation and return them as an array.

代码如下：

```py
def countBits(num: int) -> 'List[int]':
    dp = [0 for _ in range(num + 1)]
    dp[0] = 0

    for i in range(1, num + 1):
        dp[i] = dp[i & (i - 1)] + 1
    return dp
```

|   dp   | 0    | 1                             | 2                              | 3                         |
| :----: | ---- | ----------------------------- | ------------------------------ | ------------------------- |
| result | 0    | dp[1 & 0] + 1 = dp[0] + 1 = 1 | dp[2 & 1]  + 1 = dp[0] + 1 = 1 | dp[3 & 2] = dp[2] + 1 = 2 |

我们已经知道，**一个数 & 比自己小 1 的数的结果相当于 drop 掉这个数中的一个 1**，那么 dp[0] = 0, 依次计算就可以得到结果。


:::warning 位操作小 TIP
对于位操作而言，一个数 N：`N / 8` equals `N >> 3`, `N % 8` equals `N & 7`.

只要满足是 2 的整次幂：`99 / 32 == 99 >> 5`, `99 % 32 == 99 & 31`.
:::

十进制数转化为十六进制：

```py
def toHex(self, num: int) -> str:
    dic = '0123456789abcdef'

    if num == 0:
        return "0"
    res = ''

    while num != 0 and len(res) < 8:
        res = dic[(num & 15)] + res  # num & 15 == num % 16
        # 把 res 加到后面，不然要进行 reverse
        num = num >> 4 # num / 16 == num >> 4
    return res
```

是否 4 的倍数：

```py
def isPowerOfFour(self, n: int) -> bool:
    if n < 1:
        return False
    while n % 4 == 0:
        n //= 4
    return n == 1
```

使用位操作：

```py
def isPowerOfFour(n) {
    return n & (n - 1) == 0 and n & 0x55555555 != 0
    # check the 1-bit location
}
```

### Bitmap

对于 Bitmap 的映射，以 `usigned int` 而言，整型为 4 个字节，即 32 位，无符号整型当然也是 32 位。

假设要使用 Bitmap 存储 32 个数，那么只需要一个 `usigned int` 类型的数组就可以了；以此类推，64 个数需要 2 个，1024 个数需要 1024 / 32 = 32 个，此时可以定义 `unsigned int arr[32]` 来存储这 1024 个数.

Bitmap 的操作：要添加一个数 N 进 Bitmap, 需要找出其**索引 Index**，即在哪个数组里面存储，和其**位置 Position**，即在哪一位，对于此，可以使用公式：

:::tip Bitmap index and position
Index(N) = N / 32 = N >> 5

Position(N) = N % 32 = N & 31
:::

计算出了 Position 以后，需要将 Position 位置换为 1, 实现方式为将 1 左移 Position 位( `1 << position` )，然后再和原来的数进行 **或** 操作，即可得到现在的新的数 `arr[Index(N)]`

其值为 `arr[Index(N)] |= 1 << Position(N)`.

对于 1 左移若干位再 `&`, 可以判断某个数的某位是否为 1, 比如 `(1 << 2 ) & 10` 若该值为 0, 则说明 10 的第 3 位二进制（从左边数，起始下标为 0 ）为 0, 若为其他数则说明是 1.

对于 2-Bitmap 而言，给一个数分配两个 bit, 可以表示一个数未出现(`00`), 出现过一次(`01`), 出现过多次(`10`), 以及无意义(`11`).

### Mutilply Big Integers

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