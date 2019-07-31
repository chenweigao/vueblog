# Vuepress Blog<Badge text="2.10.1" type="tip"/>

---

:::tip Reference
This site is built by [Vuepress](https://vuepress.vuejs.org/), [Vuepress GitHub](https://github.com/vuejs/vuepress)

A basic tutorial: [zero-to-deploy-build-a-documentation-system-with-vue-and-vuepress](https://scotch.io/tutorials/zero-to-deploy-build-a-documentation-system-with-vue-and-vuepress)
:::

## Installation and Configration

If you like the blog built by [Vuepress](https://github.com/vuejs/vuepress), you can **fork** or **clone** it and give me a star.

This is a tutorial may help you:

1. clone the rep:

    ```bash
    git clone https://github.com/chenweigao/vueblog.git
    ```

    or fork it, and clone form you repo.

2. install the `yarn`: [https://yarnpkg.com/lang/zh-hans/docs/install/#windows-stable](https://yarnpkg.com/lang/zh-hans/docs/install/#windows-stable)

3. run the command:

    ```bash
    yarn
    yarn docs:dev
    ```

    then you can see the site run at: localhost:8080, you can visit it.

4. in `docs/.vuepress/config.js`, modify the title to yours, comment out lin 63 - lin 66(or you could register valine and modify the `Comments.vue`'s config)

5. in `docs/.vuepress/blog`, **delete** all of my post and put your post here(do not delete the directory).

6. in `docs/.vuepress/blog/Others/resume.md`, replace it by your own resume.

There, everything about your blog is done!

You can deploy this site via **Netlify**: This is a [tutorial](https://v1.vuepress.vuejs.org/guide/deploy.html#netlify), or you follow this:

1. fork this repo, or push your clones repo to your GitHub.

2. visit [https://app.netlify.com](https://app.netlify.com)

3. registe via GitHub account and then click **New site from Git**, and chose this repo

4. then fill the deployment command:

    ```bash
    Build Command: yarn docs:build

    Publish directory: docs/.vuepress/dist
    ```

5. wait... when the build success, then click **Domain settings** and custom you domains.

More config information could be found at my blog's post [Vuepress Blog](https://www.weigao.cc/blog/Projects/vueblog.html#vuepress-update)

## Vuepress Update

### Update Plugin & Vuepress

Update the `vuepress`:

```bash
yarn add vuepress@next -D
yarn add @vuepress/plugin-back-to-top -D
yarn add @vuepress/plugin-last-updated@next -D
```

如果想更新所有的 `package.json` 中的依赖到最新版本，则可以使用：

```bash
yarn upgrade-interactive --latest
```
需要手动选择升级的依赖包，按空格键选择，a 键切换所有，i 键反选选择。

也可以在 `package.json` 中的 `scripts` 下添加自定义的更新命令。

```js
"scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs",
    "docs:upgrade": "yarn upgrade @next"
}
```

Add the `back-to-top` plugin to `nginxig.js`:

```js
plugins: ['@vuepress/back-to-top']
```

Run Command:

```bash
yarn dev:docs # dev model

yarn dev:build # release
```

## Icons

Usng Aliyun icon in vueblog project:

1. [iconfont links](https://www.iconfont.cn/home/index?spm=a313x.7781069.1998910419.2)

2. 选择图表并加入购物车，生成项目

3. 复制代码，引入 css.

4. 新建 `<i class="iconfont icon_code"></i>`

   如果是在 botton 中，则使用 `<el-button icon="iconfont icon-liuyan"> Comments</el-button>`.

## Tags <Badge text="beta" type="warn"/> <Badge text="0.10.1+" type="tip"/>

```html
<Badge text="beta" type="warn"/>
<Badge text="0.10.1+" type="tip"/>
```

## Code Collapsing

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

## Markdown extend

### LeTex Formula

1. Install markdown-it-katex: `yarn add markdown-it-katex -D`.

2. Modify your `nginxig.js` in `.vuepress`

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

3. Add Katex CSS into your theme or anywhere ( in exact markdown file you want to use Katex, in Layout.vue, ... )

    ```md
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>
    ```

### Custom Containers

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

### vuepress-plugin-tabs

[参考这个教程](https://superbiger.github.io/vuepress-plugin-tabs/#usage)

:::: tabs type:card
::: tab MyTitle
```py
def a:
    return 0
```
:::

::: tab MyTitle2
this is a tab
:::
::::

### Asset Handing/image

将图片放置于 `.vuepress/public` 目录下，然后引用 `![Image](/imagename.type)`.