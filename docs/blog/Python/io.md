# Python I/O

## New-Coder Input

牛客网上面刷题时可能用到的多组输入输出：


- 输入 m, n 两个数：

```py
str_in = input()
m, n = [int(_) for _ in str_in.split()]
```

- 多组输入，第一行 n 表示数的数量，第二行输入这 n 个数：

 ```py
n, m = input(), list(map(int, input().split()))
```

- 输入有多组数据：

```py
import sys

s = sys.stdin.readline().strip()
if not s:
    break
```

## Format Output

When output, we can use `str()`, `repr()` and `print()`, the different between them could be found in [Python3 Tutorial](http://www.runoob.com/python3/python3-inputoutput.html).

The usage of `format` , one thing to note :

```python
print('{0} and {1}'.format('Google', 'Baidu'))
>>> Google and Baidu
print('{1} and {0}'.format('Google', 'Baidu'))
>>> Baidu and Google

print(f'some string')
# raw string

print('{0:2d} {1:3f}'.format(1,2))
# specifies the length of the placeholder

print('{name}: age}'.format(name = 'weigao', age = '18'))
>>> weigao: 18
```

The `%` also can be use to format output, but it is an old way, so use it as little as possible.

### Input

Python provides the `input()` function from the standard input to a line, and the default standard input is the keyboard.

```python
str = input("please input: ")
print("your input is: ", str)
```

In **Newcoder** programming test, somethings we need custom input, there are some ways for us to reference:

- Mutil input and output

例如第一行表示接下来要输入的行数，接下来若干行输入，并且涉及多组输入输出时：

```py
while True:
    try:
        n = int(input())
        lists = [int(input()) for _ in range(n)]
        # the code
    except:
        break
```
