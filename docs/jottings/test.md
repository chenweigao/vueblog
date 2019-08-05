---
{
  "title": "Blogging Like a Hacker",
  "tags": ["abc", "123"]
}
---

:::warning tip
This is a reading note when I studying C++ basic grammar

some from book: 《C Primer》
:::
<!-- more -->

# test drafs

dsasdjndklka


```py
import functools
def logme(f):
    @functools.wraps(f)
    def wrapped(*args, **kwargs):
        return f.__name__
        return f(*args, **kwargs)
    return wrapped
```

```py
def f(foo):
    return foo.__name__

def foo(a, b, c):
    a = f(foo)
    return a
```