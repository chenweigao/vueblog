<template>
  <div>
    <Titles :title="value?value:'All'"></Titles>
    <el-container>
      <el-header style="height:none;">
        <el-badge
          style="margin-right:18px;margin-top:10px;"
          :value="allpost.length"
          class="item"
          type="info"
        >
          <el-button @click.stop="value=''" type="default">All</el-button>
        </el-badge>
        <el-badge
          v-for="category in categories"
          :key="category.index"
          style="margin-right:18px;margin-top:10px;"
          :value="postNum[category]"
          class="item"
          type="info"
        >
          <el-button @click.stop="value=category" :type="value==category?'default':''">{{category}}</el-button>
        </el-badge>
      </el-header>

      <el-main>
        <el-card shadow="hover" v-if="value">
          <el-divider></el-divider>

          <div
            v-for="post in arr[value].slice((page_count-1)*page_size,page_count*page_size)"
            :key="post.key"
            class="animated fadeInUp text"
          >
            <time class="time">
              <a :style="randomRgb()">{{ post.readingTime.text }},</a>
              {{ post.lastUpdated | dateFormat }}
            </time>
            <!-- <Mybadge :title="post.regularPath | badgeFormat"></Mybadge> -->
            <router-link :to="post.path" class="super-link center">
              <a :style="randomRgb()">###</a>
              {{ post.title }}
            </router-link>
            <el-link type="info" :href="post.path">{{post.key}}</el-link>
            <el-divider></el-divider>
          </div>
          <el-pagination
            style="margin-top:20px;"
            background
            @current-change="changeCount"
            :page-size="page_size"
            :hide-on-single-page="true"
            layout="total, prev, pager, next, jumper"
            :total="arr[value].length"
          ></el-pagination>
        </el-card>
        <el-card shadow="hover" v-else>
          <el-divider></el-divider>

          <div
            v-for="post in allpost.slice((page_count_all-1)*page_size_all,page_count_all*page_size_all)"
            :key="post.key"
            class="animated fadeInUp text"
          >
            <time class="time">
              <a :style="randomRgb()">{{ post.readingTime.text }},</a>
              {{ post.lastUpdated | dateFormat }}
            </time>
            <router-link :to="post.path" class="super-link center">
              <a :style="randomRgb()">###</a>
              {{ post.title }}
            </router-link>
            <el-link type="info" :href="post.path">{{post.key}}</el-link>
            <el-divider></el-divider>
          </div>

          <el-pagination
            background
            style="margin-top:20px;"
            :pager-count="5"
            :page-size="page_size_all"
            @current-change="changeCountAll"
            layout="total, prev, pager, next, jumper"
            :total="allpost.length"
          ></el-pagination>
        </el-card>
      </el-main>

      <el-footer></el-footer>
    </el-container>
    <el-divider>我是有底线的</el-divider>
  </div>
</template>

<script>
import SearchBox from "@SearchBox";
import Comments from "./Comments.vue";
import Mybadge from "./Mybadge.vue";
export default {
  components: { SearchBox },
  data: function() {
    return {
      flag: false,
      value: "",
      hslArray: [],
      arr: {},
      postNum: {},
      categories: [],
      page_size: 10,
      page_count: 1,
      page_size_all: 12,
      page_count_all: 1,
      allpost: []
    };
  },
  beforeMount() {
    this.$site.pages.map(item => {
      if (
        this.categories.indexOf(item.path.split("/")[2]) == -1 &&
        item.path.startsWith("/blog/")
      ) {
        this.categories.push(item.path.split("/")[2]);
      }
    });
    this.categories.sort(),
    this.categories.map(item => {
      this.arr[item] = this.posts(item);
      this.postNum[item] = this.getPostNum(item);
    });
    this.allpost = this.$site.pages
      .filter(x => x.path.startsWith("/blog"))
      .sort((a, b) => Date.parse(b.lastUpdated) - Date.parse(a.lastUpdated));
    // console.log(this.categories);
  },
  methods: {
    changeCount(val) {
      this.page_count = val;
    },
    changeCountAll(val) {
      this.page_count_all = val;
    },
    showall() {
      // this.value = "";
    },
    getTimestamp: function(time) {
      return time.replace(/[^0-9]/gi, "");
    },
    getPostNum: function(n) {
      var postDir;
      if (n == null) {
        postDir = "/blog";
      } else {
        postDir = "/blog/" + n + "/";
      }
      return this.$site.pages.filter(x => x.path.startsWith(postDir)).length;
    },
    posts: function(n) {
      var postDir;
      if (n == null) {
        postDir = "/blog";
      } else {
        postDir = "/blog/" + n + "/";
      }
      return this.$site.pages
        .filter(x => x.path.startsWith(postDir) && !x.frontmatter.blogindex)
        .sort((a, b) => Date.parse(b.lastUpdated) - Date.parse(a.lastUpdated));
    },
    recentUpdate(n) {
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
      return { color: "rgb(" + R + "," + G + "," + B + ")" };
    }
  },
  computed: {},
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
      // return `${m}/${d}`
      return `${m}/${d}/${y}`;
    },
    badgeFormat: function(str) {
      return str.split("/")[2];
    }
  }
};
</script>

<style scoped>
/* a{
  color: black !important;
} */

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

/* .text {
  font-size: 16px;
} */

/* .item {
  margin-bottom: 18px;
} */

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
  transition: all 0.25s;
}
.super-link:hover::after {
  transform: scale(1);
}
.center::after {
  transform-origin: center;
}
@import "https:////at.alicdn.com/t/font_1014632_8btj1lgimlo.css";
</style>
