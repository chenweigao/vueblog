<template>
<div>

    <div class="message" v-for="item in timeAxis1">
        <div class="circle">sss</div><span class="time">{{item.time}}</span>
        <div class="lineborder">
            <p>text</p>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data: function () {
        return {            timeAxis1: [
                { time: '8月10日', showTime: false },
                { time: '8月11日', showTime: true },
                { time: '8月12日', showTime: false },
                { time: '8月13日', showTime: false },
                { time: '8月14日', showTime: false }
            ]        }

    },
    methods: {
        showIt(index) {
            this.timeAxis1[index].showTime = !this.timeAxis1[index].showTime
        }
    }
}
</script>

<style>
.message {
  display: block;
  width: 100%;
  height: 450rpx;
}
.circle {
  margin-left: 28rpx;
  margin-right: 50rpx;
  display: block;
  height: 50rpx;
  width: 50rpx;
  float: left;
}
.lineborder {
  margin-left: 50rpx;
  display: block;
  height: 400rpx;
  width: 100%;
  left: 200rpx;
  border-left: 5rpx solid #999999;
}
.lineborder img {
  display: block;
  width: 200rpx;
  height: 300rpx;
  margin: 0 auto;
}
.lineborder p {
  margin-left: 80rpx;
}
.circle img {
  max-width: 100%;
  max-height: 100%;
}

</style>