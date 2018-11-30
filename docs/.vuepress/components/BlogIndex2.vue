<template>
  <el-collapse
    v-model="activeNames"
    @change="handleChange"
    accordion
  >
    <el-collapse-item
      title="Zen"
      name="1"
    >
      <div
        v-for="post in zen"
        :key=post.title
        name="first"
      >
        <hr/>
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
    </el-collapse-item>

    <el-collapse-item
      title="Web"
      name="web"
    >
      <div
        v-for="post in web"
        :key=post.title
      >
        <hr/>
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
    </el-collapse-item>

    <el-collapse-item title="Python">
      <div
        v-for="post in python"
        :key=post.title
      >
        <hr/>
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
    </el-collapse-item>

    <el-collapse-item
      title="Tool"
      name="2"
    >
      <div
        v-for="post in tool"
        :key=post.title
      >
      <hr/>
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
    </el-collapse-item>

    <el-collapse-item title="Research">
      <div
        v-for="post in research"
        :key=post.title
      >
      <hr/>
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
    </el-collapse-item>
  </el-collapse>
</template>

<script>
export default {
  data() {
    return {
      activeNames: ['web']
    };
  },
  methods: {
    handleChange(val) {
      //   console.log(val);
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
}
</script>