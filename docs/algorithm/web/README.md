# JS code

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