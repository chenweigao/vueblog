# Bit Manipulation: Binary Number and Bitmap

## 求二进制

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

## 二进制中1的个数

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

## Bitmap

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

