import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import HomeComponent from "../pages/home"
import MemberComponent from "../pages/member"
import SearchComponent from "../pages/search"
import ShopcarComponent from "../pages/shopcar"
import newsListComponent from "../pages/newsList"
import newsInfoComponent from "../pages/newsInfo"
import imgListComponent from "../pages/imgList"
import imgInfoComponent from "../pages/imgInfo"
import goodsListComponent from "../pages/goodsList"
import goodInfoComponent from "../pages/goodInfo"
import goodsComment from "../pages/goodInfo/goodsComment.vue"
import goodsImage from "../pages/goodInfo/goodsImage.vue"
// 注册路由
Vue.use(Router)

export default new Router({
  routes: [
    // 路由重定向
    {path:"/",redirect:"/home"},
    {path:"/home",component:HomeComponent},
    {path:"/member",component:MemberComponent},
    {path:"/search",component:SearchComponent},
    {path:"/shopcar",component:ShopcarComponent},
    {path:"/home/newsList",component:newsListComponent},
    {path:"/home/newsInfo/:id",component:newsInfoComponent},
    {path:"/home/imgList",component:imgListComponent},
    {path:"/home/imgInfo/:id",component:imgInfoComponent},
    {path:"/home/goodsList",component:goodsListComponent},
    {path:"/home/goodInfo/:id",component:goodInfoComponent},
    {path:"/home/goodsComment/:id",component:goodsComment},
    {path:"/home/goodsImage/:id",component:goodsImage}
  ],
  // 当前路由高亮
  linkActiveClass:"mui-active"
})
