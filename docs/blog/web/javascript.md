# JavaScript

## Date Object

[reference](http://www.runoob.com/jsref/jsref-obj-date.html)

```js
var date = new Date()
// Thu Oct 25 2018 20:04:42 GMT+0800 (China Standard Time)
```

functions:

```js
date.toDateString()
//"Thu Oct 25 2018"

date.getMonth()
// 9 (0-11)

date.getFullYear()
//2018
```

Example1: Vue.js **filter**: [v-sample-github](https://github.com/chenweigao/vue-study/blob/master/v-sample/list.html)

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

Example2: Vuepress blog, get the month's string:

```js
var date = new Date()
var month = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December")
monthString = month[date.getMonth()]
// October or any string
```

Example3: aplit time string:

```js
date.toDateString().slice(4, 11).replace(/ /, '-')
//"Oct-25 "
```

## localStorage

## Var, Let and Const