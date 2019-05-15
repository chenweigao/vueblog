<template>
<div>
    <transition appear enter-active-class="bounce">
    <div id="vcomments" class="animated"></div>
    </transition>
</div>
    <!-- <div id="vcomments" class="animated"></div> -->
</template>

<script>
export default {
  data: function() {
    return {};
  },
  methods: {},
  mounted: function() {
    // require window
    const Valine = require("valine");
    if (typeof window !== "undefined") {
      this.window = window;
      window.AV = require("leancloud-storage");
    }

    new Valine({
      el: "#vcomments",
      appId: "wJrq8Ck2MqeaFzOYUf0TcP6G-gzGzoHsz", // your appId
      appKey: "taRHm1fEce4nGp2lmNgkiW9U", // your appKey
      // notify: true,
      avatar: 'hide',
      placeholder: "既然来了就说点什么吧...",
      visitor: true,
      // verfy: true,
      lang: 'zh-cn',
      meta: ['nick']
    });
  }
};
</script>

<style>
.thin {
  font-weight: 350;
}
.size {
  font-size: 0.83em;
}
.color {
  color: black;
}

.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateX(50px);
}
/* .last-updated {
  display: none
} */
.v-enter-active,
.v-leave-active {
  transition: all 0.6s ease;
}
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css";
</style>
