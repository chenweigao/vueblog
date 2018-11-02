import ElementUI from "element-ui";
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from "vue-router";
import LightTimeline from 'vue-light-timeline';

export default ({
    Vue,
    options,
    router,
    siteData
}) => {
    Vue.use(ElementUI),
    Vue.use(VueRouter),
    Vue.use(LightTimeline)
}