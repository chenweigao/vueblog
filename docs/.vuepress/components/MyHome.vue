<template >
  <el-container>
    <el-header>
      <Titles title="Home"></Titles>
    </el-header>
    <el-container>
      <el-aside class="themeaside" width="25%">
        <div class="block" style="margin-top: 20px;">
          <span class="demonstration"></span>
          <el-image src="/xidian.png"></el-image>
        </div>
        <AuthorInfo></AuthorInfo>
        <el-card  shadow="hover" style="margin-top: 20px;"  class="themeaside">
          <div slot="header">
            <router-link to="/mind.html">
              My Mind
              </router-link>
          </div>
          <div v-for="p in recent_mind" :key="p.key">
              <router-link :to="p.path">
              {{ p.title }}
              </router-link></div>
        </el-card>
        
      </el-aside>
      <el-main direction="vertical">
        <a-card title="All Tags" style="margin-bottom: 20px;" class="themeaside">
          <a-card-grid
            v-for="c in categories"
            style="width:25%;textAlign:'center'"
            :to="'/tags/?category=' + c"
          >
            <!-- <el-link
                            type="info"
                            :href="'/tags/?category=' + c"
                            :underline="false"
            > {{c}}</el-link>-->
            <!-- <a :href="'/tags/?category=' + c">
                            {{c}}
            </a>-->
            <router-link :to="'/tags/?category=' + c">{{c}}</router-link>
          </a-card-grid>
        </a-card>

        <el-row :gutter="20" style="margin-bottom: 20px;">
          <el-col :span="6">
            <a href="https://github.com/chenweigao">
              <el-button icon="iconfont icon-github-fill" round></el-button>
            </a>
          </el-col>
          <el-col :span="6">
            <a href="mailto:mail@weigao.cc">
              <el-button icon="iconfont icon-mail" class="myemail" round></el-button>
            </a>
          </el-col>
          <el-col :span="6">
            <a href="/discuss/">
              <el-button icon="iconfont icon-liuyan" round></el-button>
            </a>
          </el-col>
          <el-col :span="6">
            <router-link to="tags/">
              <el-button icon="el-icon-more" round></el-button>
            </router-link>
          </el-col>
        </el-row>

        <el-row v-for="p in recent_posts">
          <el-col :span="24" style="margin-bottom: 10px;">
            <el-card shadow="hover">
              <div slot="header">
                <Mybadge :title="p.path.split('/')[2]"></Mybadge>
                <router-link :to="p.path">{{p.title}}</router-link>
              </div>
              <div>
                <div v-html="delh1(p.excerpt)" class="myexcerpt"></div>
                <el-link :underline="false" :href="p.path" style="float:right;">
                  <i class="el-icon-view el-icon--right"></i> ..
                </el-link>
                <br />
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import AuthorInfo from "./AuthorInfo.vue";
import Titles from "./Titles";
import Mybadge from "./Mybadge.vue";

export default {
  data() {
    return {
      title: "About",
      src:
        "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
      categories: [],
      recent_posts: [],
      recent_mind: []
    };
  },
  methods: {
    delh1(string) {
      if (string) {
        var end = string.indexOf("</h1>") + 5;
        // console.log(start, end, string.substr(end));
        return string.substr(end);
      }
    }
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
    this.recent_posts = this.$site.pages
      .filter(
        x =>
          (x.path.startsWith("/blog/") || x.path.startsWith("/algorithm/")) &&
          !x.frontmatter.blogindex
      )
      .sort((a, b) => Date.parse(b.lastUpdated) - Date.parse(a.lastUpdated))
      .slice(0, 3);
    this.recent_mind = this.$site.pages
      .filter(x => x.path.startsWith("/minds/"))
      .sort((a, b) => Date.parse(b.lastUpdated) - Date.parse(a.lastUpdated))
      .slice(0, 3);
  }
};
</script>

<style>
a {
  text-decoration: none;
}
.myexcerpt.h1 {
  display: none;
}
@media screen and (max-width: 768px) {
  .themeaside {
    display: none;
  }
}
</style>

