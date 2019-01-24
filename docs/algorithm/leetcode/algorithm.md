# Algorithm Analysis and Design

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>

## Loops and Recursive

### 1. Asymptotic Growth

### 2. O-notation

- O-notation(Bog-O), When we say “the running time is $O(n^2)$” we mean that the worst-case running time is $O(n^2)$ – the best case might be better. (渐进上界)
- When we say “the running time is Ω(n2)” we mean that the best-case running time is $$Ω(n^2)$$ – the worst case might be worse.(渐进下界)

### 3. Recurrences

- Substitution method
- Recursion-tree method
- Master method

Simplified Master Theorem:

Let $a \geq 1$ and $b > 1$ be constants and let $T(n)$ be the recurrence $T(n) = aT(\frac{n}{b}) + cn^k$, defined for $n \geq 0$.

1. If $a > b^k$, then $T(n) = \Theta(n^ {log_{a}b})$.
2. If $a = b^k$, then $T(n) = \Theta(n^ k{logn})$.
3. If $a < b^k$ then $T(n) = \Theta(n^k)$.

## Divide-and-Conquer

### 1. Merge Sort

$T(n) = O(nlog_{2}n)$

another example:

- Counting Inversions
- Matrix Multiplication: 
  - Brute Force(暴力):  $O(n^3)$ arithmetic operations

### 2. Quick Sort

- Worst-case running time $\Theta(n^2)$:
  - input sorted or reverse sorted, partition around min or max element.
  - one side of partition has no elements.
  - $T(n) = T(0) + T(n–1) + cn$
- Expected running time $O(nlgn)$
  - If we are really lucky, partition splits the array evenly n/2 : $T(n)=2T(n/2)+Θ(n)=Θ(nlgn)$

Divide and conquer: partition, pivot

## Heapsort

Action of build max-heap:

1. 找到最后一个节点的父亲节点
2. 

Priority Queues

## Elements of DP Algorithms

- Optimal substructure
- Overlapping subproblems