# Makefile

My Text editor `MAKEFILE`:

```makefile
kilo: kilo.c
        $(CC) kilo.c -o kilo -Wall -Wextra -pedantic -std=c99
```

## CMake

A `CMakeLists.txt` file example:

```bash
# CMake 最低版本号要求
cmake_minimum_required (VERSION 2.8)

# 项目信息
project (Demo1)

# 指定生成目标
add_executable(Demo main.cc)
```

在Linux平台下使用CMake生成Makefile并编译：

1. 编写 CMake 配置文件 CMakeLists.txt 
2. 执行命令 `cmake PATH` 或者 `ccmake PATH` 生成 Makefile 。其中， `PATH` 是`CMakeLists.txt` 所在的目录
3. 使用 `make` 命令进行编译