# C Basics - Swap, Struct


<!--more-->

## Define Struct

There are many ways to define *struct*, what we should do is that chose a best way to solve problem.

**Example 1**

```c
struct Point { double x, y; };
double dist(struct Point a, struct Point b){
​    return hypot(a.x-b.x, a.y-b.y);
}
```

**Example2**

```c
typedef struct { double x, y; } Point;
double dist(Point a, Point b){
​    return hypot(a.x-b.x, a.y-b.y);
}
```

As you can see from the comparison, **Example 2** is better, which use `typedef struct { define; }struct name; ` to define.

## Add two numbers

You are given two **non-empty** linked lists representing two non-negative integers. The digits are stored in **reverse order** and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

**Example**

```
Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
```

**code**

```cpp
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
public:
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        ListNode *dummyHead = new ListNode(0);
        ListNode *p = l1, *q = l2, *curr = dummyHead;
        int carry = 0;
        while(p != nullptr || q != nullptr) {
            int x = (p != nullptr)? p->val : 0;
            int y = (q != nullptr)? q->val : 0;
            int sum = carry + x + y;
            carry = sum / 10;
            curr -> next = new ListNode(sum % 10);
            curr = curr->next;
            if(p != nullptr)
                p = p->next;
            if(q != nullptr)
                q = q->next;
        }
        if(carry > 0) {
            curr->next = new ListNode(carry);
        }
        return dummyHead->next;
    }
};
```

##  Swap

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