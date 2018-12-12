---
title: C++ Prime
description: C++ prime book
---
:::vue
This is a reading note when I studying C++ basic grammar

some from book: 《C Primer》
:::
<!-- more -->

## Some Notes

### 变量和初始化

:::tip 赋值和初始化
C++ 中，初始化的初值由定义的**位置**决定

定义于任何函数体之外的变量被初始化为 0, 定义在函数体内部的内置类型变量将**不被初始化**（值是未定义的）
:::

### File Redirection

使用文件重定向，允许我们将标准输入和标准输出与命名文件关联起来：

```bash
./pro <infile >outfile
```

### I/O

指出文件结束： `ctrl -z` (windows), `ctrl - d` (linux)

### sizeof

The operand is either an identifier that is a unary-expression, or a type-cast expression (that is, a type specifier enclosed in parentheses). The unary-expression cannot represent a bit-field object, an incomplete type, or a function designator. The result is an *unsigned integral constant*. The standard header STDDEF.H defines this type as **size_t**.

### remove_if

Included in `<algorithm>`

```cpp
auto strip(string& str) -> string const& {
    for(auto& ch: str) tolower(ch);
    str.erase(remove_if(str.begin(), str.end(), ispunct), str.end());
    return str;
}
```

该例子是一个 `remove_if` 搭配 `erase` 的典型应用， 移除 str 中 `ispunct` 返回 True 时的元素，迭代器指向末尾，删除后的长度不变，例如：

```html
1 2 3 4 5 6 7 8 9
^
2 4 6 8 ? ? ? ? ?
^       ^
```

再调用 `erase` 删掉那些 `?` 元素, `erase` 的参数指定要删除的迭代器的开始和结束。

### snprintf

`sprintf` 不能检查目标字符串的长度，故使用 `snprintf`

```cpp
// in stdio.h
// Maximum chars of output to write in MAXLEN. 
int snprintf ( char * s, size_t n, const char * format, ... );
//example: status bar
char status[80];
int len = snprintf(status, sizeof(status), "%.20s - %d lines");
```

If the resulting string would be longer than n-1 characters, the remaining characters are discarded and not stored, but counted for the value returned by the function(最大拷贝 n-1).
A terminating null character is automatically appended after the content written.

## Variadic function

可变参数的函数: [Example: average the number](https://github.com/chenweigao/_code/blob/master/cpp/variadic_function.cpp)

To portably implement variadic functions in the C programming language, the standard `stdarg.h` header file is used. The older varargs.h header has been deprecated in favor of stdarg.h. In C++, the header file `cstdarg` is used.

```c
#include <stdarg.h>

int VarArgFunc(int dwFixedArg, ...){
    va_list pArgs = NULL;
    va_start(pArgs, dwFixedArg);
    int dwVarArg = va_arg(pArgs, int);
    va_end(pArgs);
}
```

Explanation:

- 以固定参数的地址为起点依次确定各变参的内存起始地址(line 3)

- 定义`va_list`类型的指针`pArgs`，用于存储参数地址(line 4)
  
- 初始化`pArgs`指针，使其指向第一个可变参数。该宏第二个参数是变参列表的前一个参数，即最后一个固定参数(line 5)

- 该宏返回变参列表中的当前变参值并使`pArgs`指向列表中的下个变参。该宏第二个参数是要返回的当前变参类型(line 6)

- 若函数有多个可变参数，则依次调用`va_arg`宏获取各个变参
  
- 将指针`pArgs`置为无效，结束变参的获取(line 7)
  
- 可在头文件中声明函数为`extern int VarArgFunc(int dwFixedArg, ...);`调用时用`VarArgFunc(FixedArg, VarArg);`

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

