# Built-in Functions

## map

### int2list and list2int

- int2list

```py
def int2list(intNum):
    return list(map(int, str(intNum)))
```

解析：

```py
>>> str(123) --> '123'
>>> map(int, str(123)) --> <map object> # python3 以后 map 返回迭代器
>>> list(map(int, str(123))) --> [1,2,3]
```

- list2int

```py
def list2int(aList):
    return int(''.join(list(map(str, aList))))
```

解析：

```py
>>> ''.join(['1','2']) --> '12'
```

## reduce()

```py {2}
>>> from functools import reduce
>>> reduce(lambda x, y: x+y, [1, 2, 3])
6
```

Example:

- [最小公倍数](https://github.com/chenweigao/_code/blob/master/python/gcd.py)

- [最大公约数](https://github.com/chenweigao/_code/blob/master/python/lcm.py)

:::tip
最小公倍数 = 两整数的乘积 / 最大公约数

lcm(x,y) = x * y / gcd(x,y)
:::

## isinstance()

Python 中判断类型的方法

```py
>>> isinstance(1, int)
True

>>> isinstance([1, 2, 3], list)
True
```

## extend() and append()

```py
>>> ret = []

>>> ret.extend([1, 2, 3])
[1, 2, 3]

>>> ret.append(4)
[1, 2, 3, 4]

>>> ret.append([5, 6])
[1, 2, 3, 4, [5, 6]]
```

## sort

:::tip skill
在对 list 排序时， 可以使用 `sorted()` 或者 `sort()` + `deepcopy()` 两种方式

[example code](/algorithm/python/)
:::

1. sorted()

    descending order (降序)

    ```py {2}
    def max_n(lst, n=1, reverse=True):
        return sorted(lst, reverse=reverse)[:n]
    ```

2. sort() + deepcopy()

    ascending order (升序)

    ```py {5}
    from copy import deepcopy

    def min_n(lst, n=1):
        numbers = deepcopy(lst)
        numbers.sort()
        return numbers[:n]
    ```

## zip

`zip(*iterators)`: returns a iterator of tuples.

当最短的迭代器遍历完成以后，停止迭代。

Example 1:

```py
str = ['hello', 'heo', 'helio']
for _ in zip(*str):
    print(list(_))

>> [('h', 'h', 'h'), ('e', 'e', 'e'), ('l', 'o', 'l')]

# zip('ABCD', 'xy') --> Ax By
```

## enumerate

Example 2(接上 zip 的例子):

[Leetcode 14. Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix/)

```py
def longestCommonPrefix(strs):
    if not strs:
        return ""

    for i, _ in enumerate(zip(*strs)):
        if len(set(_)) > 1:
            return strs[0][:i]
    else:
        return min(strs)

test_strs = ["flower","flow","flight"]
print(longestCommonPrefix(test_strs))
```

:::tip

- `enumerate` 列举出来的下标从 0 开始，所以使用 `[:i]` 作为切片 而不是 `[:i-1]`

:::