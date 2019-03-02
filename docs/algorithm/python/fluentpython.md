
# Fluent Python

Python’s simplicity lets you become productive quickly, but this often means you aren’t using everything it has to offer.  With this hands-on guide, you’ll learn how to write effective, idiomatic Python code by leveraging its best—and possibly most neglected—features. Author Luciano Ramalho takes you through Python’s core language features and libraries, and shows you how to make your code shorter, faster, and more readable at the same time.

## Data Struct

### 1. Slicing

- basic slicing

```python
>>> s = 'bicycle'
>>> s[3:]
'ycle'
>>> s[:3]
'bic'
>>> s[::3]
'bye'
>>> s[::-1]
'elcycib'
```

If you want to *reverse a string*, the last example is a choice.

- assigning to slices

```python
>>> l = list(range(10))
>>> l
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
>>> l[2:5]
[2, 3, 4]
>>> l[2:5] = [20,30]
>>> l
[0, 1, 20, 30, 5, 6, 7, 8, 9]
```

what you can see is that **[2,3,4]** is replaced by **[20,30]**

### 2. List
- list of list

  ```python
  >>> board = [['_'] * 3 for i in range(3)]
  >>> board
  [['_', '_', '_'], ['_', '_', '_'], ['_', '_', '_']]
  >>> board[1][2] = 'x'
  >>> board
  [['_', '_', '_'], ['_', '_', 'x'], ['_', '_', '_']]
  ```

  The first line is the right way to multiply it,rather than:

  ```python
  >>> wrong_board = [['_'] * 3] * 3
  >>> wrong_board[1][2] = 0
  >>> wrong_board
  [['_', '_', 0], ['_', '_', 0], ['_', '_', 0]]
  ```

  ​

- list.sort & sorted

  The list.sort method sorts a list in-place, that is, without making a copy.

  In contrast, the built-in function sorted creates a new list and returns it.

- make list a stack or queue

  The .append and .pop methods make a list usable as a stack or a queue (if you use .append and .pop(0), you get LIFO, Last in First out, behavior). But inserting and removing from the left of a list (the 0-index end) is costly because the entire list must be shifted.

- deques and queues

  ```python
  from collections import deque
  dq = deque(range(10), maxlen=10)
  #dq: deque([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], maxlen=10)
  dq.rotate(3)
  #[7, 8, 9, 0, 1, 2, 3, 4, 5, 6]
  #this function rotates items from the right end
  #and when dp.rotate(-3) is from the left
  dq.appendleft(-1)
  #[-1, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  dq.extend([11, 22, 33])
  #[3, 4, 5, 6, 7, 8, 9, 11, 22, 33]
  #default is insert from right
  ```

  what is different between *append* and *extend*? here is an example:

  ```python
  >>> dp
  deque([10, 30, 20, 10, 3, 4, 5, 6, 7, 8], maxlen=10)
  >>> dp.appendleft([1, 2])
  >>> dp
  deque([[1, 2], 10, 30, 20, 10, 3, 4, 5, 6, 7], maxlen=10)
  >>> dp.extendleft([1, 2])
  >>> dp
  deque([2, 1, [1, 2], 10, 30, 20, 10, 3, 4, 5], maxlen=10)
  ```

  note that **extendleft(iter)** works by appending each successive item of the iter argument to the left of the deque, therefore the final position of the items is reversed.

### 3. Bisect

`#bisect: [baɪ'sɛkt]`

` Bisection is the general activity of dividing a geometric figure into two equal parts`

```python
import sys
import bisect

HAYSTACK = [1, 4, 5, 6, 8, 12, 15, 20, 21, 23, 23, 26, 29, 30]
NEEDLES = [0, 1, 2, 5, 8, 10, 22, 23, 29, 30, 31]

ROW_FMT = '{0:2d} @ {1:2d}    {2}{0:<2d}'

def demo(bisect_fn):
    for needle in reversed(NEEDLES):
        position = bisect_fn(HAYSTACK, needle)
        offset = position * '  |'
        print(ROW_FMT.format(needle, position, offset))

if __name__ == '__main__':

    if sys.argv[-1] == 'left':
        bisect_fn = bisect.bisect_left
    else:
        bisect_fn = bisect.bisect

    print('DEMO:', bisect_fn.__name__)
    print('haystack ->', ' '.join('%2d' % n for n in HAYSTACK))
    demo(bisect_fn)
```

the output is:

