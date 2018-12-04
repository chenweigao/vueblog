# Vueblog <Badge text="2.10.1" type="tip"/>

---

:::tip Reference
This site is built by [Vuepress](https://vuepress.vuejs.org/), [Vuepress GitHub](https://github.com/vuejs/vuepress)

A basic tutorial: [zero-to-deploy-build-a-documentation-system-with-vue-and-vuepress](https://scotch.io/tutorials/zero-to-deploy-build-a-documentation-system-with-vue-and-vuepress)
:::

## Updtae

1. update plugin and vuepress

    update the `vuepress`:

    ```bash
    yarn add vuepress@next -D
    yarn add @vuepress/plugin-back-to-top -D
    yarn add @vuepress/plugin-last-updated@next -D
    ```

    and the add the `back-to-top` plugin to `config.js`:

    ```js
    plugins: ['@vuepress/back-to-top']
    ```

2. run

    ```bash
    yarn dev:docs # dev model

    yarn dev:build # release
    ```

3. update via `package.json`

    modify the content of `package.json` and run `yarn`.

## Theme config

### custom containers

```md

:::tip YOUR LABEL
    YOUR CONTENT
:::

:::warning YOUR LABEL
    YOUR CONTENT
:::

:::danger YOUR LABEL
    YOUR CONTENT
:::

:::vue YOUR LABEL
    YOUR CONTENT
:::
```

### icons <Badge text="beta" type="warn"/> <Badge text="0.10.1+" type="tip"/>

```html
<Badge text="beta" type="warn"/>
<Badge text="0.10.1+" type="tip"/>
```