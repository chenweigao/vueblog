<template>
  <div
    class="wt-badge"
    :class="type"
    :style="randomRgb()"
  >
    <a
      :href=" '/tags/?category=' + title"
      style="color:white"
    >{{title.toUpperCase()}}</a>
  </div>
</template>
<script>
export default {
  props: {
    title: { // 组件显示的文字 （可选）
      type: String | Number,
      default: () => {
        return 'None';
      }
    },
    type: { // （可选）主要是背景色的不同（可选值："primary", "default")
      type: String,
      default: () => {
        return 'default';
      }
    },
    path: {
      type: String,
      default: () => {
        return ''
      }
    }
  },
  methods: {
    randomRgb: function () {
      var R = Math.floor(Math.random() * 255);
      var G = Math.floor(Math.random() * 255);
      var B = Math.floor(Math.random() * 255);
      return { background: 'rgb(' + R + ',' + G + ',' + B + ')' };
    }
  }
}
</script>
<style>
.wt-badge {
  padding: 0.3rem;
  display: inline-block;
  border-radius: 0.8rem;
  color: #fff;
  font-size: 0.9rem;
  min-width: 0.6rem;
  min-height: 0.6rem;
  box-sizing: border-box;
  line-height: 1.2rem;
  text-align: center;
  background: #1bb5f1;
}
</style>
