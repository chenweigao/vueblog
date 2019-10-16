import ElementUI from "element-ui";
import 'element-ui/lib/theme-chalk/index.css'
// import './styles/mycss.css'
import animated from 'animate.css'
import VueRouter from "vue-router";
// import SearchBox from "@vuepress/plugin-search"
import Vue from 'vue';
import { Card, Button, Avatar } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css'; 
export default ({
    Vue,
    options,
    router,
    siteData
}) => {
    Vue.use(ElementUI),
    Vue.use(VueRouter),
        Vue.use(animated),
        Vue.use(Card),
        Vue.use(Button),
        Vue.use(Avatar)
    // Vue.use(SearchBox)
}

