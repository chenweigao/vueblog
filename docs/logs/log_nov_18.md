# November Log

## Abstract

In this month, we built an `electron` app using `electron-vue` and `vue-admin`, and did some research including more usable map and more humanized operation in our app.

## Plugins

we use the `js` plugins and tools as follows:

:::tip
All of these code could be found in GitHub.
:::

1. webpack
   At its core, webpack is a static module bundler for modern JavaScript applications. When webpack processes your application, it internally builds a dependency graph which mapsevery module your project needs and generates one or more bundles.

2. vue-cli
   Vue CLI aims to be the standard tooling baseline for the Vue ecosystem. It ensures the various build tools work smoothly together with sensible defaults so you can focus onwriting your app instead of spending days wrangling with configurations. At the same time, it still offers the flexibility to tweak the config of each tool without the need forejecting.We using `vue-cli` and `webpack4` successed in build our app.

3. SASS/SCSS
   Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.
   We using it in compling our css file.

4. HBuilder X

5. `moment.js`
   Some bug fixed: time error that makes history function uncorrected.

6. function: marquee

## Functions

In the project, wo implemented theses functions:

- New Version
  `V 4.0.0` is released! More bug fixed, and new interfacial design and UI design, and new framwork, and multi-platform.
  More functions is on the way...

- History
  the key design concepts is that we make the history could be searched efficiently using custom framwork, coded by C/C++, the code could be see at github.

- Cache
  It is also a great design concept that make our app faster.

- Map
  A bigger map using `svg`.

- Mail
  SMTP protocol using to notify, implemented by Python, and next step will by C++, make it faster.

- Bug Fixed
  Fixed a lot of bugs.