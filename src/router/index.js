import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import HomeComponent from "../pages/home"
import MemberComponent from "../pages/member"
import SearchComponent from "../pages/search"
import ShopcarComponent from "../pages/shopcar"
// 注册路由
Vue.use(Router)

export default new Router({
  routes: [
    // 路由重定向
    {path:"/",redirect:"/home"},
    {path:"/home",component:HomeComponent},
    {path:"/member",component:MemberComponent},
    {path:"/search",component:SearchComponent},
    {path:"/shopcar",component:ShopcarComponent}
  ],
  // 当前路由高亮
  linkActiveClass:"mui-active"
})
