<template>
    <div>
        <h1
            class="h1title"
            :style="randomRgb()"
        >Blog Changelog</h1>
        <el-timeline v-for="record in commits">
            <el-timeline-item
                :timestamp="formatDates(record.commit.author.date)"
                placement="top"
            >
                <el-card
                    shadow="hover"
                    class="animated bounceInRight"
                >
                    <span class="message">{{ record.commit.message | truncate }}</span>
                    <p><span class="author"><a
                                :href="record.author.html_url"
                                target="_blank"
                            >{{ record.commit.author.name }}</a></span>
                        commit at
                        <a
                            :href="record.html_url"
                            target="_blank"
                            class="commit"
                        >{{ record.sha.slice(0, 7) }}</a></p>
                </el-card>
            </el-timeline-item>

        </el-timeline>
        <!-- <el-divider>
            <el-button @click="loadMore"><i class="el-icon-loading"></i> Load More</el-button>
        </el-divider> -->
        <el-button
            @click="loadMore()"
            style="float:right"
        > <i class="el-icon-loading"></i> Load More</el-button>
    </div>

</template>
<script>
var apiURL = 'https://api.github.com/repos/chenweigao/vueblog/commits?per_page=5&sha=master'
import axios from 'axios'
export default {

    data: function () {
        return {
            branches: ['master', 'dev'],
            currentBranch: 'master',
            commits: null,
            loadNum: 10,
            loading: true
            // timestamp: record.commit.author.date
        }
    },
    created() {
        this.fetchData()
    },
    watch: {
        currentBranch: 'fetchData'
    },
    filters: {
        truncate: function (v) {
            var newline = v.indexOf('\n')
            return newline > 0 ? v.slice(0, newline) : v
        },
        formatDate: function (v) {
            return v.replace(/T|Z/g, ' ')
        }
    },
    methods: {
        fetchData: function () {
            var self = this
            axios.get(apiURL)
                .then(function (response) {
                    console.log(response)
                    self.commits = JSON.parse(response.request.responseText)

                })
                .catch(function (error) {
                    console.log(error)
                })
        },
        formatDates: function (v) {
            return v.replace(/T|Z/g, ' ')
        },
        randomRgb: function () {
            var R = Math.floor(Math.random() * 255);
            var G = Math.floor(Math.random() * 255);
            var B = Math.floor(Math.random() * 255);
            return { color: 'rgb(' + R + ',' + G + ',' + B + ')' };
        },
        loadMore() {
            var self = this
            this.loadNum += 5
            let apiURLNew = 'https://api.github.com/repos/chenweigao/vueblog/commits?per_page=' + this.loadNum + '&sha=' + "master"
            console.log(apiURLNew)
            axios.get(apiURLNew)
                .then(function (response) {
                    self.commits = JSON.parse(response.request.responseText)
                    console.log(self.commits)
                })
                .catch(function (error) {
                    console.log(error)
                })
        }
    }
}
</script>
<style>
/* body {
  margin: 0;
} */
#demo {
  font-family: "Helvetica", Arial, sans-serif;
}
.message {
  font-size: 16px;
  color: #545454;
}

.author,
.date {
  font-weight: bold;
  color: darkgrey;
}
</style>
