# C/C++ Grammar Note

The goal of new cpp aims at:

- Make cpp a better language for systems programming and library building

- Make cpp easier to teach and learn

## Pointer

:::tip overview
本章节启发自 《C 程序设计新思维》 中的指针章节
:::

### Questions

1. 复制和别名有什么区别？

    [示例代码](https://github.com/chenweigao/_code/blob/master/cpp/pointer_array_3.cpp) 可以看出，对于数组结构的赋值其实是创建了数组的一个别名，当复制被修改时，原数据也别修改。

    如果要复制一个数组，应当使用已经过时的 `memmove`

2. 如何在 C 中返回多个数据项？

    A：可以使用随用随弃的结构体。[示例代码](https://github.com/chenweigao/_code/blob/master/cpp/pointer_array_1.cpp)

3. 数组可否在运行时动态分配内存空间？

    可以，参考问题 5。

4. 如何理解函数堆栈？

    - 使用 `malloc` 分配的内存并不位于栈中，而是在系统中称为堆的空间中

    - 函数帧：函数在内存中占据的空间，用于保存与这个函数有关的信息

5. 如何区分自动、静态和手工内存的区别？

    - 自动：很常见；如果不使用 `static` 关键字，在函数内部声明的所有变量都是自动变量；离开自己的作用域之后被销毁；可以在初始化时设置非常量值；

    - 在函数外部和函数内部使用 `static` 关键字初始化的变量都是静态变量；注意静态变量数据是在 main 函数启动之前被初始化的，因此所有初始化值都必须是**常量**，并且**不需要计算**；在启动时设置为 0;
  
    - 手工内存：涉及到 `malloc` 和 `free` 函数；程序员痛苦的根源；可以在**运行时设置数组长度**，可以**改变长度**，不能使用 `sizeof` 计算数组长度。

### pointer and array

意识到数组和指针其密不可分的关系，参考[示例代码2](https://github.com/chenweigao/_code/blob/master/cpp/pointer_array_2.cpp).

第 6 行体现了将成员 1 的地址取得，而后赋值给新指针，新数组可以包含 `{2, 4, 6, 8}`, 并通过下标访问。

:::tip Question
What is difference between `int an_array[]` and `int *a_pointer` ?
:::

对于此问题，先研究 `int an_array[32]` 执行后会发生什么：

1. 在栈上分配空间，足够容纳 32 个整数；
2. 把 `an_array` 看做一个指针；
3. 把这个指针和新分配的地址**绑定**。

但是当程序在代码中遇到 `int *a_pointer` 的时候，只会做一件事：

**把 `a_pointer` 声明为指针。**

```c
a_pointer = malloc(32*sizeof(int));
a_pointer = an_array;
```

都是被允许的。

### pointer and const

:::tip
与引用一样，也可以令指针指向常量或非常量；**指向常量的指针 pointer to const** 不能用于改变其所指对象的值。
:::

想要存放常量对象的地址，只能使用指向常量的指针：

```cpp
const double pi = 3.14;
double *ptr = &pi; // wrong!
const double *cptr = &pi; // right!
```

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

### Defination

函数模板的例子：

```cpp {3,4}
// 方便阅读，其实可以写成一行
// template <typename T> int compare(const T &v1, const T &v2)
template <typename T>
int compare(const T &v1, const T &v2)
{
    // 使用 less<T> 似的类型无关和可移植
    if (less<T> (v1, v2)) return -1;
    if (less<T> (v2, v1)) return -1;
    return 0;
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

### Nontype Parameter

:::warning 非类型参数

1. 可以在模板中定义非类型参数，一个非类型参数表示一个值而非一个类型。

2. 非类型参数必须是**常量表达式**，从而允许编译器在编译时实例化模板；当一个模板被实例化时，非类型参数被一个用户提供的或编译器推断出的值所代替。

:::

一个最典型的应用是 [处理任意大小数组的 print 函数](https://github.com/chenweigao/_code/blob/master/cpp/template_print_array.cpp):

- 使用非类型模板

- 参数为 `Arr const &arr` (Arr 类型的 arr 引用)

## String

### memset()

> *memset()* is used to fill a block of memory with a particular value, in `<string.h>`.

Example 1: 将数组中每个元素设置为0

```c {11}
// C program to demonstrate working of memset()
#include <stdio.h>
#include <string.h>

int main()
{
    int n = 10;
    int arr[n];

    // Fill whole array with 0
    memset(arr, 0, n*sizeof(arr[0]));
}
```

:::warning bug avoiding
注意可以将 `memset` 的第二个参数设置为 `0` 或 `-1`
其他的可能不work
:::

Example 2: 字符串替换

```c {11}
// C program to demonstrate working of memset()
#include <stdio.h>
#include <string.h>

int main()
{
    char str[50] = "GeeksForGeeks is for programming geeks.";
    printf("\nBefore memset(): %s\n", str);

    // Fill 8 characters starting from str[13] with '.'
    memset(str + 13, '.', 8 * sizeof(char));  

    printf("After memset(): %s", str);
    return 0;

    //Before memset(): GeeksForGeeks is for programming geeks.
    //After memset(): GeeksForGeeks........programming geeks.
}
```

### strchr()

> Prototype: `const char * strchr ( const char * str, int character );`
>
Functions: It looks for **the first occurrence** of a character in a string, and returns a pointer to the matching character in the string. If the string doesn’t contain the character, `strchr()`returns `NULL`.

```c
int is_separator(int c) {
  return isspace(c) || c == '\0' || strchr(",.()+-/*=~%<>[];", c) != NULL;
}
```

官方示例：

```cpp
/* strchr example */
#include <stdio.h>
#include <string.h>

int main()
{
    char str[] = "This is a sample string";
    char *pch;
    pch = strchr(str, 's');
    while (pch != NULL)
    {
        printf("found at %d\n", pch - str + 1);
        pch = strchr(pch + 1, 's');
    }
    return 0;
}
//Looking for the 's' character in "This is a sample string"...
//found at 4
//found at 7
//found at 11
//found at 18
```

### strrchr()

> Prototype: `const char * strrchr ( const char * str, int character );`
>
Locate last occurrence of character in string, Returns a pointer to **the last occurrence** of character in the C string str.
The terminating null-character is considered part of the C string. Therefore, it can also be located to retrieve a pointer to **the end of a string**.

官方示例：

```cpp
/* strrchr example */
#include <stdio.h>
#include <string.h>

int main()
{
    char str[] = "This is a sample string";
    char *pch;
    pch = strrchr(str, 's');
    printf("Last occurence of 's' found at %d \n", pch - str + 1);
    return 0;
}
//Last occurrence of 's' found at 18
```

Example : 检测文件类型

```c
char *ext = strrchr(E.filename, '.');
```

### strncmp and strcmp

- `int strncmp(const char *str1, const char *str2, size_t n)` 把 `str1` 和 `str2` 进行比较，最多比较前 `n` 个字节

- `int strcmp(const char *str1, const char *str2)` 把 `str1` 所指向的字符串和 `str2` 所指向的字符串进行比较

## Library string Type

:::tip
Also could be see in *Books - C++ Prime - String*
:::

### getline(input stream, string)

```cpp
int main() {
    string line;
    while (getline(cin, line))
        cout << line << endl;
    return 0;
}
```

### string::size_type

- `s.back` : (c++ 11) access last character.

- `s.begin()`

- `s.end()`

- `s.size()`

A `s.size()` example:

```cpp
string line;
while (getline(cin, line))
    if (line.size() >80)
        cout << line << endl;
```

In this case, function `getline()` returns `string::size_type` type(not int or unsigned) which defined in the *string* class.

:::warning bug avoiding
A example that `s.size() < n` will return **true** if n is an int that holds a negative value, it yields true because the negative value in n will convert to a large unsigned value.
:::

### string for

This is an example use a range *for* and the *ispunct* function to count the number of punctuation characters in a *string*:

```cpp
#include <iostream>
#include <string>
#include <cctype>
using namespace std;
int main(int argc, char const *argv[])
{
    string str("some string!!!@#!");
    decltype(str.size()) punct_cnt = 0;
    for (auto c : str)
        if (ispunct(c))
            ++punct_cnt;
    cout << punct_cnt << " punctuation characters in" << str << endl;
    return 0;
}
//6 punctuation characters insome string!!!@#!
```

:::tip note
Sometimes we need to process only a specific character, theses functions helps us change the characteristics of a character. These functions are defined in the `cctype` headers.

- isalnum(c) : true if c is a letter or digit

- isalpha(c) : letter

- isdigital(c) : digit

- islower(c)/isupper(c), tolower(c)/toupper(c)

- isspace(c): true if c is whitespace(a space, tab, vertical tab, return, newline or foemfeed)

:::

### toupper()

This is an example to use function `toupper()`.
Note that **If we want to change the value of the characters in a string, we must define the loop variable as a reference type**.

```cpp {4}
int main(int argc, char const *argv[])
{
    string str("This is a string!");
    for(auto &c: str){
        c = toupper(c);
    }
    cout << str << endl;
    return 0;
}
```

### Using Subscript for Iteration

The string subscript oprator ([ ]) takes a `string::size_type` value, that denotes the position of the character we want to access, the operator returns a reference to the character at the given position.

```cpp
for (decltype(s.size() ) index = 0;
    index != s.size() && !isspace(s[index]); ++index)
        s[index] = toupper(s[index]);
//some time -> SOME time
```

### Additional string Operations

### Other ways to construct strings

```cpp
const char *cp = "Hello World!"; //null-terminated array
string s1(cp); // s1 == "Hello World!"
string s2(cp, 6, 20); //ok, copy only to end of s1
string s3(cp, 18); //exception: out_of_range
```

Note that when we create a string from a `const char*`, the array to which the pointer points must be null terminated.

### substr

We can pass `substr` an *optional* starting position and couont:

```cpp
s.substr(pos, n)
//default pos is 0
string s("Hello World!");
string s1 = s.substring(6);
string s2 = s.substring(7, 12);
```

### insert and replace

**Example**: Write a function that takes three strings, s, oldVal, and newVal. Using iterators, and the insert and erase functions replace all instances of oldVal that appear in s by newVal.Test your function by using it to replace common abbreviations, such as “tho” by “though” and “thru” by “through”.

```cpp
auto replace_with(string &s, string const &oldVal, string const &newVal)
{

    for (auto cur = s.begin(); cur <= s.end() - oldVal.size();)
    {
        if (oldVal == string{cur, cur + oldVal.size()})
        {
            cur = s.erase(cur, cur + oldVal.size());
            cur = s.insert(cur, newVal.begin(), newVal.end());
            cur += newVal.size();
        }
        else
        {
            ++cur;
        }
    }
}
```

### Array and string

copy an array:

```cpp
#include<string.h>
memcpy(b, a, sizeof(int)*k)
memcpy(b, a, sizeof(a))
```

*reset* an array:

```cpp
#include<string.h>
memset(a, 0, sizeof(a))
```

## Vector and Iterator

### library vector type

The `push_back()` operation takes a value and "pushes" and values as a new last element onto the "back" of the vector.

Example: *Read* a sequence of words from cin and *store* the values a vector. After you've read all the words, process the vector and change each word to *uppercase*. *Print* the transformed elements, *eight* words to a line.

```cpp
int main(int argc, char const *argv[])
{
    vector<string> vec;
    for (string word; cin >> word; vec.push_back(word))
        ;
    //standard store operation
    for (auto &str : vec)
        for (auto &c : str)
            c = toupper(c);

    for (string::size_type i = 0; i != vec.size(); ++i)
    {
        if (i != 0 && i % 8 == 0)
            cout << endl;
        cout << vec[i] << " ";
    }
    cout << endl;
    return 0;
}
```

## Iterators

### toupper example

Example: capitalize the first character of a *string* using an iterator of a subscript:

```cpp
string s("some string");
if (s.begin() != s.end()) //make sure s is empty
{
    auto it = s.begin();
    *it = toupper(*it);
}
//Some string
```

As with pointers, we can dereference an iterator to obtain the element denoted by an element.

```cpp
string s("some string");
for( auto it = s.begin(); it != s.end() && !isspace(*it); ++it)
    *it = toupper(*it);
//SOME string
```

### twice iterator value

Example: write a program to create a vector with ten int elements. Using an iterator, assign each element a value that is twice its current value. Test your program by printing the vector.

``` cpp{13}
#include <iostream>
#include <iterator>
#include <vector>
using namespace std;

int main(int argc, char const *argv[])
{
    // vector<int> v{ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9};
    vector<int> v;
    for (int i = 0; i < 10; i++)
        v.push_back(i);
    //2 ways to init a vector with ten int element
    for (auto it = v.begin(); it != v.end(); ++it)
        *it *= 2;
    for (auto i : v)
        cout << i << " ";
    cout << endl;
    return 0;
}
```

### Find in iterator

Example(9.4): write a function that takes a pair of iterators to a vector and an int value. **Look for** the value in the range and return an iterator to the requested element:

```cpp
#include <iostream>
#include <vector>
using namespace std;

auto contains(vector<int>::const_iterator first, vector<int>::const_iterator last, int value)
{
    for (; first != last; ++first)
    {
        if (*first == value)
            return first;
    }
    return last;
}

int main(int argc, char const *argv[])
{
    vector<int> v{1, 2, 3, 4, 5, 7, 8, 9};
    auto find_result = contains(v.begin(), v.end(), 9);
    cout << *find_result << endl;
    return 0;
}
```

## Makefile

### Example

My Text editor `MAKEFILE`:

```makefile
kilo: kilo.c
        $(CC) kilo.c -o kilo -Wall -Wextra -pedantic -std=c99
```

### CMake

A `CMakeLists.txt` file example:

```bash
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