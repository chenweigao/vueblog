<template>
    <h1
        class="h1title animated flipInX"
        :style="randomRgb()"
    >
        {{title}}
    </h1>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: () => {
                return "WEIGAO CHEN"
            }
        }
    },
    methods: {
        randomRgb: function () {
            var R = Math.floor(Math.random() * 255);
            var G = Math.floor(Math.random() * 255);
            var B = Math.floor(Math.random() * 255);
            return { color: 'rgb(' + R + ',' + G + ',' + B + ')' };
        }
    }
}
</script>
<style>
.h1title {
  text-align: center;
}
</style>
