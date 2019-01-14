<template>
  <div>

    <el-container>

      <el-header>

        <!-- <el-row>
          <el-button type="default" @click="showPost('')">All</el-button>
          <el-button type="default" :autofocus="true" @click="showPost('2019')" >2019</el-button>
          <el-button type="default" @click="showPost('2018')">2018</el-button>
          <el-button type="default" @click="showPost('2017')">2017</el-button>
        </el-row> -->
        <el-form
          :inline="true"
          class="demo-form-inline"
        >

          <el-form-item>
            <el-badge
              value="new"
              class="commentitem"
            >
              <el-select
                v-model="value"
                clearable
                placeholder="select a year"
              >
                <el-option
                  v-for="item in years"
                  :key="item.index"
                  :label="item"
                  :value="item"
                >
                </el-option>
              </el-select>
            </el-badge>
          </el-form-item>
          <SearchBox style="float:right" />
        </el-form>
      </el-header>

      <el-main>
        <el-card
          shadow="hover"
          class=""
        >
          <div
            slot="header"
            class="clearfix"
          >
            <span>
              Recent Update
            </span>
            <el-input-number v-model="recent_update_number"  @change="recentUpdate" :min="3" :max="9" style="float:right"  size="mini"></el-input-number>
          </div>
          <transition-group
            appear
            enter-active-class="fadeInUp"
          >
            <div
              v-for="post in recentUpdate()"
              :key="post.key"
              class="animated text item"
            >
              <time class="time">{{ post.lastUpdated | dateFormat }}</time>
              <router-link :to="post.path">### {{ post.title }}</router-link>
            </div>
          </transition-group>
        </el-card>

      </el-main>
      <el-main
        v-for="year in years"
        :key="year.index"
        v-show="value === year || value === ''"
      >

        <el-card shadow="hover">
          <div
            slot="header"
            class="clearfix"
          >
            <span>
              {{ year }}
            </span>
          </div>

          <transition-group
            appear
            enter-active-class="fadeInUp"
          >
            <div
              v-for="post in posts(year)"
              :key="post.key"
              class="animated text item"
            >
              <time class="time">{{ post.lastUpdated | dateFormat }}</time>
              <router-link :to="post.path">### {{ post.title }}</router-link>
            </div>
          </transition-group>
        </el-card>
      </el-main>

      <el-footer>

        <a href="https://github.com/chenweigao">
          <el-button icon="iconfont icon-github-fill"> Github</el-button>
        </a>
        <a href="mailto:mail@weigao.cc">
          <el-button icon="iconfont icon-mail"> Email</el-button>
        </a>
        <el-badge
          value="Reco"
          type="primary"
          style="float:right"
        >
          <a
            href="discuss/"
            style="float:right"
          >
            <el-button icon="iconfont icon-liuyan"> Comments</el-button>
          </a>
        </el-badge>
      </el-footer>
    </el-container>

  </div>
</template>

<script>
import SearchBox from '@SearchBox'
export default {
  components: { SearchBox },
  data: function () {
    return {
      flag: false,
      years: ['2019', '2018', '2017'],
      value: '2019',
      recent_update_number: 3
    };
  },
  methods: {
    getTimestamp: function (time) {
      return time.replace(/[^0-9]/gi, "");
    },
    posts: function (n) {
      var postDir = "/blog/" + n + "/";
      return this.$site.pages
        .filter(x => x.path.startsWith(postDir) && !x.frontmatter.blogindex)
        .sort((a, b) => Date.parse(b.lastUpdated) - Date.parse(a.lastUpdated));
    },
    showPost: function (year) {
      this.value = year
    },
    recentUpdate(n) {
      return this.$site.pages
        .filter(x => (x.path.startsWith("/blog/") || x.path.startsWith("/algorithm/")) && !x.frontmatter.blogindex)
        .sort((a, b) => Date.parse(b.lastUpdated) - Date.parse(a.lastUpdated))
        .slice(0, this.recent_update_number)
      // console.log(recentUpdate);
    },
     handleChange(value) {
        //
      }
  },
  computed: {
  },
  filters: {
    dateFormat: function (dateStr) {
      var dt = new Date(Date.parse(dateStr))
      var y = dt.getFullYear()
      var m = (dt.getMonth() + 1).toString().padStart(2, '0')
      var d = dt.getDate().toString().padStart(2, '0')
      var hh = dt.getHours().toString().padStart(2, '0')
      var mm = dt.getMinutes().toString().padStart(2, '0')
      var ss = dt.getSeconds().toString().padStart(2, '0')
      var n = dt.toTimeString().slice(0, 5)
      return `${m}/${d} ${hh}:${mm}`
    }
  }
};
</script>

<style>
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
}

.text {
  font-size: 16px;
}

.item {
  margin-bottom: 18px;
}
/* .box-card {
  width: 900px;
} */
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
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

@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css";
@import "https://at.alicdn.com/t/font_1014632_gvoetekjt7m.css";
</style>
