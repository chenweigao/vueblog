import ElementUI from "element-ui";
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from "vue-router";

export default ({
    Vue,
    options,
    router,
    siteData
}) => {
    Vue.use(ElementUI),
    Vue.use(VueRouter)
}