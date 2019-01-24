<template>
  <div>
    <el-container>
      <el-header>
        <el-form
          :inline="true"
          class="demo-form-inline"
        >
          <!-- <el-form-item></el-form-item>

            <el-button type="info" plain @click="clickAlgorithm">Algorithm</el-button>
          </el-form-item> -->

          <el-form-item>

            <el-select
              v-model="value"
              clearable
              placeholder="labels"
            >
              <el-option
                v-for="item in labels"
                :key="item.index"
                :label="item"
                :value="item"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <!-- <SearchBox style="float:right" /> -->
        </el-form>
      </el-header>

      <el-main
        v-for="label in labels"
        :key="label.index"
        v-show="value === label || value === ''"
      >

        <el-card shadow="hover">
          <div
            slot="header"
            class="clearfix"
          >
            <span>
              {{ label }}
            </span>

          </div>
          <transition-group
            appear
            enter-active-class="fadeInUp"
          >
            <div
              v-for="post in posts(label)"
              :key="post.key"
              class="animated text item"
            >
              <router-link :to="post.path">### {{ post.title }}</router-link>
            </div>
          </transition-group>
        </el-card>
      </el-main>

      <el-footer>
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
      labels: ['python', 'web', 'cpp', 'leetcode', 'zen'],
      value: ''
    };
  },
  methods: {
    getTimestamp: function (time) {
      return time.replace(/[^0-9]/gi, "");
    },
    posts: function (n) {
      var postDir = "/algorithm/" + n + "/";
      return this.$site.pages
        .filter(x => x.path.startsWith(postDir) && !x.frontmatter.blog_index)
        .sort((a, b) => Date.parse(b.lastUpdated) - Date.parse(a.lastUpdated));
    },
    clickAlgorithm() {
      this.$message('This is label selector of ALGORITHM!');
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
