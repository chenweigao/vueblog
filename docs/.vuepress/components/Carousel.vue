<template>
  <el-carousel indicator-position="outside">
    <el-carousel-item
      v-for="item in items"
      :key="item"
    >
      {{ item }}
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  data: function () {
    return {
      items : ['aaa', 'bbb', 'ccc']
    }
  },
  methods: {
    
  },
  computed: {
    
  }
};
</script>

<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>