# Vue

## devtools

[github-vue-remote-devtools](https://github.com/vuejs/vue-devtools/blob/master/shells/electron/README.md)

usage:

```bash
npm install -g @vue/devtools
vue-devtools
```

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

```bash
yarn add vuepress@next -D
yarn add @vuepress/plugin-back-to-top -D
```

and the add the `back-to-top` plugin to `config.js`:

```js
plugins: ['@vuepress/back-to-top']
```

