# JS code

## Json String

若现在有一个 JSON 对象的数组，可以使用的处理方法有：

- `JSON.stringify()`

  处理 JSON 对象成为字符串

- `JSON.parse()`

  处理字符串成为 JSON 对象

## forEach()

如果需要对数组的遍历：

```js
array.forEach(function(obj, index){
// ...
})
```

## eval()

计算某个字符串，并执行其中的JS代码

```js
 var vm = new Vue({
    el: '#app',
    data: {
            // ...
    },
    methods: {
        calc() {
            var codeStr = 'parseInt(this.n1)' + this.opt + 'parseInt(this.n2)'
            this.result = eval(codeStr)
        }
    }
})
```

上述代码的作用是：从字符串中，计算出了`result=n1+n2`的表达式的值