<template>
    <marquee behavior="scroll" direction="right">
        梦里不知身是客，一晌贪欢。
    </marquee>
</template>

<script>
import axios from 'axios'
import data from './README.md'
export default {
    data() {
        return {
            items: []
        }
    }
}
</script>
