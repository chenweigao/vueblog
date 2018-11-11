# Vector and Iterator

## library vector type

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