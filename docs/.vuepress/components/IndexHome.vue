<template>
  <div>
    <!-- <h1
      class="h1title"
      :style="randomRgb()"
    > WEIGAO CHEN</h1>-->
    <Titles title="Recent Update"></Titles>
    <el-container>
      <el-carousel :interval="5000" type="card" height="150px" class="carousel">
        <el-carousel-item v-for="item in recentUpdate()" :key="item.index">
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
              v-for="post in recentUpdate()"
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
          <el-button icon="iconfont icon-github-fill">GitHub</el-button>
        </a>
        <a href="mailto:mail@weigao.cc">
          <el-button icon="iconfont icon-mail" class="myemail">Email</el-button>
        </a>
        <el-badge value="Reco" type="primary" style="float:right">
          <a href="discuss/">
            <el-button icon="iconfont icon-liuyan">Comments</el-button>
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
      flag: false,
      // years: ['2019', '2018', '2017'],
      years: [
        "Backend",
        "Frontend",
        "Projects",
        "Grammar",
        "Tools",
        "Research",
        "Deeplearning",
        "Others"
      ],
      value: null,
      recent_update_number: 10,
      show_comments: false,
      hslArray: [],
      show3: false,
      showRecent: true,
      delay1: 100,
      after1: 50,
      randomColor: null
    };
  },
  created: function() {
    this.hslArray = this.getHslArray();
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
    getFileCreatedTime(filespc) {
      return filespc.lastModifiedDate();
    },
    showComments: function() {
      this.show_comments = !this.show_comments;
    },
    randomRgb: function() {
      var R = Math.floor(Math.random() * 255);
      var G = Math.floor(Math.random() * 255);
      var B = Math.floor(Math.random() * 255);
      this.randomColor = "rgb(" + R + "," + G + "," + B + ")";
      return { color: "rgb(" + R + "," + G + "," + B + ")" };
    },
    hslToRgb: function(H, S, L) {
      var R, G, B;
      if (+S === 0) {
        R = G = B = L; // 饱和度为0 为灰色
      } else {
        var hue2Rgb = function(p, q, t) {
          if (t < 0) t += 1;
          if (t > 1) t -= 1;
          if (t < 1 / 6) return p + (q - p) * 6 * t;
          if (t < 1 / 2) return q;
          if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
          return p;
        };
        var Q = L < 0.5 ? L * (1 + S) : L + S - L * S;
        var P = 2 * L - Q;
        R = hue2Rgb(P, Q, H + 1 / 3);
        G = hue2Rgb(P, Q, H);
        B = hue2Rgb(P, Q, H - 1 / 3);
      }
      return [Math.round(R * 255), Math.round(G * 255), Math.round(B * 255)];
    },

    // 获取随机HSL
    randomHsl: function() {
      var H = Math.random();
      var S = Math.random();
      var L = Math.random();
      return [H, S, L];
    },

    // 获取HSL数组
    getHslArray: function() {
      var HSL = [];
      var hslLength = 16; // 获取数量
      for (var i = 0; i < hslLength; i++) {
        var ret = this.randomHsl();

        // 颜色相邻颜色差异须大于 0.25
        if (i > 0 && Math.abs(ret[0] - HSL[i - 1][0]) < 0.25) {
          i--;
          continue; // 重新获取随机色
        }
        ret[1] = 0.7 + ret[1] * 0.2; // [0.7 - 0.9] 排除过灰颜色
        ret[2] = 0.4 + ret[2] * 0.4; // [0.4 - 0.8] 排除过亮过暗色

        // 数据转化到小数点后两位
        ret = ret.map(function(item) {
          return parseFloat(item.toFixed(2));
        });

        HSL.push(ret);
      }
      return HSL;
    },
    getBadge(post) {
      return post;
    }
  },
  computed: {
    rgbArray: function() {
      var self = this;
      if (!self.hslArray.length) return [];

      var rgbArray = self.hslArray.map(function(item) {
        return self.hslToRgb.apply(this, item);
      });

      return rgbArray.map(function(item) {
        return {
          value: item,
          style: { color: "rgb(" + item.toString() + ")" }
        };
      });
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
