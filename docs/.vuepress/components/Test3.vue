<template>
    <marquee behavior="scroll" direction="left">
        Welcome, this is blog index!!
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
