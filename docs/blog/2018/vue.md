# Vue

## Animating State

- watch
- keyup
- computed


## axios

In the project, it is important to use AJAX. `Vue resource` and `axios` is very useful.

```bash
yarn add axios -D
```

When building a **project** using it in `Vue` Components:

```js
import axios from 'axios'
export deafult = {
}
```

In signal `HTML` file `<script>`:

```js
// remeber to import CDN
var vm = new Vue({
    methods: {
        getInfo() {
            //axios code
        }
    }
})
```

:::tip
If want function `getInfo` automaticlly, use `create` hook function
:::

```js
export default {
  created: function () {
    axios
      .get('')
      .then(response => {

        }
      })
      .catch(error => {

      })
  },
}
```

## Devtools

[github-vue-remote-devtools](https://github.com/vuejs/vue-devtools/blob/master/shells/electron/README.md)

usage:

```bash
npm install -g @vue/devtools
vue-devtools
```

## components

### register

There are two types of component registration: global and local.

using `Vue.component` to register component globally:

```js
Vue.component('my-component-name', {
  // ... options ...
})
```


父子组件：

## Filters

Define local  filters:

```js
var vm = new Vue({
    //...
    filters: {
        capitalize: function (value) {
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
  }
    }
})
```

Define a filter globally before creating the Vue instance:

```js
Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})

new Vue({
  // ...
})
```

usage:

```html
<!-- in mustaches -->
{{ message | capitalize }}

<!-- in v-bind -->
<div v-bind:id="rawId | formatId"></div>
```

## Directives

### v-cloak

可以使用`v-cloak`取得变量：

```html
<div v-cloak>  
  {{ msg }}
</div>
```

如果这样取得`msg`变量，会导致插值表达式闪烁问题，使用如下方法解决：

```html
<head>
    <style>
        [v-cloak] {
            display: none;
        }
    </style>
</head>
```

The `<div>` will not be visible until the compilation is done.

### v-text

```html
<h4 v-text="msg"></h4>
```

Updates the element’s `textContent`(whole)

### v-html

直接解析HTML:

```html
<div v-html="msg2"></div>
```

Note that the contents are inserted as plain HTML - they will not be compiled as Vue templates.(尽量不用)

### v-bind

使用`v-bind` 绑定变量的值，注意其后面可以用`+`增加字符串, [see also api](https://cn.vuejs.org/v2/api/#v-bind)

```html
<input type="button" value="Button" :title="mytitle + 'a string'" v-on:click="show">
```

### v-on

上面的`v-on`用于绑定事件

`v-on` 事件修饰符：


:::tip
`v-bind:title` is equal to `:title`

`v-on:click` is equal to `@click`
:::

```html
<!-- stop propogation -->
<button @click.stop="doThis"></button>

<!-- key modifier using keyAlias -->
<input @keyup.enter="onEnter">
```

### key modifiers

```html
<!-- same as above -->
<input v-on:keyup.enter="submit">

<!-- also works for shorthand -->
<input @keyup.enter="submit">
```

binging the methods `submit`.
the JavaScript code used is:

```js
<script src="https://cdn.bootcss.com/vue/2.4.2/vue.min.js"></script>
    <script>
        const vm = new Vue({
            el: '#app',
            data: {
                msg: '123',
                msg2: '<h1>haha</h1>',
                mytitle: 'This is a title'
            },
            methods: {
                show:function() {
                    alert('Hello')
                }
            }
        })
    </script>
```

### v-model 

We can use the `v-model` directive to create two-way data bindings on form input, text area, and select element.

Bind the value to a dynamic property on the Vue instance.

```html
<input type="text" v-model="msg" placeholder="edit me">
<p>
    Message is {{ msg }}
</p>
```

**Modifiers**

`.number`

```html
<input v-model.number='age' type="number">
```

make input to be automatically typecast as a number.

`.trim`

```html
<input v-model.trim="msg">
```

make input to be trimmed automatically.

`.lazy`

```html
<input v-model.lazy="msg">
```

synced after "change" instead of "input" .

### Custom Directives

there are may be cases where you need some low-level DOM access on plain elements, and this is where custom directibes would still be useful.

```js
// Register a global custom directive called `v-focus`
Vue.directive('focus', {
  // When the bound element is inserted into the DOM...
  inserted: function (el) {
    // Focus the element
    el.focus()
  }
})
```

Then in a template, you can use the new v-focus attribute on any element, like this:

```html
<input v-focus>
```

**Hook function** include `bind` `inserted` and `update` and so on.. see from [API](https://vuejs.org/v2/guide/custom-directive.html#Hook-Functions).
there we use the `bingding` arguement:

```js
 Vue.directive('color', {
    bind: function (el, binding) {
    // el.style.color = 'blue'
    el.style.color = binding.value
    }
})
```

`binding` has the properties: `value` `name` and `expression` and so on, to see it:

```js
console.log(binding.value)
//or
console.log(binding.expression)
```

:::tip usage
in html, use the `'blue'` other than `blue`:
:::

```html
<input v-color="'blue'">
```

## Pre-Processors

This boilerplate has pre-configured CSS extraction for most popular CSS pre-processors including LESS, SASS, Stylus, and PostCSS. To use a pre-processor, all you need to do is install the appropriate webpack loader for it. For example, to use SASS:

```bash
npm install sass-loader node-sass --save-dev
```




