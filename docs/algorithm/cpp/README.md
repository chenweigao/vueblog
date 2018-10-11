# hi

## Array and string

复制数组：

- 从数组a复制k个元素到数组b
- 全部复制

```c
#include<string.h>
memcpy(b, a, sizeof(int)*k)
memcpy(b, a, sizeof(a))
```

将数组清零：

```c
#include<string.h>
memset(a, 0, sizeof(a))
```



