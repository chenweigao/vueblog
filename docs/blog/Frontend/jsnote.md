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

## Date and Time


JavaScript 中的时间操作：

1. [格式化成自己需要的时间格式](#example-1)
2. [获取月份的英文](#example-2)
3. [分割字符串](#example-3)
4. [替换时间字符串中所有非数字](#example-4)
5. [按照时间顺序排序](#example-5)

---

[reference](http://www.runoob.com/jsref/jsref-obj-date.html)

```js
var date = new Date()
// Thu Oct 25 2018 20:04:42 GMT+0800 (China Standard Time)
```

Date 的 functions:

```js
date.toDateString()
//"Thu Oct 25 2018"

date.getMonth()
// 9 (0-11)

date.getFullYear()
//2018
```


### Formatting

Vue.js **filter**: [v-sample-github](https://github.com/chenweigao/vue-study/blob/master/v-sample/list.html)

```js
filters: {
  dateFormat: function (dateStr) {
    var dt = new Date(dateStr)
    var y = dt.getFullYear()
    var m = (dt.getMonth() + 1).toString().padStart(2, '0')
    var d = dt.getDate().toString().padStart(2, '0')
    var hh = dt.getHours().toString().padStart(2, '0')
    var mm = dt.getMinutes().toString().padStart(2, '0')
    var ss = dt.getSeconds().toString().padStart(2, '0')
    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
  }
// 2018-10-12 11:39:41
```

```html
{{ time | dateFormat }}
```

### Month Full Name

获取月份的完整拼写:

```js
var date = new Date()
var month = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December")
monthString = month[date.getMonth()]
// October or any string
```

### Split Date

split time string:

```js
date.toDateString().slice(4, 11).replace(/ /, '-')
//"Oct-25 "
```

### Timestamp

tranform date string to timestamp (将日期字符串转化成时间戳)

```js {2}
toTimeString(time) {
      return time.replace(/[^0-9]/ig, "")
    }
// 2018/11/20 10:36, Tuesday => 201811201036
```

### Sort Date

对于时间进行排序：

```js
computed: {
  posts() {
      return this.$site.pages
          .filter(x => x.path.startsWith("/algorithm/"))
          .sort((a, b) => Date.parse(b.lastUpdated) - Date.parse(a.lastUpdated))
  }
}
```

## Performance

性能分析：

```js
console.time("My operation")
//code
console.timeEnd("My operation")
```

## Var, Let and Const
