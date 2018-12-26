---
sidebar: false
footer: MIT Licensed | Copyright © 2018-present Weigao Chen
---
<!-- <Card/> -->
<!-- <Test2/> -->
<!-- <Homepage/> -->
<!-- <welcome/> -->
<!-- <HomeIndex/> -->
------
::: vue
Hello and Welcome!
:::
-----

2013.09 - Now:

```c {3}
#include <stdio.h>
int main() {
    printf("Hello and Welcome!\n");
    return 0;
}
```

2014.10 - Now:

```c {6}
#include <iostream>
using namespace std;

int main()
{
    cout << "Hello and Welcome!" << endl;
    return 0;
}
```

2015.09 - Now:

```java {5}
class HelloAndWelcome
{
  public static void main(String[] args)
  {
    System.out.println("Hello and Welcome!");
  }
}
```

2017.07 - Now:

```bash {2}
#! /bin/bash
echo "Hello and Welcome!"
```

2017.09 - Now:

```py {2}

print('Hello and Welcome!')
```

2018.09 - Now:

```js {2}

console.log("Hello and Welcome!");
````

2018.09 - Now

```html {8}
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Hello and Welcome!</title>
</head>

<body>
    <div id="app">
        <input type="text" v-model="msg" placeholder="edit meit">
        <p>
            {{ msg }}
        </p>
    </div>
</body>
</html>
```

2018.10 - Now:

```vue {5}
<script>
var vm = new Vue({
    el: '#app',
    data: {
        msg: 'Hello and Welcome!';
    }
})
</script>
```