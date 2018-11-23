// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引入路由文件
import vueRouter from "vue-router"
// 注册路由
Vue.use(vueRouter);
import vueResource from "vue-resource"
Vue.use(vueResource);
// 设施Vue-resource请求根路径
Vue.http.options.root="http://www.lovegf.cn:8899/api/"
Vue.http.options.emulateJSON=true;
// 引入公共css样式
import "./components/css/common.css"

Vue.config.productionTip = false
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);
// 轮播图
import { Swipe, SwipeItem, Button,Lazyload  } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
Vue.use(Lazyload);
// 引入缩略图文件
import VuePreview from 'vue2-preview'
Vue.use(VuePreview)
// 引入mui样式
import "./lib/mui/dist/css/mui.min.css";
import "./lib/mui/dist/css/icons-extra.css";

// 定义全局时间格式过滤器
import moment from "moment"  
Vue.filter("dateFormat",(msg,pattern)=>{
    return moment(msg).format(pattern);
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render:c=>c(App)
})
