# Data Struct

## Stack

### Valid Parentheses

堆栈在处理递归问题时非常有用，对于**括号匹配**，是栈应用的经典案例：

1. Initialize a stack S: 初始化栈

2. Process each bracket(括号) of the expression one at a time.

3. If we encounter an opening bracket, then we check the element on the top of the stack. (遇到左括号则入栈)

4. If the element at the top of the stack is an openning bracket **of the same type**, the we **pop** it off the stack and continue processing. (栈顶元素和外面相匹配，则出栈继续)

5. Else this implies an invaild expression.

6. In the end, if we are left with a stack still having elements, then this implies an invaild expression. (栈不空则表达式非法)

Implementation:

```py
def isValid(s):
    stack = []
    mapping = {"]":"[", "}":"{", ")":"("}

    for char in s:
        if char in mapping.keys():
            top_element = stack.pop() if stack else '#'
            if mapping[char] != top_element:
                return False
        else:
            stack.append(char)
    return not stack
# s = "()"
```

[Solution of C++](https://github.com/chenweigao/_code/blob/master/cpp/stack_valid_parenttheses.cpp)

Explaination:

- 我们遍历字符串 s, 遇到左括号则入栈，遇到右括号 (keys) 则弹出栈顶元素进行比较（在栈非空的前提下）
- 最终返回值：栈空则合法，等价于 `return stack==[]`


## Map and Set

Map 和 Set 都是关联容器，关联容器支持普通容器的操作，但不支持顺序容器位置相关的操作  (`push_back` or `push_front`)

### unordered_map

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

:::tip 拓展
Python map 的初始化比较简单：

```py
mapping = {
    "]":"[",
    "}":"{"
}
```

注意加以区别！
:::

### map

Example: [单词计数器](https://github.com/chenweigao/_code/blob/master/cpp/map_word_count.cpp)

Using map's includes:

```cpp
#include <map>
#include <string>
using Map = std::map<std::string, std::size_t>;

Map my_map;
````

```cpp
auto count()
{
    Map counts;
    for (string w; cin >> w; ++counts[w])
        ;
    return counts;
}
```

Print this map's key and value:

```cpp
for(auto &kv : my_map)
    std::cout << kv.first << : << kv.second << std::endl;
    // words : counts
```

### set

1. 使用 set 一般用于 **判断一个值是否存在其中**
2. when to keep elements sorted and unique.

Example: 忽略常见单词，只对不在集合中的单词统计出现次数：

```cpp {3}
set<string> exclude = {"some", "words"};
//code
if(exclude.find(word) == exclude.end()) {
    //code
}
```

对比如果使用 vector 实现：

```cpp
vector<string> exclude = {"some", "words"};
//code
auto is_exclude = std::binary_search(exclude.cbegin(), exclude.cend(), word);
//bool binary_search()
auto reply = is_exclude ? "excluded" : "not excluded";
```

## BST

[Advantages of BST(Binary Search Tree) over Hash Table](https://www.geeksforgeeks.org/advantages-of-bst-over-hash-table/)

- We can get all keys in sorted order by just doing Inorder Traversal of BST.
- Doing order statistics, finding closest lower and greater elements, doing range queries are easy to do with BSTs.
- BSTs are easy to implement compared to hashing, we can easily implement our own customized BST.
- ...
- Hash table supports following operations in Θ(1) time: **search insert and delete**, BST is O(logn) for these operation.

## Red-Black Tree