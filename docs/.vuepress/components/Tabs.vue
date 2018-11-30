<template>
  <el-tabs
    v-model="activeName2"
    type="card"
    @tab-click="handleClick"
  >
    <el-tab-pane
      label="Zen"
      name="first"
    >
      <div
        v-for="post in zen"
        :key=post.title
        name="first"
      >
        <hr />
        <p style="font-size:120%;">
          <router-link :to="post.path"> {{ post.title }} </router-link>
        </p>
        <p
          align="right"
          style="color: gray; font-style:italic;"
        >
          {{ post.lastUpdated }}
        </p>
      </div>
    </el-tab-pane>
    <el-tab-pane
      label="Web"
      name="second"
    >
      <div
        v-for="post in web"
        :key=post.title
      >
        <hr />
        <p style="font-size:120%;">
          <router-link :to="post.path"> {{ post.title }} </router-link>
        </p>
        <p
          align="right"
          style="color: gray; font-style:italic;"
        >
          {{ post.lastUpdated }}
        </p>
      </div>
    </el-tab-pane>
    <el-tab-pane
      label="Python"
      name="third"
    >
      <div
        v-for="post in python"
        :key=post.title
      >
        <hr />
        <p style="font-size:120%;">
          <router-link :to="post.path"> {{ post.title }} </router-link>
        </p>
        <p
          align="right"
          style="color: gray; font-style:italic;"
        >
          {{ post.lastUpdated }}
        </p>
      </div>
    </el-tab-pane>
    <el-tab-pane
      label="Tool"
      name="tool"
    >
      <div
        v-for="post in tool"
        :key=post.title
        name="first"
      >
        <hr />
        <p style="font-size:120%;">
          <router-link :to="post.path"> {{ post.title }} </router-link>
        </p>
        <p
          align="right"
          style="color: gray; font-style:italic;"
        >
          {{ post.lastUpdated }}
        </p>
      </div>
    </el-tab-pane>
    <el-tab-pane
      label="Research"
      name="research"
    >
      <div
        v-for="post in research"
        :key=post.title
        name="research"
      >
        <hr />
        <p style="font-size:120%;">
          <router-link :to="post.path"> {{ post.title }} </router-link>
        </p>
        <p
          align="right"
          style="color: gray; font-style:italic;"
        >
          {{ post.lastUpdated }}
        </p>
      </div>
    </el-tab-pane>

  </el-tabs>
</template>
<script>
export default {
  data() {
    return {
      activeName2: 'second'
    };
  },
  methods: {
    handleClick(tab, event) {
      //   console.log(tab, event);
    }
  },
  computed: {
    zen() {
      return this.$site.pages
        .filter(x => x.path.startsWith("/blog/zen/") && !x.frontmatter.blog_index)
    },
    python() {
      return this.$site.pages
        .filter(x => x.path.startsWith("/blog/python/") && !x.frontmatter.blog_index)
    },
    web() {
      return this.$site.pages
        .filter(x => x.path.startsWith("/blog/web/") && !x.frontmatter.blog_index)
    },
    tool() {
      return this.$site.pages
        .filter(x => x.path.startsWith("/blog/tool/") && !x.frontmatter.blog_index)
    },
    research() {
      return this.$site.pages
        .filter(x => x.path.startsWith("/blog/research/") && !x.frontmatter.blog_index)
    },
    book() {
      return this.$site.pages
        .filter(x => x.path.startsWith("/books/") && !x.frontmatter.blog_index)
    }

  }
};
</script>