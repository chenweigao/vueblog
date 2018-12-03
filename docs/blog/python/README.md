# Python Note

## IPython

```bash
pip install jupyter
jupyter notebook
```

## functions

### isinstance()

Python 中判断类型的方法

```py
>>> isinstance(1, int)
True

>>> isinstance([1, 2, 3], list)
True
```

### extend() and append()

```py
>>> ret = []

>>> ret.extend([1, 2, 3])
[1, 2, 3]

>>> ret.append(4)
[1, 2, 3, 4]

>>> ret.append([5, 6])
[1, 2, 3, 4, [5, 6]]
```

### reduce()

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

### sort

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