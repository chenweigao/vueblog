# DFS and BFS

## Problems content

- [number of island: LC200](https://leetcode.com/problems/number-of-islands/)

- [Target Sum: LC494](https://leetcode.com/problems/target-sum/)

## Recursion of Memoization

### Memoization of Fibonacci

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