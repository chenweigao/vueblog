# README

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

Thank you!
