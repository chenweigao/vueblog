# Algorithm Analysis and Design

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>

## Asymptotic Growth

### O-notation

- O-notation(Bog-O), When we say “the running time is $O(n^2)$” we mean that the worst-case running time is $O(n^2)$ – the best case might be better. (渐进上界)
- When we say “the running time is Ω(n2)” we mean that the best-case running time is $$Ω(n^2)$$ – the worst case might be worse.(渐进下界)

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
  - If we are really lucky, partition splits the array evenly n/2 : $T(n)=2T(n/2)+Θ(n)=Θ(nlgn)$

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

​```c
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
'''

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

向上、下取整

1. 使用 $\frac {(A+B-1)} {B}$ 计算

2. 使用 `math.ceil()` 和 `math.floor()`:

```py
imprt math
math.ceil(7/4) # 2
math.floor(7/4) # 1 or 7//4
round(2.6) # 3 四舍五入
```

一般而言，我们在快速排序或者二分查找中如果要计算 mid, 则可以使用 `mid = left + (right - left)/2` 来计算，可以参考[二分查找 python 代码](https://github.com/chenweigao/_code/blob/master/python/binary_search.py)

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
