<template>
    <div>

        <!-- <h1
            class="h1title"
            :style="randomRgb()"
        > Jottings</h1> -->
        <Titles :title="title"></Titles>
        <el-container>
            <el-main>
                <el-card
                    shadow="hover"
                    v-for="post in posts()"
                    class="animated fadeIn"
                    style="margin-top: 40px;"
                    :key=post.key
                >
                    <div
                        slot="header"
                        class="clearfix"
                    >
                        <span class="titles">
                            <router-link :to="post.path">
                                ### {{ post.title }}</router-link>
                        </span>

                        <time class="time"> <a :style="randomRgb()">{{ post.readingTime.words }} </a> words, {{ post.readingTime.text }}, {{ post.lastUpdated | dateFormat }}</time>

                    </div>

                    <div v-html="post.excerpt">
                        {{post.excerpt}}
                    </div>
                    <Mybadge
                        v-for="tag in post.frontmatter.tags"
                        :title="tag"
                        style="float:right;margin-right:5px;padding:8px;"
                        
                    > </Mybadge>
                    <br />
                    <div>

                    </div>
                </el-card>
            </el-main>
        </el-container>

        <el-divider>我是有底线的</el-divider>
    </div>

</template>

<script>
import SearchBox from '@SearchBox'
import Comments from './Comments.vue'
import Mybadge from './Mybadge.vue'
import Titles from './Titles.vue'
export default {
    components: { SearchBox },
    data: function () {
        return {
            title: "JOTTINGS"
        };
    },

    methods: {
        getTimestamp: function (time) {
            return time.replace(/[^0-9]/gi, "");
        },
        posts: function () {
            return this.$site.pages
                .filter(x => x.path.startsWith("/jottings/") && !x.frontmatter.show)
                .sort((a, b) => Date.parse(b.lastUpdated) - Date.parse(a.lastUpdated));
        },

        randomRgb: function () {
            var R = Math.floor(Math.random() * 255);
            var G = Math.floor(Math.random() * 255);
            var B = Math.floor(Math.random() * 255);
            return { color: 'rgb(' + R + ',' + G + ',' + B + ')' };
        },

        parseHtml: function (txt) {
            var parser = new DOMParser()
            return parser.parseFromString(txt, "text/html")
        }
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
            return `${hh}:${mm} ${m}/${d}`
        },
        badgeFormat: function (str) {
            return str.split('/')[2]
        }
    }
};
</script>

<style scoped>
a {
  color: black;
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

.showmore {
  margin-top: 20px;
  margin-left: 43%;
}
</style>
