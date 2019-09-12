# Sort

[GitHub Sort code](https://github.com/chenweigao/_code/tree/master/sort)

## Insertion Sort

直接使用 bisect 模块，可以直接插入某个元素，返回排序好的元素：

```py
import bisect
nums = [1, 3, 4]
bisect.insort(nums, 2)
print(nums)  # [1, 2, 3, 4]
```

## Merge Sort

$T(n) = O(nlog_{2}n)$

another example:

- Counting Inversions

- Matrix Multiplication:
  - Brute Force(暴力):  $O(n^3)$ arithmetic operations

## Quick Sort

- Worst-case running time $O(n^2)​$ :
  - input sorted or reverse sorted, partition around min or max element.
  - one side of partition has no elements.
  - $T(n) = T(0) + T(n–1) + cn$
- Expected running time $O(nlgn)$
  - If we are really lucky, partition splits the array evenly $\frac{2}{n}$ : $T(n)=2T(n/2)+Θ(n)=Θ(nlgn)$

```py
def qsort(arr):
    if not arr:
        return []
    else:
        pivot = arr[0]
        l = [_ for _ in arr if _ < pivot]
        r = [_ for _ in arr[1:] if _ >= pivot]
        return qsort(l) + [pivot] + qsort(r)
```

## Selection Sort

```py
def selection_sort(arr):
​    for i in range(len(arr)):
​        minimum = i
​        for j in range(i+1, len(arr)):
​            if arr[j] < arr[minimum]:
​                minimum = j
​        arr[minimum], arr[i] = arr[i], arr[minimum]
​    return arr
```

## Sort using Template

C++ 使用模板降序排列：

```cpp
struct greater
{
    template<class T>
    bool operator()(T const &a, T const &b) const { return a > b; }
};
std::sort(numbers.begin(), numbers.end(), greater());
```

## Swap

1. 基本实现：

    ```cpp
    //引用实现
    swap(int &x, int &y){
    ​    int temp;
    ​    temp = x;
    ​    x= y;
    ​    y =x;
    }
    swap(x, y);

    //指针实现
    swap(int *x, int *y){
    ​       int temp;
    ​       temp = *x;
    ​       *x = *y;
    ​       *y = temp;
    }
    swap(&x, &y);
    ```

2. 异或实现：

    ```cpp
    void swap(int &x, int &y){
    ​    x ^= y;
    ​    y ^= x;
    ​    x ^= y;
    }
    swap(x, y);

    void swap(int *x, int *y){
    ​    *x ^= *y;
    ​    *y ^= *x;
    ​    *x ^= *y;
    }
    swap(&x, &y);
    ```

3. 加减操作：

    ```cpp
    void swap(int &x, int &y){
    ​    x = x + y;
    ​    y = x - y;
    ​    x = x - y;
    }
    swap(x, y);

    void swap(int *x, int *y){
    ​    *x = *x + *y;
    ​    *y = *x - *y;
    ​    *x = *x - *y;
    }
    swap(&x, &y);
    ```

4. 宏定义：

   ```cpp
   #define swap(x, y) { x ^= y; y ^= x; x ^= y; }
   #define swap(x, y) { x = x + y; y = x - y; x = x - y; }
   swap(x, y);
   ```

## Problems

### Largest Number - 拼接最大数

> Given a list of non negative integers, arrange them such that they form the largest number.
>
> Input: [10,2]
>
> Output: "210"

对于这个题目，本质上是一个排序问题，要是不使用自带的排序方法，可以使用冒泡排序的方法。

10 和 2 的大小关系（或者说前后顺序），可以根据 10 + 2 = 102 和 2 + 10 = 210 的大小来判断。

这是百度百科冒泡排序算法的参考：

```c
void bubbleSort(elemType arr[], int len)
{
    elemType temp;
    int i, j;
    for (i = 0; i < len - 1; i++)
        for (j = 0; j < len - 1 - i; j++)
        {
            if (arr[j] > arr[j + 1])
            {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
}
```

该题目的解法如下：

```py
class Solution:
    def largestNumber(self, nums: List[int]) -> str:
        for i in range(len(nums) - 1):
            for j in range(len(nums) - i - 1):
                if int(str(nums[j]) + str(nums[j + 1])) < int(str(nums[j + 1]) + str(nums[j])):
                    nums[j], nums[j+1] = nums[j+1], nums[j]
        if set(nums) == {0}:
            return '0'
        res = ''.join([str(_) for _ in nums])
        i = 0
        while i < len(res) and res[i] == '0':
            i += 1
            res = res[1:]
        return res  
```

附上 leetcode 大神的解法：

```py
class Solution:
    def largestNumber(self, nums: List[int]) -> str:
        nums = list(map(str, nums))
        max_len = max(map(len, nums))
        nums.sort(key=lambda x: x*(max_len // len(x) + 1), reverse=True)
        return ''.join(nums) if nums[0] != '0' else '0'
```

主要到 lambda 表达式中出现了一个 `+1`, 是因为有时候会遇到奇数的情况，比如说：[121, 12] 这种情况，会得出商为 1, 从而产生错误的结果。

