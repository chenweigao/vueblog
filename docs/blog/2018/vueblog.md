# Vueblog<Badge text="2.10.1" type="tip"/>

---

:::tip Reference
This site is built by [Vuepress](https://vuepress.vuejs.org/), [Vuepress GitHub](https://github.com/vuejs/vuepress)

A basic tutorial: [zero-to-deploy-build-a-documentation-system-with-vue-and-vuepress](https://scotch.io/tutorials/zero-to-deploy-build-a-documentation-system-with-vue-and-vuepress)
:::

## vuepress update

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

## Icons

Usng Aliyun icon in vueblog project:

1. [iconfont links](https://www.iconfont.cn/home/index?spm=a313x.7781069.1998910419.2)

2. 选择图表并加入购物车，生成项目

3. 复制代码，引入 css.

4. 新建 `<i class="iconfont icon_code"></i>`

   如果是在 botton 中，则使用 `<el-button icon="iconfont icon-liuyan"> Comments</el-button>`.

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

### tags <Badge text="beta" type="warn"/> <Badge text="0.10.1+" type="tip"/>

```html
<Badge text="beta" type="warn"/>
<Badge text="0.10.1+" type="tip"/>
```

### code collapsing

The `<details> <summary></summary> </details>` are from HTML5:

<details>
<summary>inline使用</summary>

```cpp
// code
```

</details>

Source code is:

```html
<details><summary>inline 使用</summary>

//code block

</details>
```

### markdown extend

Install markdown-it-katex

```bash
yarn add markdown-it-katex -D
```

Modify your `config.js` in `.vuepress`

```js
module.exports = {
  ...
  markdown: {
    extendMarkdown: md => {
      md.use(require("markdown-it-katex"));
      }
  }
};
```

Add Katex CSS into your theme or anywhere ( in exact markdown file you want to use Katex, in Layout.vue, ... )

```md
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>
```