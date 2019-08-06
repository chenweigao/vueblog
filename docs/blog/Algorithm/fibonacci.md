# Fibonacci

## Summary

斐波那契数列：1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

如果设F(n）为该数列的第n项（n∈N*），那么这句话可以写成如下形式：F(n)=F(n-1)+F(n-2)

### Recursive approach

使用递归法，时间复杂度 O(n^2)，空间复杂度 O(n)

```py
def fib_recur(n):
    if n < 2:
        return  n
    return fib_recur(n-1) + fib_recur(n-2)
```

### Dynamic programmming approach <Badge text="reco" type="tip"/>

使用 DP, 时间复杂度和空间复杂度均为 O(n)

```py
def fib_dyn(n):
    if n < 2:
        return n
    memo = [-1 for i in range(n+1)]
    # 使用 range(n) 会数组越界
    memo[0] = 0
    memo[1] = 1
    for i in range(2, n + 1):
        memo[i] = memo[i - 1] + memo[i - 2]
    return memo[n]
```

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

### Imperative approach

使用公式，时间复杂度 O(n), 空间复杂度 O(1)

```py
def fib_imp(n):
    if n < 2:
        return n
    a = 0
    b = 1
    for i in range(1, n):
        a, b = b, a + b
    return b
```