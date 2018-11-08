---
title: C++ Prime
description: C++ prime book
---

This is a reading note when I studying C++ basic grammar.
<!-- more -->

## Type

### Compound Types

C++ has several compound types, **reference** and **pointers** is important.

### reference

```cpp
int &refVal = ival;
//refVal is an another name of oval
```

## IO

### Output buffer

Flushing the output buffer:

- `endl` used to flush buffer explicitly

- `ends` insert a null character and flush the buffer

- `flush` flusher the stream

:::tip
`cin >> ival;` causes the buffer associated with `cout` to bu flushed, because the library ties input and output streams together.
:::

## String

### Initialization

- copy initialization

```cpp
string s = "value";
```

- direct initialization

```cpp
string s("value");
string s(4, 'c') //'cccc'
```

### Dealing with Types

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

:::tip notes

- isalmun(c) : true if c is a letter or digit

- isalph(c) : letter

- isdigital(c) : digit

- islower(c)/isupper(c), tolower(c)/toupper(c)

- isspace(c): true if c is whitespace(a space, tab, vertical tab, return, newline or foemfeed)

:::

## Vector and Iterator

### Iterator Init

```cpp
vector<int> vec;    // vec is empty
vector<int> vec(10);    // 0
vector<int> vec(10, 1);  // 1
vector<int> vec{ 1, 2, 3, 4, 5 }; // 1, 2, 3, 4, 5
vector<int> vec(other_vec); // same as other_vec
vector<int> vec(other_vec.begin(), other_vec.end()); // same as other_vec
```

## Using Iterators

```cpp
auto b = v.begin(), e = v.end()
```

*b* denotes the first element and *e* denotes one past the last element in v.

The iterator returned by `end` is an iterator positioned "one past the end" of the associated container(or `string`)

It is usually best to use a const type(such as `const_iterator`) when we need to **read** but do not need to **write** to an object, the new standard introduced two new functions named `cbegin()` and `cend()`.

As with pointers, we can dereference an iterator to obtain the element denoted by an element. (see *code - c++ - iterator*)

Iterators use the `++` operator to move from one element to the next, the effect is to **advance the iterator by one position**.

:::tip Generic Programming
C++ programmers use `!=` as a matter of habit, this coding style applies equally well to various kinds of containers provided by the library.

All of the library containers have iterators that define the `==` and `!=` operators, most of those iterators do not have the `<` operator.
:::

## Sequential Containers

### Overview

|  Containers  | Overview                                         |
| :----------: | ------------------------------------------------ |
|    vector    | Flexible-size array; supports fast random access |
|    deque     | double-end queue                                 |
|     list     | doubly linked list                               |
| forward_list | singly linked list                               |
|    array     | fixed-size array, can not add or remove elements |
|    string    | similar to vector                                |

