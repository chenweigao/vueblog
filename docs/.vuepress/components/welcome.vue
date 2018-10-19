<template>
<transition appear enter-active-class="slideInRight">
<div class="animated">

<p :class="['thin', 'color']"> 
    Hi, friend. I spent some time building this blog, for the motivation that writing down what I think, noting what I learned and delivering my opinion about pretty design...
    <br/>
    There you could <a href="/blog/">see the post list</a> or know something about me, or share your idea, I will be extremely happy if you share something to me.
    <br/>
    In the past two years, I was keeping on building my personal site, from GitHub pages to Jekyll, it spent me a lot of time, but I lost myself in it until I learned Vue, which is what I wanted, so I built this site with Vue.
    <br/>
    Although I know, I am a new fish in coding, but I have always been proud of my work. Have your nice trip here, thank you so much.</p>
</div>
</transition>
</template>

<script>
export default {
  data: function() {
    return { };
  },
  methods: {}
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

.v-enter-active,
.v-leave-active {
 transition: all 0.6s ease;
}
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css";
</style>
