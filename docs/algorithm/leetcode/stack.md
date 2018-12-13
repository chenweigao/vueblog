# Stack

## Valid Parentheses

堆栈在处理递归问题时非常有用，对于**括号匹配**，是栈应用的经典案例：

1. Initialize a stack S: 初始化栈

2. Process each bracket(括号) of the expression one at a time.

3. If we encounter an opening bracket, then we check the element on the top of the stack. (遇到左括号则入栈)

4. If the element at the top of the stack is an openning bracket **of the same type**, the we **pop** it off the stack and continue processing. (栈顶元素和外面相匹配，则出栈继续)

5. Else this implies an invaild expression.

6. In the end, if we are left with a stack still having elements, then this implies an invaild expression. (栈不空则表达式非法)

Implementation:

```py
def isValid(s):
    stack = []
    mapping = {"]":"[", "}":"{", ")":"("}

    for char in s:
        if char in mapping.keys():
            top_element = stack.pop() if stack else '#'
            if mapping[char] != top_element:
                return False
        else:
            stack.append(char)
    return not stack
# s = "()"
```

[Solution of C++](https://github.com/chenweigao/_code/blob/master/cpp/stack_valid_parenttheses.cpp)

Explaination:

- 我们遍历字符串 s, 遇到左括号则入栈，遇到右括号 (keys) 则弹出栈顶元素进行比较（在栈非空的前提下）
- 最终返回值：栈空则合法，等价于 `return stack==[]`