# Sort Implementaion

## Quick Sort

```py
def partition(arr, first, last):
​    pivot = first
​    for pos in range(first, last):
​        if arr[pos] < arr[last]:
​            arr[pos], arr[pivot] = arr[pivot], arr[pos]
​            pivot += 1
​    arr[pivot], arr[last] = arr[last], arr[pivot]
​    return pivot

def qucik_sort(arr, first, last):
​    if first < last:
​        pi = partition(arr, first, last)
​        qucik_sort(arr, first, pi-1)
​        qucik_sort(arr, pi+1, last)

A = [534, 246, 933, 127, 277, 321, 454, 565, 220]
qucik_sort(A, 0, len(A) - 1)
print(A)
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

A = [534, 246, 933, 127, 277, 321, 454, 565, 220]
selection_sort(A)
print(A)
```

## Heapsort

## Other Functions in Sorting

### 1. Sort using Template

使用模板降序排列：

```cpp
struct greater
{
    template<class T>
    bool operator()(T const &a, T const &b) const { return a > b; }
};
std::sort(numbers.begin(), numbers.end(), greater());
```

### Swap

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