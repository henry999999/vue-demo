<template>
    <div class="home-container">
        <!-- 轮播图 -->
        <mt-swipe :auto="4000" class="bannerContainer">
        <mt-swipe-item v-for="item in bannerData" :key="item.img">
            <a :href="item.url"><img :src="item.img" alt=""></a>
        </mt-swipe-item>
         <!--  <mt-swipe-item>3</mt-swipe-item> -->
        </mt-swipe>

        <!-- 九宫格 -->
      <ul class="mui-table-view mui-grid-view mui-grid-9">
		  <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/newsList">
		         <img src="../../images/menu1.png" alt="">
		         <div class="mui-media-body">新闻资讯</div>
                </router-link>
             </li>
		 <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
              <router-link to="/home/imgList">
		        <img src="../../images/menu2.png" alt="">
		        <div class="mui-media-body">图片分享</div>
              </router-link>
             </li>
		 <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
             <router-link to="/home/goodsList">
		         <img src="../../images/menu3.png" alt="">
		        <div class="mui-media-body">商品购买</div>
              </router-link>
             </li>
		  <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
              <router-link to="#">
		          <img src="../../images/menu4.png" alt="">
		         <div class="mui-media-body">留言反馈</div>
               </router-link>
             </li>
		  <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
              <router-link to="#">
		           <img src="../../images/menu5.png" alt="">
		           <div class="mui-media-body">视频专区</div>
                 </router-link>
                </li>
		<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link to="#">
		         <img src="../../images/menu6.png" alt="">
		        <div class="mui-media-body">联系我们</div>
            </router-link></li>
	  </ul>
    </div>
</template>
<script>
    import { Toast } from 'mint-ui';
    export default{
        data(){
            return {
                bannerData:[]
            }
        },
        created() {
            this.getBannerData();
        },
        methods:{
            getBannerData(){
                this.$http.get("getlunbo").then(res=>{
                    console.log(res);
                    if(res.status==200){
                        this.bannerData=res.body.message;
                    }else{
                        Toast({
                            message: '加载轮播图数据失败',  //提示内容
                            position: 'bottom',   //显示位置
                            duration: 3000     //持续时间
                        });
                    }
                     
                })
            }
        }
    }
</script>
<style lang="less">
    .home-container{
        .bannerContainer{
            height: 200px;
            .mint-swipe-item{
                &:nth-child(1){
                    background-color: aqua;
                }
                 &:nth-child(2){
                    background-color: red;
                }
            }
        }
        .mui-table-view{
            background-color: #fff;
            .mui-table-view-cell{
                border: none;
                a{
                    display: block;
                    width: 100%;
                    height: 100%;
                   
                    img{
                        width: 60px;
                        height: 60px;
                    }
                    .mui-media-body{
                         font-size: 13px;
                    }
                }
            }
        }
    }
</style>
