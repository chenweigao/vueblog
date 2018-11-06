---
title: C++ Prime
description: C++ prime book
---

This is a reading note when I studying C++ basic grammar.
<!-- more -->

# Type

## Compound Types

C++ has several compound types, **reference** and **pointers** is important.

### reference

```cpp
int &refVal = ival;
//refVal is an another name of oval
```

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

## Dealing with Types

### decltype Type Specifier

Sometimes we want to define a variable with a type that the compiler deduces from an expression but do not want to use that expression to initialize the variable. For such cases, the type specifier *decltype* returns the type of its operand. The compiler analyzes the expression to determine its type but does not evaluate the expression:

```cpp
decltype(f()) sum = x;
//sum has whatever type f returns

string s = "some string";
decltype(s.size()) cnt = 0;
//cnt has the same type of s.size()
```

Sometimes we need to process only a specific character, theses functions helps us change the characteristics of a character. These functions are defined in the `cctype` headers.

- isalmun(c) : true if c is a letter or digit

- isalph(c) : letter

- isdigital(c) : digit

- islower(c)/isupper(c), tolower(c)/toupper(c)

