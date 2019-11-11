# DFS and BFS

- [number of island: LC200](https://leetcode.com/problems/number-of-islands/)

- [Target Sum: LC494](https://leetcode.com/problems/target-sum/)

<!-- more -->

## Problems content

- [number of island: LC200](https://leetcode.com/problems/number-of-islands/)

- [Target Sum: LC494](https://leetcode.com/problems/target-sum/)

## DFS

### 矩阵中的最长递增路径

[https://leetcode-cn.com/problems/longest-increasing-path-in-a-matrix/](https://leetcode-cn.com/problems/longest-increasing-path-in-a-matrix/)

> 给定一个整数矩阵，找出最长递增路径的长度。
>
> 对于每个单元格，你可以往上，下，左，右四个方向移动。 你不能在对角线方向上移动或移动到边界外（即不允许环绕）。

这是一道迷宫搜索问题，可以使用 DFS 搜索，这样可以熟悉 DFS 的步骤。

```py
class Solution:
    def __init__(self, *args, **kwargs):
        self.dirs = [
            [0, 1], [1, 0], [0, -1], [-1, 0]
        ]
        self.m = None
        self.n = None

    def longestIncreasingPath(self, matrix: 'List[List[int]]') -> int:
        if len(matrix) == 0:
            return 0
        self.m = len(matrix)
        self.n = len(matrix[0])
        ans = 0
        for i in range(self.m):
            for j in range(self.n):
                ans = max(ans, self.dfs(matrix, i, j))
        return ans

    def dfs(self, matrix, i, j):
        ans = 0
        for d in self.dirs:
            x = i + d[0]
            y = j + d[1]
            if x >= 0 and x < self.m and y >= 0 and y < self.n and matrix[x][y] > matrix[i][j]:
                ans = max(ans, self.dfs(matrix, x, y))
        ans += 1
        return ans

nums = [
    [3, 4, 5],
    [3, 2, 6],
    [2, 2, 1]
]

print(Solution().longestIncreasingPath(nums))
```

