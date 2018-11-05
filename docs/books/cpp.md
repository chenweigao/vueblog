---
title: C++ Prime
description: C++ prime book
---

This is a reading note when I studying C++ basic grammar.
<!-- more -->

# IO

## Output buffer

Flushing the output buffer:

- `endl` used to flush buffer explicitly

- `ends` insert a null character and flush the buffer

- `flush` flusher the stream

:::tip
`cin >> ival;` causes the buffer associated with `cout` to bu flushed, because the library ties input and output streams together.
:::

# String

## Initialization

- copy initialization

```cpp
string s = "value";
```

- direct initialization

```cpp
string s("value");
string s(4, 'c') //'cccc'
```