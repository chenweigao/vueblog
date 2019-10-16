<template>
  <a-card hoverable :title="title">
    
    <template
      class="ant-card-actions"
      slot="actions"
    >
      <a href="https://github.com/chenweigao"> <i class="iconfont icon-github-fill"></i></a>
      <a href="mailto:mail@weigao.cc"><i class="iconfont icon-mail"></i></a>
      <a href="/blog/others/resume.html"><i class="iconfont icon-resume"></i></a>
      
    </template>
    <a-card-meta
      :title="author_name"
      :description="description"
    >
      <a-avatar
        slot="avatar"
        src="/weigao.jpg"
      />
    </a-card-meta>
  </a-card>
</template>
<script>
export default {
  props: {
    author_name: { // 组件显示的文字 （可选）
      type: String,
      default: () => {
        return 'Weigao Chen';
      }
    },
    description: {
      type: String,
      default: () => {
        return 'Software Engineer, Huawei Technologies Co Ltd'
      }
    },
    title: {
      type: String,
      default: () => {
        return 'Author'
      }
    },
  },
};
</script>
<style>
@import "https:////at.alicdn.com/t/font_1014632_8btj1lgimlo.css";
</style>
