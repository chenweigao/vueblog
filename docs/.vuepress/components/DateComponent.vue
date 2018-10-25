<template>
    <transition appear enter-active-class="bounceInRight">
        <div class="animated">
            <div class="block">
                <!-- <span class="demonstration">work nav:</span> -->
                <el-date-picker v-model="value" align="right" type="date" placeholder="choose a day" :picker-options="pickerOptions1">
                </el-date-picker>
                <el-tooltip placement="bottom" content="to this day!" effect="light" open-delay=200 hide-after=600>
                <el-button @click="toThisDate" icon="el-icon-search"></el-button>
                </el-tooltip>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    data() {
        return {
            pickerOptions1: {
                disabledDate(time) {
                    return time.getTime() > Date.now();
                },
                shortcuts: [{
                    text: '今天',
                    onClick(picker) {
                        picker.$emit('pick', new Date());
                    }
                }, {
                    text: '昨天',
                    onClick(picker) {
                        const date = new Date();
                        date.setTime(date.getTime() - 3600 * 1000 * 24);
                        picker.$emit('pick', date);
                    }
                }, {
                    text: '一周前',
                    onClick(picker) {
                        const date = new Date();
                        date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                        picker.$emit('pick', date);
                    }
                }]
            },
            value: new Date(),
            date: null
        };
    },
    // computed: {
    //     date :function() {
    //         today = new Date()
    //         return today.toDateString().slice(4, 11).replace(/ /, '-')
    //     }
    // },
    methods: {
        toThisDate() {
            var d = this.value;
            if (!d || !d.getMonth) {
                return;
            }
            var month = new Array()
            month[0] = "January";
            month[1] = "February";
            month[2] = "March";
            month[3] = "April";
            month[4] = "May";
            month[5] = "June";
            month[6] = "July";
            month[7] = "August";
            month[8] = "September";
            month[9] = "October";
            month[10] = "November";
            month[11] = "December";
            var n = month[d.getMonth()]
            var date = n.toLowerCase()
            this.date = date
            console.log(date);
            // var date = this.value.toDateString().slice(4, 11).replace(/ /, '-')
            // console.log(date);
            // this.date = date
            this.$router.push({ path: '#' + this.date })
        }
    }
};
</script>
<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css";
</style>
