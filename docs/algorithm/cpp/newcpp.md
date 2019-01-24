# cpp 11/14/17 and Its Usage

The goal of new cpp aims at:

- Make cpp a better language for systems programming and library building

- Make cpp easier to teach and learn

## main()

main() 函数的原型为：

> `int main(int argc, char** argv)`

or

> `int main(int argc, char* argv[])`

其中 `argc` 表示参数的数量，`argv` 数组为从下标 0 开始的数组，第 0 个参数一般为可运行的文件。

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