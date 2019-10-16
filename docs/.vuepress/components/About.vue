<template>
    <el-container>
        <el-header>
            
            <Titles :title="title"></Titles>
        </el-header>
        <el-container>
            <el-aside>
                <div class="block">
                    <span class="demonstration"></span>
                    <el-image :src="src"></el-image>
                </div>
                <AuthorInfo></AuthorInfo>

            </el-aside>
            <el-main>
                <AuthorInfo></AuthorInfo>
                <Content slot-key="header"/>
            </el-main>
        </el-container>
    </el-container>
</template>
<script>
import AuthorInfo from './AuthorInfo.vue';
import Titles from './Titles';
export default {
    data() {
        return {
            title: "About",
            src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
        };
    },
};
</script>

<style>
</style>

