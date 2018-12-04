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
        <p>
          {{post.lastUpdated}} >>
          <router-link :to="post.path"> {{ post.title }} </router-link>
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

        <p>{{post.lastUpdated}} >>
          <router-link :to="post.path"> {{ post.title }} </router-link>
        </p>

      </div>
    </el-tab-pane>
    <el-tab-pane
      label="Project"
      name="third"
    >
      <div
        v-for="post in project"
        :key=post.title
      >

        <p>{{post.lastUpdated}} >>
          <router-link :to="post.path"> {{ post.title }} </router-link>
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

        <p>{{post.lastUpdated}} >>
          <router-link :to="post.path"> {{ post.title }} </router-link>
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

        <p>{{post.lastUpdated}} >>
          <router-link :to="post.path"> {{ post.title }} </router-link>
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
    },
    toTimeString(time) {
      return time.replace(/[^0-9]/ig, "")
    }
  },
  computed: {
    zen() {
      return this.$site.pages
        .filter(x => x.path.startsWith("/blog/zen/") && !x.frontmatter.blog_index)
        .sort((a, b) => (this.toTimeString(b.lastUpdated) - this.toTimeString(a.lastUpdated)))
    },
    project() {
      return this.$site.pages
        .filter(x => x.path.startsWith("/blog/project/") && !x.frontmatter.blog_index)
        .sort((a, b) => (this.toTimeString(b.lastUpdated) - this.toTimeString(a.lastUpdated)))
    },
    web() {
      return this.$site.pages
        .filter(x => x.path.startsWith("/blog/web/") && !x.frontmatter.blog_index)
        .sort((a, b) => (this.toTimeString(b.lastUpdated) - this.toTimeString(a.lastUpdated)))
    },
    tool() {
      return this.$site.pages
        .filter(x => x.path.startsWith("/blog/tool/") && !x.frontmatter.blog_index)
        .sort((a, b) => (this.toTimeString(b.lastUpdated) - this.toTimeString(a.lastUpdated)))

    },
    research() {
      return this.$site.pages
        .filter(x => x.path.startsWith("/blog/research/") && !x.frontmatter.blog_index)
        .sort((a, b) => (this.toTimeString(b.lastUpdated) - this.toTimeString(a.lastUpdated)))

    },
    book() {
      return this.$site.pages
        .filter(x => x.path.startsWith("/books/") && !x.frontmatter.blog_index)
        .sort((a, b) => (this.toTimeString(b.lastUpdated) - this.toTimeString(a.lastUpdated)))

    }

  }
};
</script>