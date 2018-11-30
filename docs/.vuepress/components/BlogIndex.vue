<template>
<div>
    <!-- <input type="button" value="show the post" @click="toggle"> -->
    <!-- <input type="button" value="toggle" @click="flag=!flag"> -->
    <transition-group appear enter-active-class="fadeInUp">
        <div v-for="post in posts" :key=post.title v-show=true class="animated">
            <hr>
            <p :class="['thin', 'color']"> {{ post.lastUpdated }}
                <router-link :to="post.path"> >> {{ post.title }} </router-link>
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
        timestampToTime(timestamp) {
            var date = new Date(timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
            var dt = date.toDateString();
            return dt;
            // var Y = dt.getFullYear();
            // var M = (dt.getMonth() + 1).toString().padStart(2, "0");
            // var D = dt
            //   .getDate()
            //   .toString()
            //   .padStart(2, "0");
            // var hh = dt
            //   .getHours()
            //   .toString()
            //   .padStart(2, "0");
            // var mm = dt
            //   .getMinutes()
            //   .toString()
            //   .padStart(2, "0");
            // var ss = dt
            //   .getSeconds()
            //   .toString()
            //   .padStart(2, "0");
            // return `${Y}-${M}-${D} ${hh}:${mm}:${ss}`;
        },
        timeStringFormater(timeString) {
            let subString = timeString.slice(0,16).replace(/\//g,"").replace(" ","").replace(":","")
            return subString
        },
        timeBlogFormater(timeString) {
            return timeString.slice(0,10).replace(/\//g,"-")
        }
    },
    computed: {
        posts() {
            return this.$site.pages
                .filter(x => x.path.startsWith("/blog/") && !x.frontmatter.blog_index)
                // .sort((a, b) => this.timeStringFormater(b.lastUpdated) - this.timeStringFormater(a.lastUpdated));
                .sort()
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
