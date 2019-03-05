# Python Problems in Interview

## Multiple Sets of Input

- 输入 m, n 两个数：

```py
str_in = input()

m, n = [int(_) for _ in str_in.split()]

```

- 多组输入，第一行 n 表示数的数量，第二行输入这 n 个数：

```py
n, m = input(), list(map(int, input().split()))
```

## Binary Search in Python

