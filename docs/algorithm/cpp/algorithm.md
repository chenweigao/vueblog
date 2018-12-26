#  DP Heap sort, Swap 



## Loops and Recursive


### Asymptotic Growth

###  O-notation

- O-notation(Bog-O), When we say “the running time is $O(n^2)$” we mean that the worst-case running time is $ O(n^2)$ – the best case might be better. (渐进上界)
- When we say “the running time is Ω(n2)” we mean that the best-case running time is $$Ω(n^2)$$ – the worst case might be worse.(渐进下界)


### Recurrences

- Substitution method
- Recursion-tree method
- Master method

Simplified Master Theorem:

Let $a \geq 1$ and $b > 1$ be constants and let $T(n)$ be the recurrence $T(n) = aT(\frac{n}{b}) + cn^k$, defined for $n \geq 0$.

1. If $a > b^k$, then $T(n) = \Theta(n^ {log_{a}b})$.
2. If $a = b^k$, then $T(n) = \Theta(n^ k{logn})$.
3. If $a < b^k$ then $T(n) = \Theta(n^k)$.

## Divide-and-Conquer

### Merge Sort 

$T(n) = O(nlog_{2}n)$

another example:

- Counting Inversions
- Matrix Multiplication: 
  - Brute Force(暴力):  $O(n^3)$ arithmetic operations
  - 
### Quick Sort

{% highlight python linenos %}

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

{% endhighlight %}

- Worst-case running time $\Theta(n^2)$:
  - input sorted or reverse sorted, partition around min or max element.
  - one side of partition has no elements.
  - $T(n) = T(0) + T(n – 1) + cn$
- Expected running time $O(nlgn)$
  - If we are really lucky, partition splits the array evenly n/2 : n/2: $T(n) = 2T(n/2) + Θ(n) = Θ(n lg n)$

Divide and conquer: partition, pivot

##  Other Sort


###  Selection Sort

{% highlight python linenos %}

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

{% endhighlight %}

###  Counting-sort

## Heap

### MAX-Heap

Action of build max-heap:

1. 找到最后一个节点的父亲节点
2. 

### Heapsort

Priority Queues

## Elements of DP Algorithms

- Optimal substructure
- Overlapping subproblems