```bash
DEMO: bisect
haystack ->  1  4  5  6  8 12 15 20 21 23 23 26 29 30
31 @ 14      |  |  |  |  |  |  |  |  |  |  |  |  |  |31
30 @ 14      |  |  |  |  |  |  |  |  |  |  |  |  |  |30
29 @ 13      |  |  |  |  |  |  |  |  |  |  |  |  |29
23 @ 11      |  |  |  |  |  |  |  |  |  |  |23
22 @  9      |  |  |  |  |  |  |  |  |22
10 @  5      |  |  |  |  |10
 8 @  5      |  |  |  |  |8
 5 @  3      |  |  |5
 2 @  1      |2
 1 @  1      |1
 0 @  0    0
```

### 4. Set

python的集合是一个十分方便的对于元素可以操作的序列

```python
student = {'Tom', 'Jim', 'Mary', 'Tom', 'Jack', 'Rose'}
print(student)   # 输出集合，重复的元素被自动去掉
 
# set可以进行集合运算
a = set('abracadabra')
b = set('alacazam')

print(a - b)     # a和b的差集
 
print(a | b)     # a和b的并集
 
print(a & b)     # a和b的交集
 
print(a ^ b)     # a和b中不同时存在的元素
```

set的集合运算十分有用，看下面的代码：

``` python
class Solution:
    def findWords(self, words):
        """
        :type words: List[str]
        :rtype: List[str]
        """
        a = set('qwertyuiop')
        b = set('asdfghjkl')
        c = set('zxcvbnm')
        ans = []
        for word in words:
            w = set(word.lower())
            if (w & a == w) or (w & b == w) or (w & c == w):
                ans.append(word)
        return ans
```

上述代码实现了一个求解某序列是否在键盘的同一行的操作，通过求交集看是否结果等于自身就可以很方便地求解出结果。

## High-level Function

### 1. count()

用于统计字符串里某个字符出现的次数count()方法，语法：

```
str.count(sub, start= 0,end=len(string))
```

**参数**

- sub -- 搜索的子字符串。
- start -- 字符串开始搜索的位置。默认为第一个字符,第一个字符索引值为0。
- end -- 字符串中结束搜索的位置。字符中第一个字符的索引为 0。默认为字符串的最后一个位置。

**返回值**

- 该方法返回子字符串在字符串中出现的次数

**思考**：理解下面这行代码所实现的功能

```py

return sum(map(S.count, J))
return not sum(map(({'R': 1, 'L': -1, 'U': 1j, 'D': -1j}).get, moves))

```

第一行代码实现了两个字符串中共同字符的计数。

第二行代码实现了一个计算坐标的方法。

### 2. map()

1. **描述**

   **map()** 会根据提供的函数对指定序列做映射。

   第一个参数 function 以参数序列中的每一个元素调用 function 函数，返回包含每次 function 函数返回值的新列表。

2. **语法**

   map() 函数语法：

   ```py
   map(function, iterable, ...)
   ```

3. **参数**

   function -- 函数，有两个参数

   iterable -- 一个或多个序列 

**Usage**

e.g.1. 将一个列表中的整数转化成字符串存储如另一个列表中：

```python
newList = []
for number in oldList: 
    newList.append(str(number))
```

用`map()`等效于：

```python
map(str, oldList)
```

### int2list and list2int

- int2list

```py
def int2list(intNum):
    return list(map(int, str(intNum)))
```

- list2int

```py
def list2int(aList):
    return int(''.join(list(map(str, aList))))
```


### 3. Bit operation

| 运算符 | 描述     |
| ------ | -------- |
| &      | 按位与   |
| \|     | 按位或   |
| ^      | 按位异或 |
| ~      | 按位取反 |
| <<     | 左移     |
| \>>    | 右移     |

`str(bin(x^y).count'1')`计算了两个整数之间的Hamming distance.

Questions: to think what this code did:

```python
#LC693
class Solution:
    def hasAlternatingBits(self, n):
        if not n:
            return False
        num = n ^ (n >> 1)
        return not (num & (num + 1))
```
### 4. all() 

**USE**: 

```
all(iterable, /)
    Return True if bool(x) is True for all values x in the iterable.
If the iterable is empty, return True.
```

This is **example 1**(LeetCode 728) about the usage:

