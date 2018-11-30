<template>
  <el-row>
    <el-button @click="toHome">Home</el-button>
    <el-button
      type="primary"
      @click="toBlog"
    >Blog</el-button>
    <el-button type="success">Book</el-button>
    <el-button type="info">Discuss</el-button>
    <el-button type="warning">Docs</el-button>
    <el-button type="danger">Code</el-button>
    <el-button
      type="info"
      round
    >About</el-button>
  </el-row>

</template>

<script>
export default {
  data() {
    return {
      items: []
    }
  },
  methods: {
    toHome() {
      this.$router.push({ path: "/" })
    },
    toBlog() {
      this.$router.push({ path: "/blog/" })
    },
  }
}
</script>
