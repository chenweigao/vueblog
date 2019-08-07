# Summary of LCS

## Summary

LCS 问题有很多的子问题，大致包括以下：

- 最长公共子串，要求子串在原字符串中是**连续**的

- 最长公共子序列

- 最大子序列

- 最长递增子序列

## 最长公共子串


### 暴力求解

```py
def LCSubStr(str1, str2, m, n):
    LCSuff = [[0 for i in range(n + 1)] for j in range(m + 1)]

    # 最长公共子串的长度
    result = 0

    # str1 中的最后相同的位置
    p = 0

    for i in range(m + 1):
        for j in range(n + 1):
            if(i == 0 or j == 0):
                LCSuff[i][j] = 0
            elif(str1[i - 1] == str2[j - 1]):
                LCSuff[i][j] = LCSuff[i-1][j-1] + 1
                result = max(result, LCSuff[i][j])
                p = i
            else:
                LCSuff[i][j] = 0

    return str1[p - result:p], result


X = 'OldSite:GeeksforGeeks.org'
Y = 'NewSite:GeeksQuiz.com'

m = len(X)
n = len(Y)

print('Length of Longest Common Substring is',
      LCSubStr(X, Y, m, n))
```