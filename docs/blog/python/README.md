# Python Note

## IPython

```bash
pip install jupyter
jupyter notebook
```

## functions

1. `isinstance()`

    ```py
    >>> isinstance(1, int)
    True

    >>> isinstance([1, 2, 3], list)
    True
    ```

2. `extend()` and `append()`

    ```py
    >>> ret = []

    >>> ret.extend([1, 2, 3])
    [1, 2, 3]

    >>> ret.append(4)
    [1, 2, 3, 4]

    >>> ret.append([5, 6])
    [1, 2, 3, 4, [5, 6]]
    ```

3. `reduce()`

    ```py
    >>> from functools import reduce
    >>> reduce(lambda x, y: x+y, [1, 2, 3])
    6
    ```