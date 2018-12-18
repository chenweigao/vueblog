# Pointer

:::tip overview
本章节启发自 《C 程序设计新思维》 中的指针章节
:::

## Questions

1. 复制和别名有什么区别？

    [示例代码](https://github.com/chenweigao/_code/blob/master/cpp/pointer_array_3.cpp) 可以看出，对于数组结构的赋值其实是创建了数组的一个别名，当复制被修改时，原数据也别修改。

    如果要复制一个数组，应当使用已经过时的 `memmove`

2. 如何在 C 中返回多个数据项？

    A：可以使用随用随弃的结构体。[示例代码](https://github.com/chenweigao/_code/blob/master/cpp/pointer_array_1.cpp)

3. 数组可否在运行时动态分配内存空间？

    可以，参考问题 5。

4. 如何理解函数堆栈？

    - 使用 `malloc` 分配的内存并不位于栈中，而是在系统中称为堆的空间中

    - 函数帧：函数在内存中占据的空间，用于保存与这个函数有关的信息

5. 如何区分自动、静态和手工内存的区别？

    - 自动：很常见；如果不使用 `static` 关键字，在函数内部声明的所有变量都是自动变量；离开自己的作用域之后被销毁；可以在初始化时设置非常量值；

    - 在函数外部和函数内部使用 `static` 关键字初始化的变量都是静态变量；注意静态变量数据是在 main 函数启动之前被初始化的，因此所有初始化值都必须是**常量**，并且**不需要计算**；在启动时设置为 0;
  
    - 手工内存：涉及到 `malloc` 和 `free` 函数；程序员痛苦的根源；可以在**运行时设置数组长度**，可以**改变长度**，不能使用 `sizeof` 计算数组长度。

## pointer and array

意识到数组和指针其密不可分的关系，参考[示例代码2](https://github.com/chenweigao/_code/blob/master/cpp/pointer_array_2.cpp).

第 6 行体现了将成员 1 的地址取得，而后赋值给新指针，新数组可以包含 `{2, 4, 6, 8}`, 并通过下标访问。

:::tip Question
What is difference between `int an_array[]` and `int *a_pointer` ?
:::

对于此问题，先研究 `int an_array[32]` 执行后会发生什么：

1. 在栈上分配空间，足够容纳 32 个整数；
2. 把 `an_array` 看做一个指针；
3. 把这个指针和新分配的地址**绑定**。

但是当程序在代码中遇到 `int *a_pointer` 的时候，只会做一件事：

**把 `a_pointer` 声明为指针。**

```c
a_pointer = malloc(32*sizeof(int));
a_pointer = an_array;
```

都是被允许的。