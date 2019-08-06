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
