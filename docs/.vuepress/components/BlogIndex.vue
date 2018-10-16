<template>
<div>
    <!-- <input type="button" value="show the post" @click="toggle"> -->
    <div v-for="post in posts">
        <!-- <h4 v-show="flag"> -->
          <h4>
            <router-link :to="post.path">>> {{ post.title }}</router-link>
        </h4>
    </div>
</div>
</template>

<script>
export default {
  // data: {
  //   flag: true
  // },
  // methods: {
  //   toggle(){
  //     this.flag = ! this.flag
  //   }
  // },
  computed: {
    posts() {
      return (
        this.$site.pages
          .filter(x => x.path.startsWith("/blog/") && !x.frontmatter.blog_index)
          // .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));
          .sort((a, b) => {
            return a < b;
          })
      );
    }
  }
};
</script>