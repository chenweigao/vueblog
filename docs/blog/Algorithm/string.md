# String Summary

在算法中，字符串的操作和数组一样，都是很热门的考察点，这篇文章将总结一下常见的有关 string 的算法，方便查阅学习、总结。

## Problems

### 查找字符串中第一个出现的不重复的元素（阿里）

这道题目是阿里面试的第一道算法题目，题目意思大概如下：

[https://leetcode.com/problems/first-unique-character-in-a-string/](https://leetcode.com/problems/first-unique-character-in-a-string/)

类似于这道题目，但是不同的是需要返回这个字符，而不是字符的下标，解决方法的比较优秀的解法是使用**hash map**，但是面试的时候限定了这个题目不能使用任何的自带库，所以 `unordered_map` 是无法使用的，我们需要自己创建一个 hash(这也是最快的解法)：

```cpp
class Solution {
public:
    int firstUniqChar(string s) {
        int hash[26] = {0};
        for(auto &c: s)
        {
            hash[c]++;
        }
        for(int j = 0; j < s.length(); j++)
        {
            if(hash[s[j]] == 1)
                return j;
        }
        return -1;
    }
};
```

使用 `unordered_map` 的解法如下：

```cpp
class Solution {
public:
    int firstUniqChar(string s) {
        unordered_map<char, int> hash;
        for(auto &ch: s)
        {
            hash[ch]++;
        }
        for(int i = 0; i < s.length(); i++)
        {
            if(hash[s[i]] == 1)
                return i;
        }
        return -1;
    }
};


```

如果使用 python 的话，使用 hash_map 容器 `collections.Counter()`:

```py
class Solution:
    def firstUniqChar(self, s: str) -> int:
        counter = collections.Counter(s)
        for idx, ch in enumerate(s):
            if counter[ch] == 1:
                return idx
        return -1
```

或者自己创建一个 dict：

```py
class Solution:
    def firstUniqChar(self, s: str) -> int:

        dic = {}
        for ch in s:
            dic[ch] = dic.get(ch, 0) + 1
        for i in range(len(s)):
            if dic.get(s[i], 0) == 1:
                return i
        return -1
```

### 替换字符串中的空格

> 请实现一个函数，将一个字符串中的每个空格替换成“%20”。例如，当字符串为We Are Happy.则经过替换之后的字符串为We%20Are%20Happy。

这道题目用python 实现比较简单：

```py
class Solution:
    def replaceSpace(self, s):
        res = ''
        for ch in s:
            if ch == ' ':
                res += '%20'
            else:
                res += ch
        return res
```

但是用 C++ 实现会比较麻烦：

```cpp
class Solution {
public:
    void replaceSpace(char *str,int length) {
        char s;
        int newlen = length;
        for(int i = 0; str[i] != '\0'; i++)
        {
            if(str[i] == ' ')
            {
                newlen += 2;
            }
        }
        str = (char *)malloc(newlen * sizeof(char));

        for(int i = newlen - 1; i >= 0; i--)
        {
            if(str[i] == ' ')
            {
                str[i] = '0';
                str[i - 1] = '2';
                str[i - 2] = '%';
            }
            else
            {
                str[i] = str[length];
                length--;
            }
        }
    }
};
```

放在这里可以参考。