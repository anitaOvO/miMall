import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//import env from '../env'

//mock开关
const mock = true;
if (mock) {
    require('./mock/api'); //加载mock
}
axios.defaults.baseURL = '/api';
//axios.defaults.baseURL = 'https://mock.mengxuegu.com/mock/608e6da01d10f86a7bd6ac94/xiaomi';
axios.defaults.timeout = 8000;
// 根据环境变量获取不同的请求地址
// axios.defaults.baseURL = env.baseURL;
//拦截
axios.interceptors.response.use(function(response) {
    let res = response.data;
    if (res.status == 0) {
        return res.data;
    } else if (res.status == 10) {
        //这里路由无效 
        window.location.href = "/login";
    } else {
        alert(res.msg);
    }
});
Vue.use(VueAxios, axios); //用this.axios使用
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");