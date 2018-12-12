# Map and Set

## map & unordered_map

- What is difference between `map` and `unordered_map`?

[Stack overflow](https://stackoverflow.com/questions/2196995/is-there-any-advantage-of-using-map-over-unordered-map-in-case-of-trivial-keys)

[Map vs unordered_map](https://www.geeksforgeeks.org/map-vs-unordered_map-c/)

Conclusion: `unordered_map` is generally use more memory, better for **lookup-retrieval**, much slower at repeatedly inserting and removing elements.

Code example for `map` usage: [GitHub](https://github.com/chenweigao/_code/blob/master/cpp/unordered_map.cpp): 如何遍历、赋值。

关联容器 `unordered_map` 的初始化：

```cpp
unordered_map<char, int> roman = {
    {'I', 1},
    {'V', 5}
};
```

也可以利用 for 循环赋值初始化，具体参照上述 GitHub 示例。

## map

Example: [单词计数器](https://github.com/chenweigao/_code/blob/master/cpp/map_word_count.cpp)

```cpp
auto count()
{
    Map counts;
    for (string w; cin >> w; ++counts[w])
        ;
    return counts;
}
```

Using map's includes:

```cpp
#include <map>
#include <string>

using Map = std::map<std::string, std::size_t>;

Map my_map;
````

## set

1. 使用 set 一般用于 **判断一个值是否存在其中**
2. when to keep elements sorted and unique.

## BST

[Advantages of BST(Binary Search Tree) over Hash Table](https://www.geeksforgeeks.org/advantages-of-bst-over-hash-table/)

- We can get all keys in sorted order by just doing Inorder Traversal of BST.
- Doing order statistics, finding closest lower and greater elements, doing range queries are easy to do with BSTs.
- BSTs are easy to implement compared to hashing, we can easily implement our own customized BST.
- ...
- Hash table supports following operations in Θ(1) time: **search insert and delete**, BST is O(logn) for these operation.

## Red-Black Tree