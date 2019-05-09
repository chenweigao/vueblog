<template>
    <div>
        <h2>Latest Blog Commits</h2>

        <el-timeline v-for="record in commits">
            <el-timeline-item
                :timestamp="formatDates(record.commit.author.date)"
                placement="top"
            >
                <el-card shadow="hover">
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
        <el-divider>
            <el-button @click="loadMore"><i class="el-icon-loading"></i> Load More</el-button>
        </el-divider>
    </div>

</template>
<script>
var apiURL = 'https://api.github.com/repos/chenweigao/vueblog/commits?per_page=5&sha='
export default {
    data: function () {
        return {
            branches: ['master', 'dev'],
            currentBranch: 'master',
            commits: null,
            loadNum: 5
            // timestamp: record.commit.author.date
        }
    },
    created: function () {
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
            var xhr = new XMLHttpRequest()
            var self = this
            xhr.open('GET', apiURL + self.currentBranch)

            xhr.onload = function () {
                self.commits = JSON.parse(xhr.responseText)
                console.log(self.commits[0].html_url)
            }
            xhr.send()
        },
        formatDates: function (v) {
            return v.replace(/T|Z/g, ' ')
        },
        loadMore: function () {
            let apiURLNew = 'https://api.github.com/repos/chenweigao/vueblog/commits?per_page='

            var xhr = new XMLHttpRequest()
            var self = this
            this.loadNum += 5
            xhr.open('GET', apiURLNew + this.loadNum + '&sha=' + self.currentBranch)
            xhr.onload = function () {
                self.commits = JSON.parse(xhr.responseText)
                console.log(self.commits[0].html_url)
            }
            xhr.send()
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
.page-edit {
  display: none;
}
.author,
.date {
  font-weight: bold;
  color: darkgrey;
}
</style>
