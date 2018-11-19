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
// 引入公共css样式
import "./components/css/common.css"

Vue.config.productionTip = false
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);
// 轮播图
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
// 引入mui样式
import "./lib/mui/dist/css/mui.min.css";
import "./lib/mui/dist/css/icons-extra.css";

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render:c=>c(App)
})