``` python
class Solution:
    def selfDividingNumbers(self, left, right):
        """
        :type left: int
        :type right: int
        :rtype: List[int]
        """
       # return [num for num in range(left, right+1) 
   	   # if all((int(d) and not num % int(d)) for d in str(num))]
        is_self_dividing = lambda num: '0' not in str(num) 
        and all([num % int(digit) == 0 for digit in str(num)])
        x = filter(is_self_dividing, range(left, right + 1))
        return list(x)
```

该段代码使用了all的特性，并且在最后返回了一个filter的可迭代对象，然后转化成list，得到结果。

**example 2** (LeetCode 766):

```python
class Solution:
    def isToeplitzMatrix(self, matrix):
        """
        :type matrix: List[List[int]]
        :rtype: bool
        """
        return all(matrix[i][j] == matrix[i+1][j+1] 
                   for i in range(len(matrix) - 1) for j in range(len(matrix[0]) -1))
```

Tips: `len(matrix)` gets the number of rows, `len(matrix[0])` gets the number of columns.

### 5. filter()

假设你想从考试分数的一个列表中删除所有的0分，如下的循环可以完成这个任务：

```python
newList = []
for number in oldList:
    if number > 0 :
        newList.append(number)
```

如果使用`filter()`则只需要如下代码：

```python
newList = list(filter(isPositive, oldList))
```

再使用`lambda`表达式创建匿名函数：

```python
newList = list(filter(lambda number: number > 0, oldList))
```

### 6. reduce()

`functools.reduce`可以应用带有两个参数的函数来将一个可迭代的对象的项转化为单个的值，而干函数的两个参数是下一项和前一次应用该函数的结果。

e.g. 计算10的阶乘：

```python
import functools
product = functools.reduce(lambda x, y: x*y, range(1,11))
```

### 7. __name__

`__name__`这个系统变量显示了当前模块执行过程中的名称，`__main__`一般作为函数的入口，或者整个工程开始运行的入口。

```python
#test.py
def HaveFun():
    if __name__ == '__main__':
        print('My name is %s' % __name__)
    else:
        print('Someone else called me! my name is %s' % __name__)
HaveFun()      
```
output: `My name is __mian__`



```
#main.py
import test
test.HaveFun()
```
output: 

```
$ Someone else called me! my name is test
$ Someone else called me! my name is test
```

## Decorators

### @property

In Python, `property()` is a built-in function that creates and returns a property object. The signature of this function is

```
property(fget=None, fset=None, fdel=None, doc=None)
```

where, `fget` is function to get value of the attribute, `fset` is function to set value of the attribute, `fdel` is function to delete the attribute and `doc` is a string (like a comment). 

To better understand this, [see this blog](https://www.programiz.com/python-programming/property).

## Python3 I/O

### Format Output

When output, we can use `str()`, `repr()` and `print()` , the different between them could be found in [Python3 Tutorial](http://www.runoob.com/python3/python3-inputoutput.html).

The usage of `format` , one thing to note :

```python
print('{0} and {1}'.format('Google', 'Baidu'))
>>> Google and Baidu
print('{1} and {0}'.format('Google', 'Baidu'))
>>> Baidu and Google

print('{0:2d} {1:3f}'.format(1,2))
# specifies the length of the placeholder

print('{name}: age}'.format(name = 'weigao', age = '18'))
>>> weigao: 18
```

The `%` also can be use to format output, but it is an old way, so use it as little as possible.

## Input

Python provides the `input()` function from the standard input to a line, and the default standard input is the keyboard.

```python
str = input("please input: ");
print("your input is: ", str)
```

## Effective Python

### 1. Function Closure

([EP 15](https://github.com/chenweigao/_code/blob/master/Effective_Python/EP15.py))有的时候需要*将重要的消息或者意外的事件优先显示在其他内容前面*，可以使用以下代码：

```python
def sort_priority(values, group):
    found = False

    def helper(x):
        nonlocal found
        if x in group:
            found = True
            return (0, x)
        return (1, x)
    values.sort(key=helper)
    return found
```

上述代码把helper这个闭包函数，传给sort方法的key参数。

**思考**：第7行和第8行的return的含义？

### 2. Generator

([EP 16](https://github.com/chenweigao/_code/blob/master/Effective_Python/EP16.py))生成器是使用`yield`表达式的函数，为了提高编程效率，考虑用**生成器来改写直接返回列表的函数**。调用生成器时，会返回迭代器。

在这个例子中的错误示例中，使用`append`把所有的结果都放在列表里面，如果输入量非常大的话，会导致程序消耗尽内存而奔溃。