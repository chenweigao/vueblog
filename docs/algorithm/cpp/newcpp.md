# C++ 11/14/17 Grammar

The goal of new cpp aims at:

- Make cpp a better language for systems programming and library building

- Make cpp easier to teach and learn

## main()

main() 函数的原型为：

`int main(int argc, char** argv)` or `int main(int argc, char* argv[])`.

其中 `argc` 表示参数的数量，`argv` 数组为从下标 0 开始的数组，第 0 个参数一般为可运行的文件。

## Define Struct

There are many ways to define *struct*, what we should do is that chose a best way to solve problem.

- Example 1

```c
struct Point { double x, y; };
double dist(struct Point a, struct Point b){
​    return hypot(a.x-b.x, a.y-b.y);
}
```

- Example2

```c
typedef struct { double x, y; } Point;
double dist(Point a, Point b){
​    return hypot(a.x-b.x, a.y-b.y);
}
```

As you can see from the comparison, **Example 2** is better, which use `typedef struct { define; }struct name;` to define.

## lvalue and rvalue

```cpp
int x = 0;  //x is lvalue
int* p = &++x;  //++x is lvalue, can use &
++x = 10;
p = &x++;   //x++ returns a temperate value,, error!
```

> lvalue can be assigned a value or use '&', rvalue can't.

[more information about rvalue  reference](https://zh.wikipedia.org/wiki/%E5%8F%B3%E5%80%BC%E5%BC%95%E7%94%A8)

```cpp
#include <iostream>
#include <utility>

int i = 101, j = 101;

int foo(){ return i; }
int&& bar(){ return std::move(i); }
void set(int&& k){ k = 102; }
int main()
{
    foo();
    std::cout << i << std::endl;
    set(bar());
    std::cout << i << std::endl;
}
/*output:
101
102*/
```

## OOP

Q: What is different between difination and declaration?

## Usage

### member initializer list

```cpp
class Point {
private:
    const float x,y;
    Point(float xa = 0.0, float ya =0.0) : y(ya), x(xa) {}
};
```

## Templates

函数模板的例子：

```cpp
// 方便阅读，其实可以写成一行
// template <typename T> int compare(const T &v1, const T &v2)
template <typename T>
int compare(const T &v1, const T &v2)
{
    // code
}

// compare(0, 1)
```

> - 当我们调用一个函数模板时，编译器通常用函数实参来为我们推断模板实参。
> - 在模板参数列表中， typename 和 class 含义相同，可以互换使用。

the format for declaring function template with type parameters is:

```cpp
template <class identifier> function_declaration;

template <typename identifier> function_declaration;
```

its use is indistinct, so both expressions have exactly the same meaning.