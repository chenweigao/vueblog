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

### Validate Stack Sequence

给定入栈和出栈序列，判断是否合法：

```py
def validateStackSequences(pushed: 'List[int]', popped: 'List[int]') -> bool:
    i = 0
    stack = []
    for x in pushed:
        stack.append(x)
        while stack and i < len(popped) and stack[-1] == popped[i]:
            stack.pop()
            i += 1
    return stack == []
    # returen i == len(poped)
```

注意到我们不改变 `pushed` 和 `poped`, 而是使用一个 `stack = []` 作为辅助操作。

当没有找到与 `stack` 栈顶元素相等的元素时，不停地往 `stack` 中添加元素，

## Map and Set

Map 和 Set 都是关联容器，关联容器支持普通容器的操作，但不支持顺序容器位置相关的操作  (`push_back` or `push_front`)

### HashMap in Python - Counter

```py
from collections import Counter
```

在腾讯面试的过程中，被问到了一个题目，要求找出一个数组中第一个单独出现的数字，例如 [2, 4, 2, 3, 1, 3], 则结果应该是 4.

题目如果用 hashmap 去求解的话只需要：

```py

from collections import Counter
nums = [2, 4, 2, 3, 1, 3]

nums_counter = Counter(nums)

res = min(nums_counter, key = nums_counter.get)

```

`Counter` 为 Python 内置的 hashmap, 具体可以查询 [Counter](https://docs.python.org/3/library/collections.html#collections.Counter), 对于那个排序而言，`key` 会指定一个函数用于元素的比较，`nums_counter.get()` 方法用于得到某个 key 的 value 值。

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

```cpp
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

## Linked List

### Reverse Linked List

- Iterative method

```py
def reverseList(self, head):

    preNode = None
    curNode = head

    while curNode is not None:
        next = curNode.next
        curNode.next = preNode
        preNode = curNode
        curNode = next

    return preNode
```

- Recursive method

 1) Divide the list in two parts - first node and rest of the linked list.
 2) Call reverse for the rest of the linked list.
 3) Link rest to first.
 4) Fix head pointer

由于迭代较快，故建议经常使用迭代法。

### Intersection of Linked List

判断两个链表是否有交叉(Intersection), LC160.

实现思路有：

- 根据链表是否有环判断

先遍历一个链表找到其尾部，然后将尾部的 next 指针指向另一个链表，这样子两个链表就合成了一个链表，判断原来的两个链表是否有交叉也就变成了判断一个**单链表是否有环**。

找出交点的方法是，遍历两个链表，长度较长的链表指针向后移动 |len1 - len2| 个单位，然后开始遍历两个链表，判断节点是否相等（节点的地址）。

- 根据总结的规律判断

该方法比较巧妙，代码如下：

```py
def getIntersectionNode(self, headA, headB):
    if headA is None or headB is None:
        return None

    pa = headA
    pb = headB

    while pa is not pb:
        pa = headB if pa is None else pa.next
        pb = headA if pb is None else pb.next

    return pa
```

核心思路在于，同时遍历两个链表，如果到链表结束，则将指针指向另一个链表，遍历直到两个移动的指针相等。

:::tip 判断单链表是否有环

一般判断单链表是否有环的方法是设置一块一慢两个指针，看其是否会相等。

:::

### Implement LRU

LRU 为最近最少使用算法，常常用于缓存技术中，其实现方式为**循环双向链表**，实现思想为：

将 chche 的所有位置都用双向链表链接起来，当一个位置被命中以后，将该位置指向链表头的位置，新加入的 chche 直接加到链表头中。

这样，在多次进行 cache 操作后，最近被命中的，就会被向链表头方向移动，而没被命中的向链表后面移动。

缓存已满的时候新加入的数据节点插入链表头部，而删除链表的尾节点。

具体的实现代码可以[参考 GitHub](https://github.com/chenweigao/_code/blob/30551f4e92dab06e127be316cd2f3950eda099ef/LeetCode/LC146_LRU_cache_double_linked_list.py)

```py
class LRUCache:
    def __init__(self, capacity: int):
        self.capacity = capacity
        seld.dic = {}
        self.head = Node(0, 0)
        self.tail = Node(0, 0)
        self.head.next = self.tail
        self.tail.prev = self.head
```

思路是初始化一个 `dict` 用于存储，对双向链表进行操作的同时对这个 `dict` 进行赋值操作，`dict` 的结构为：

- key: LRUCache 中的 key

- value: 一个 `Node` 类型的节点，存储其 `prev` 和 `next` 信息以及最关键的 `value`

其 `put()` 方法为：

```py
def put(self, key: int, value: int) -> None:
    if key in self.dic:
        self._remove(dic[key])
    n = Node(key, value)
    self._add(n)
    self.dic[key] = n
    if len(self.dic) > self.capacity:
        first_node = self.head.next
        self._remove(first_node)
        del self.dic[first_node.key]
```

然后使用双向链表的操作进行插入（尾插）和删除（第一个节点）

也可以使用 Python 中的 `collection.OrderedDict` 来进行存储，使用其 `move_to_end()` 和 `popitem()` 方法，具体代码可以[参考这里](https://github.com/chenweigao/_code/blob/30551f4e92dab06e127be316cd2f3950eda099ef/LeetCode/LC146_LRU_ordereddic.py)

## Binary Tree

### Level Order Traversal

[LC102 - Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/)

代码实现如下：

[Code GitHub - binary_tree](https://github.com/chenweigao/_code/blob/master/python/binary_tree.py)

```py
def levelOrder(root):
    '''
    二叉树的层次遍历
    '''
    if not root:
        return []

    result = [[root.data]]  # 存储层次遍历的结果
    current = [root]  # 存储当前层次内的节点，在循环里面更新

    while True:
        node_list = []  # 临时存储节点
        for node in current:  # 循环内遍历
            if node.left:
                node_list.append(node.left)
            if node.right:
                node_list.append(node.right)
        if node_list == []:
            break
        vals = [node.data for node in node_list]  # 拿出当前层次的节点的值
        result.append(vals)
        current = node_list  # 更新层次
    return result
```

这是目前可以写出的比较高效的一个算法，应当牢记。

## BST

[Advantages of BST(Binary Search Tree) over Hash Table](https://www.geeksforgeeks.org/advantages-of-bst-over-hash-table/)

- We can get all keys in sorted order by just doing Inorder Traversal of BST.
- Doing order statistics, finding closest lower and greater elements, doing range queries are easy to do with BSTs.
- BSTs are easy to implement compared to hashing, we can easily implement our own customized BST.
- ...
- Hash table supports following operations in Θ(1) time: **search insert and delete**, BST is O(logn) for these operation.

## Red-Black Tree