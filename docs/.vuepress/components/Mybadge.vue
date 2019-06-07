<template>
    <div class="wt-badge" :class="type" :style="randomRgb()">
        {{title}}
    </div>
</template>
<script>
export default {
    props: {
    title: { // 组件显示的文字 （可选）
      type: String | Number, 
      default: () => {
        return '123';
      }
    },
    type: { // （可选）主要是背景色的不同（可选值："primary", "default")
      type: String,
      default: () => {
        return 'default';
      }
    }
  },
  methods: {
      randomRgb: function () {
      var R = Math.floor(Math.random() * 255);
      var G = Math.floor(Math.random() * 255);
      var B = Math.floor(Math.random() * 255);
      return { background: 'rgb(' + R + ',' + G + ',' + B + ')' };
      // console.log(this.rgbArray);
      // let i = Math.floor(Math.random()*15)
      // let item = toString(this.rgbArray[i])
      // console.log(this.rgbArray[i].style);
      // return this.rgbArray[i].style
      
    }
  }
}
</script>
<style>
.wt-badge {
    padding: 0.3rem;
    display: inline-block;
    border-radius: 0.5rem;
    color: #fff;
    font-size: 0.9rem;
    min-width: 0.6rem;
    min-height: 0.6rem;
    box-sizing: border-box;
    line-height: 0.7rem;
    text-align: center;
    background: #1BB5F1;
  }
</style>
