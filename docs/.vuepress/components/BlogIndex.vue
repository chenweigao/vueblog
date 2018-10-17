<template>
<div>
    <!-- <input type="button" value="show the post" @click="toggle"> -->
    <div v-for="post in posts">
        <!-- <h4 v-show="flag"> -->
          <h4>
            {{ timestampToTime(post.lastUpdated) }} >> 
            <router-link :to="post.path">{{ post.title }} </router-link>
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
  methods: {
    timestampToTime(timestamp) {
      var date = new Date(timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
      var dt = date.toDateString();
      return dt;
      // var Y = dt.getFullYear();
      // var M = (dt.getMonth() + 1).toString().padStart(2, "0");
      // var D = dt
      //   .getDate()
      //   .toString()
      //   .padStart(2, "0");
      // var hh = dt
      //   .getHours()
      //   .toString()
      //   .padStart(2, "0");
      // var mm = dt
      //   .getMinutes()
      //   .toString()
      //   .padStart(2, "0");
      // var ss = dt
      //   .getSeconds()
      //   .toString()
      //   .padStart(2, "0");
      // return `${Y}-${M}-${D} ${hh}:${mm}:${ss}`;
    }
  },
  computed: {
    posts() {
      return (
        this.$site.pages
          .filter(x => x.path.startsWith("/blog/") && !x.frontmatter.blog_index)
          .sort((a, b) => b.lastUpdated - a.lastUpdated)
      );
    }
  }
};
</script>