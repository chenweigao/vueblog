# String

## string.h

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

- isalmun(c) : true if c is a letter or digit

- isalph(c) : letter

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

## Additional string Operations

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

## Array and string

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
