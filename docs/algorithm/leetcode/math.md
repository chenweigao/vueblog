# Math

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