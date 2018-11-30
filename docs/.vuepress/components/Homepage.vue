<template>
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="Blog Index" name="first">
                <el-collapse accordion>
                    <el-collapse-item title="Zen">
                        <div v-for="post in zen" :key=post.title name="first">
                            <p>
                                <router-link :to="post.path"> {{ post.title }} </router-link>
                            </p>
                        </div>
                    </el-collapse-item>

                    <el-collapse-item title="Web">
                        <div v-for="post in web" :key=post.title>
                            <p>
                                <router-link :to="post.path"> {{ post.title }} </router-link>
                            </p>
                        </div>
                    </el-collapse-item>

                    <el-collapse-item title="python">
                        <div v-for="post in python" :key=post.title>
                            <p>
                                <router-link :to="post.path"> {{ post.title }} </router-link>
                            </p>
                        </div>
                    </el-collapse-item>

                    <el-collapse-item title="Tool">
                        <div v-for="post in tool" :key=post.title>
                            <p>
                                <router-link :to="post.path"> {{ post.title }} </router-link>
                            </p>
                        </div>
                    </el-collapse-item>

                    <el-collapse-item title="Research">
                        <div v-for="post in research" :key=post.title>
                            <p>
                                <router-link :to="post.path"> {{ post.title }} </router-link>
                            </p>
                        </div>
                    </el-collapse-item>
                </el-collapse>
            </el-tab-pane>
            <el-tab-pane label="Book Index" name="second">
                <div v-for="post in book" :key=post.title>
                    <p>
                        <router-link :to="post.path">
                            << {{ post.title }}>>
                        </router-link>
                    </p>
                </div>
            </el-tab-pane>
            <el-tab-pane label="To Visitor" name="third">
                <div class="animated">
                    <p>Hi, friend. I spent some time building this blog, for the motivation that writing down what I think, noting what I learned and delivering my opinion about pretty design...
                        <br>There you could
                        <router-link :class="'route'" to="/blog/">See The Post List </router-link>or know something
                        <router-link :class="'route'" to="/about/">About Me</router-link>, or share your idea, I will be extremely happy if you share something to me.
                        <br>In the past two years, I was keeping on building my personal site, and this is the
                        <router-link :class="'route'" to="/logs/">Work Log</router-link>, from GitHub pages to Jekyll, it spent me a lot of time, but I lost myself in it until I learned Vue, which is what I wanted, so I built this site with Vue.
                        <br>I will be very appreciate if you are willing to
                        <router-link :class="'route'" to="/discuss/">Leave Some Comments</router-link>!
                        <br>Although I know, I am a new fish in coding, but I have always been proud of my work. Have your nice trip here, thank you so much.
                    </p>
                </div>
            </el-tab-pane>
            <el-tab-pane label="To do" name="fourth"></el-tab-pane>
        </el-tabs>
</template>

<script>
export default {
    data() {
        return {
            activeName: 'first',
            number: 0
        };
    },
    methods: {
        timeStringFormater(timeString) {
            let subString = timeString.slice(0, 16).replace(/\//g, "").replace(" ", "").replace(":", "")
            return subString
        }, timeBlogFormater(timeString) {
            return timeString.slice(0, 10)
        },
        handleClick(tab, event) {
            // console.log(tab, event);
        }
    },
    computed: {
        zen() {
            return this.$site.pages
                .filter(x => x.path.startsWith("/blog/zen/") && !x.frontmatter.blog_index)
        },
        python() {
            return this.$site.pages
                .filter(x => x.path.startsWith("/blog/python/") && !x.frontmatter.blog_index)
        },
        web() {
            return this.$site.pages
                .filter(x => x.path.startsWith("/blog/web/") && !x.frontmatter.blog_index)
        },
        tool() {
            return this.$site.pages
                .filter(x => x.path.startsWith("/blog/tool/") && !x.frontmatter.blog_index)
        },
        research() {
            return this.$site.pages
                .filter(x => x.path.startsWith("/blog/research/") && !x.frontmatter.blog_index)
        },
        book() {
            return this.$site.pages
                .filter(x => x.path.startsWith("/books/") && !x.frontmatter.blog_index)
        }

    }
};
</script>
<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css";
</style>