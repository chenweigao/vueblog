# Vue



## components

There are two types of component registration: global and local.

using `Vue.component` to register component globally:

```js
Vue.component('my-component-name', {
  // ... options ...
})
```



## Vuepress

### Plugins

update the `vuepress`:

```
yarn add vuepress@next -D
yarn add @vuepress/plugin-back-to-top -D
```

and the add the `back-to-top` plugin to `config.js`:

```
plugins: ['@vuepress/back-to-top']
```

