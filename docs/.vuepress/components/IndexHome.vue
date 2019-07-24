<template>
  <div>
    <Titles title="Recent Update"></Titles>
    <el-container>
      <el-carousel :interval="5000" type="card" height="150px" class="carousel">
        <el-carousel-item v-for="item in recent_posts" :key="item.index">
          <el-card class="box-card" shadow="hover">
            <div class="text item">
              <router-link :to="item.path" class="super-link center" style="font-size: 18px;">
                <a :style="randomRgb()">{{ item.title }}</a>
              </router-link>
            </div>
            <div class="text item" style="color:#999">last updated: {{item.lastUpdated}}</div>
            <div style="color:grey">{{item.readingTime.text}}</div>
          </el-card>
        </el-carousel-item>
      </el-carousel>
      <el-header>
        <el-form :inline="true" class="demo-form-inline">
          <SearchBox class="mysearch" style="float:right" />
        </el-form>
      </el-header>

      <el-main v-show="value == null">
        <el-card shadow="hover">
          <div slot="header" class="animated bounce" @click="showRecent = ! showRecent">
            <span class="titles" :style="randomRgb()">Recent Update</span>
          </div>
          <transition-group appear enter-active-class="fadeInUp" leave-active-class="zoomOutUp">
            <div
              v-for="post in recent_posts"
              :key="post.key"
              class="animated text item"
              v-show="showRecent"
            >
              <time class="time">
                <a :style="randomRgb()">{{ post.readingTime.words }}</a>
                words, {{ post.readingTime.text }}, {{ post.lastUpdated | dateFormat }}
              </time>

              <router-link :to="post.path" class="super-link center">### {{ post.title }}</router-link>
              <br />
              <Mybadge :title="post.regularPath | badgeFormat" style="float:right;"></Mybadge>
              <el-divider></el-divider>
            </div>
          </transition-group>
        </el-card>
      </el-main>

      <el-footer>
        <a href="https://github.com/chenweigao">
          <el-button icon="iconfont icon-github-fill"> GitHub</el-button>
        </a>
        <a href="mailto:mail@weigao.cc">
          <el-button icon="iconfont icon-mail" class="myemail"> Email</el-button>
        </a>
        <el-badge value="Reco" type="primary" style="float:right">
          <a href="discuss/">
            <el-button icon="iconfont icon-liuyan"> Comments</el-button>
          </a>
          <br />
        </el-badge>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import SearchBox from "@SearchBox";
import Comments from "./Comments.vue";
import Mybadge from "./Mybadge.vue";
import Titles from "./Titles.vue";

export default {
  components: { SearchBox },
  data: function() {
    return {
      value: null,
      recent_update_number: 10,
      showRecent: true,
      recent_posts: []
    };
  },
  beforeMount() {
    this.recent_posts = this.$site.pages
      .filter(
        x =>
          (x.path.startsWith("/blog/") || x.path.startsWith("/algorithm/")) &&
          !x.frontmatter.blogindex
      )
      .sort((a, b) => Date.parse(b.lastUpdated) - Date.parse(a.lastUpdated))
      .slice(0, this.recent_update_number);
  },
  methods: {
    getTimestamp: function(time) {
      return time.replace(/[^0-9]/gi, "");
    },
    recentUpdate(n) {
      // console.log(this.$site.pages);
      return this.$site.pages
        .filter(
          x =>
            (x.path.startsWith("/blog/") || x.path.startsWith("/algorithm/")) &&
            !x.frontmatter.blogindex
        )
        .sort((a, b) => Date.parse(b.lastUpdated) - Date.parse(a.lastUpdated))
        .slice(0, this.recent_update_number);
      // console.log(recentUpdate);
    },

    randomRgb: function() {
      var R = Math.floor(Math.random() * 255);
      var G = Math.floor(Math.random() * 255);
      var B = Math.floor(Math.random() * 255);
      this.randomColor = "rgb(" + R + "," + G + "," + B + ")";
      return { color: "rgb(" + R + "," + G + "," + B + ")" };
    }
  },
  filters: {
    dateFormat: function(dateStr) {
      var dt = new Date(Date.parse(dateStr));
      var y = dt.getFullYear();
      var m = (dt.getMonth() + 1).toString().padStart(2, "0");
      var d = dt
        .getDate()
        .toString()
        .padStart(2, "0");
      var hh = dt
        .getHours()
        .toString()
        .padStart(2, "0");
      var mm = dt
        .getMinutes()
        .toString()
        .padStart(2, "0");
      var ss = dt
        .getSeconds()
        .toString()
        .padStart(2, "0");
      var n = dt.toTimeString().slice(0, 5);
      return `${m}/${d}`;
      // return `${hh}:${mm} ${m}/${d} ${y}`
    },
    dateFormat2: function(dateStr) {
      var dt = new Date(Date.parse(dateStr));
      var y = dt.getFullYear();
      var m = (dt.getMonth() + 1).toString().padStart(2, "0");
      var d = dt
        .getDate()
        .toString()
        .padStart(2, "0");
      var hh = dt
        .getHours()
        .toString()
        .padStart(2, "0");
      var mm = dt
        .getMinutes()
        .toString()
        .padStart(2, "0");
      var ss = dt
        .getSeconds()
        .toString()
        .padStart(2, "0");
      var n = dt.toTimeString().slice(0, 5);
      // return `${m}/${d}`
      return `${hh}:${mm} ${m}/${d} ${y}`;
    },
    badgeFormat: function(str) {
      return str.split("/")[2];
    }
  }
};
</script>

<style scoped>
.super-link {
  position: relative;
  text-decoration: none;
  color: #000;
}
/*伪元素是两个冒号*/
.super-link::after {
  content: "";

  width: 100%;
  height: 1px; /*设置伪元素的高度，这里是下划线的粗细*/
  position: absolute;
  top: 100%;
  left: 0;

  background-color: rgb(
    36,
    179,
    76
  ); /*当前标签继承的文字颜色，这里让伪元素的背景色与父元素的文字颜色相同*/
  transform: scale(0);
  transition: all 0.35s;
}
.super-link:hover::after {
  transform: scale(1);
}
.center::after {
  transform-origin: center;
}
.cardLastUpdate {
  margin-bottom: 40px;
}
.commentitem {
  margin-top: 10px;
  margin-right: 40px;
}
.time {
  font-size: 14px;
  color: #999;
  float: right;
}
.text {
  font-size: 16px;
}
.item {
  margin-bottom: 18px;
}

.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateX(50px);
}
.v-enter-active,
.v-leave-active {
  transition: all 0.6s ease;
}
body > .el-container {
  margin-bottom: 40px;
}
.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}
.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.labels {
  padding: 5px;
}

.h1title {
  text-align: center;
}
.showmore {
  margin-top: 20px;
  margin-left: 43%;
}
@import "https:////at.alicdn.com/t/font_1014632_8btj1lgimlo.css";
</style>
