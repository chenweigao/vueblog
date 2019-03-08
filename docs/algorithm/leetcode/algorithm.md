# Algorithm Analysis and Design

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>

## Loops and Recursive

### 1. Asymptotic Growth

### 2. O-notation

- O-notation(Bog-O), When we say “the running time is $O(n^2)$” we mean that the worst-case running time is $O(n^2)$ – the best case might be better. (渐进上界)
- When we say “the running time is Ω(n2)” we mean that the best-case running time is $$Ω(n^2)$$ – the worst case might be worse.(渐进下界)

### 3. Recurrences

- Substitution method
- Recursion-tree method
- Master method

Simplified Master Theorem:

Let $a \geq 1$ and $b > 1$ be constants and let $T(n)$ be the recurrence $T(n) = aT(\frac{n}{b}) + cn^k$, defined for $n \geq 0$.

1. If $a > b^k$, then $T(n) = \Theta(n^ {log_{a}b})$.
2. If $a = b^k$, then $T(n) = \Theta(n^ k{logn})$.
3. If $a < b^k$ then $T(n) = \Theta(n^k)$.

## Divide-and-Conquer

### 1. Merge Sort

$T(n) = O(nlog_{2}n)$

another example:

- Counting Inversions
- Matrix Multiplication: 
  - Brute Force(暴力):  $O(n^3)$ arithmetic operations

### 2. Quick Sort

- Worst-case running time $\Theta(n^2)$:
  - input sorted or reverse sorted, partition around min or max element.
  - one side of partition has no elements.
  - $T(n) = T(0) + T(n–1) + cn$
- Expected running time $O(nlgn)$
  - If we are really lucky, partition splits the array evenly n/2 : $T(n)=2T(n/2)+Θ(n)=Θ(nlgn)$

Divide and conquer: partition, pivot

## Heapsort

Action of build max-heap:

1. 找到最后一个节点的父亲节点
2. 

Priority Queues

## Elements of DP Algorithms

- Optimal substructure
- Overlapping subproblems

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

## LCS 最长公共子序列

