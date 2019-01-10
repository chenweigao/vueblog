<template>
  <div>
    <el-container>
      <el-header>
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

      <el-main
        v-for="year in years"
        :key="year.index"
        v-show="value === year || value === ''"
      >

        <el-card
          shadow="hover"
        >
          <div
            slot="header"
            class="clearfix"
          >
            <span>
              {{ year }}
            </span>
            <!-- <el-button
              style="float: right; padding: 3px 0; color: #545454"
              type="text"
              @click="hideCard(year.index)"
            >Hide</el-button> -->

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
        
          <a
            href="https://github.com/chenweigao"
          >
            <el-button>Follow in Github</el-button>
          </a>

        <el-badge
          value="Reco"
          type="primary"
          class="commentitem"
          style="float:right"
        >
          <a
            href="discuss/"
            style="float:right"
          >
            <el-button>Comments</el-button>
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
      years: [2019, 2018, 2017],
      value: ''
    };
  },
  methods: {
    getTimestamp: function (time) {
      return time.replace(/[^0-9]/gi, "");
    },
    posts: function (n) {
      var postDir = "/blog/" + n + "/";
      return this.$site.pages
        .filter(x => x.path.startsWith(postDir) && !x.frontmatter.blog_index)
        .sort((a, b) => Date.parse(b.lastUpdated) - Date.parse(a.lastUpdated));
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
      var hh = parseInt(dt.getUTCHours().toString().padStart(2, '0')) + 8
      var mm = dt.getMinutes().toString().padStart(2, '0')
      var ss = dt.getSeconds().toString().padStart(2, '0')
      var n = dt.toTimeString().slice(0, 5)
      return `${m}/${d} ${hh}:${mm}`
    }
  }
};
</script>

<style>
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
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
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



@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css";
</style>
