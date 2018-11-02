<template>
<!-- <light-timeline :items='items'>
</light-timeline> -->
<div>
    <input type="button" value="Input" @click="getFile">
</div>
</template>

<script>
import axios from 'axios'
import data from './README.md'
export default {
    data() {
        return {
            items: []
        }
    },
    computed: {
        posts() {
            return this.$site.pages
                .filter(x => x.path.startsWith("/blog/") && !x.frontmatter.blog_index)
                .sort((a, b) => b.lastUpdated - a.lastUpdated);
        }
    },
    methods: {
        timestampToTime(timestamp) {
            var date = new Date(timestamp);
            var dt = date.toDateString();
            return dt;
        },
        getFile() {
            console.log(data);
        }
    },
    created: function () {
        axios
            .get('README.md').then(response => {
                console.log(response);
            })
    },
}
</script>
