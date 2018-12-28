# cpp 11/14/17 and Its Usage

The goal of new cpp aims at:

- Make cpp a better language for systems programming and library building

- Make cpp easier to teach and learn


## lvalue and rvalue


```cpp
int x = 0;  //x is lvalue
int* p = &++x;  //++x is lvalue, can use &
++x = 10;
p = &x++;   //x++ returns a temperate value,, error!
```

lvalue can be assigned a value or use '&', rvalue can't.

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

## CMake

A `CMakeLists.txt` file example:

```cmake
# CMake 最低版本号要求
cmake_minimum_required (VERSION 2.8)

# 项目信息
project (Demo1)

# 指定生成目标
add_executable(Demo main.cc)
```

在Linux平台下使用CMake生成Makefile并编译：

1. 编写 CMake 配置文件 CMakeLists.txt 
2. 执行命令 `cmake PATH` 或者 `ccmake PATH` 生成 Makefile 。其中， `PATH` 是`CMakeLists.txt` 所在的目录
3. 使用 `make` 命令进行编译

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

### Sort in descending order

```cpp
struct greater
{
    template<class T>
    bool operator()(T const &a, T const &b) const { return a > b; }
};
std::sort(numbers.begin(), numbers.end(), greater());
```

### Templates

```cpp
// function template
#include <iostream>
using namespace std;

template <class T>
T GetMax (T a, T b) {
  T result;
  result = (a>b)? a : b;
  return (result);
}

int main () {
  int i=5, j=6, k;
  long l=10, m=5, n;
  k=GetMax<int>(i,j);
    //smaple usage:
    //k=GetMax(i, j)
  n=GetMax<long>(l,m);
  cout << k << endl;
  cout << n << endl;
  return 0;
}
// 6 10
```

the format for declaring function template with type parameters is:

```cpp
template <class identifier> function_declaration;

template <typename identifier> function_declaration;
```

its use is indistinct, so both expressions have exactly the same meaning.