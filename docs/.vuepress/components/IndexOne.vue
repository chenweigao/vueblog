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
            <el-badge>
              <el-select
                v-model="value"
                clearable
                placeholder="Show Categories"
              >
                <el-option
                  v-for="item in years"
                  :key="item.index"
                  :label="item.index"
                  :value="item"
                >
                </el-option>
              </el-select>
            </el-badge>
          </el-form-item>
          <el-badge
            value="new"
            class="myresume"
          >
            <a href="/blog/others/resume.html">
              <el-button
                icon="iconfont icon-resume"
                type=""
                plain
              > Resume</el-button>
            </a>
          </el-badge>
          <SearchBox
            class="mysearch"
            style="float:right"
          />
        </el-form>
      </el-header>
      <!-- <el-divider><i class="el-icon-loading"></i></el-divider> -->

      <el-main v-show="value == null">
        <el-card shadow="hover">
          <div
            slot="header"
            class="animated pulse"
          >
            <span class="titles">
              Recent Update
            </span>
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
        v-show="value === year || value === null"
      >

        <el-card shadow="hover">
          <div
            slot="header"
            class="animated pulse"
          >
            <span class="titles">
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
          <el-button icon="iconfont icon-github-fill"> GitHub</el-button>
        </a>
        <a href="mailto:mail@weigao.cc">
          <el-button
            icon="iconfont icon-mail"
            class="myemail"
          > Email</el-button>
        </a>
        <el-badge
          value="Reco"
          type="primary"
          style="float:right"
        >
          <a href="discuss/">
            <el-button icon="iconfont icon-liuyan"> Comments</el-button>
          </a>

        </el-badge>
      </el-footer>
    </el-container>

    <!-- <el-divider>我是有底线的</el-divider> -->
  </div>

</template>

<script>
import SearchBox from '@SearchBox'
export default {
  components: { SearchBox },
  data: function () {
    return {
      flag: false,
      // years: ['2019', '2018', '2017'],
      years: ['Backend', 'Frontend', 'Projects', 'Tools', 'Research', 'Deeplearning', 'Others'],
      value: null,
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
    },
    getFileCreatedTime(filespc) {
      return filespc.lastModifiedDate();
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
      return `${hh}:${mm} ${m}/${d} ${y}`
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

@import "https:////at.alicdn.com/t/font_1014632_8btj1lgimlo.css";
</style>
