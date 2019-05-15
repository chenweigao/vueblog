# Math

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>

## Bit operation

Example: 求 12 的二进制

假设所求得的二进制串为 32 位，求一个 10 进制数的某一位可以用如下方法：

```python {2}
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

:::warning 位操作小 TIP
对于位操作而言，一个数 N：`N / 8` equals `N >> 3`, `N % 8` equals `N & 7`.

只要满足是 2 的整次幂：`99 / 32 == 99 >> 5`, `99 % 32 == 99 & 31`.
:::

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

## Reverse

逆序一个数，一般的 C++ 操作为：

```cpp
int sum = 0;
while(x) {
    sum = sum  * 10 + x % 10;
    x /= 10;
}
// sum is reversed x
```

而 Python 只需要使用 `str(x)[::-1]`.

## 向上、下取整

1. 使用 $\frac {(A+B-1)} {B}$ 计算

2. 使用 `math.ceil()` 和 `math.floor()`:

```py
imprt math
math.ceil(7/4) # 2
math.floor(7/4) # 1 or 7//4
round(2.6) # 3 四舍五入
```

一般而言，我们在快速排序或者二分查找中如果要计算 mid, 则可以使用 `mid = left + (right - left)/2` 来计算，可以参考[二分查找 python 代码](https://github.com/chenweigao/_code/blob/master/python/binary_search.py)