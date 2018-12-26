<template>
<div>
    <h1>2018</h1>
    <transition-group appear enter-active-class="fadeInUp">
        <div v-for="post in posts18" :key=post.title class="animated">
            <p :class="['thin', 'color']" > {{ post.lastUpdated }}
                <router-link :to="post.path"> ### {{ post.title }} </router-link>
            </p>
        </div>
    </transition-group>
        <h1>2017</h1>
    <transition-group appear enter-active-class="fadeInUp">

        <div v-for="post in posts17" :key=post.key v-show=true class="animated">
            <p :class="['thin', 'color']"> {{ post.lastUpdated }}
                <router-link :to="post.path"> ### {{ post.title }} </router-link>
            </p>
        </div>
    </transition-group>
</div>
</template>

<script>
export default {
    data: function () {
        return {
            flag: false
        }
    },
    methods: {
        getTimestamp: function (time) {
            return time.replace(/[^0-9]/ig, "")
        }
    },
    computed: {
        posts18() {
            // console.log(this.$site.pages);
            return this.$site.pages
                .filter(x => x.path.startsWith("/blog/2018/") && !x.frontmatter.blog_index)
                .sort((a, b) => Date.parse(b.lastUpdated) - Date.parse(a.lastUpdated))
        },
        posts17() {
            // console.log(this.$site.pages);
            return this.$site.pages
                .filter(x => x.path.startsWith("/blog/2017/") && !x.frontmatter.blog_index)
                .sort((a, b) => Date.parse(b.lastUpdated) - Date.parse(a.lastUpdated))
        }
    }
};
</script>

<style>
.thin {
    font-weight: 300;
}

.size {
    font-size: 0.83em;
}

.color {
    color: black;
    /* color: dodgerblue; */
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

@import 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css'
</style>
