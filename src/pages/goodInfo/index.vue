<template>
    <div>
       <div class="goodInfo-container">
           <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<!-- 轮播图 -->
                        <mt-swipe :auto="4000" class="bannerContainer">
                        <mt-swipe-item v-for="item in bannerData" :key="item.img">
                            <a :href="item.url"><img :src="item.img" alt=""></a>
                        </mt-swipe-item>
                        <!--  <mt-swipe-item>3</mt-swipe-item> -->
                        </mt-swipe>
					</div>
				</div>
			</div>
            <div class="mui-card">
				<div class="mui-card-content">
                    <div class="mui-card-header">商品的名称标题</div>
					<div class="mui-card-content-inner">
						 <div class="number">
                            数量:<div class="mui-numbox numBox" data-numbox-step='1' data-numbox-min='0' data-numbox-max='10'>
                            <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
                            <input class="mui-numbox-input productNum" type="number" value="1"/>
                            <button class="mui-btn mui-numbox-btn-plus" type="button">+</button>
                            </div>
                            </div>
					</div>
				</div>
			</div>
            <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）
					</div>
				</div>
				<div class="mui-card-footer">页脚</div>
			</div>
       </div>
    </div>
</template>
<script>
     //初始化数量选择器
        // mui($(".numBox")).numbox();
    export default{
        data(){
            return {
                imgid:this.$route.params.id,
                bannerData:[],
                goodsData:{}
            }
        },
        created(){
            this.getSwiper(this.imgid);
            this.getGoodData(this.imgid);
        },
        methods:{
            getSwiper(imgid){
                this.$http.get("getthumimages/"+imgid).then(res=>{
                     if(res.body.status==0){
                         this.bannerData=res.body.message;
                         console.log(this.bannerData);
                     }
                })
               
            },
            getGoodData(id){
                this.$http.get("goods/getdesc/"+id).then(result=>{
                    if(result.body.status==0){
                         this.goodsData=result.body.message[0];
                         console.log(this.goodsData);
                     }
                })
            }
        }
    }
</script>
<style lang="less">
.goodInfo-container{
    background-color: #eee;
    overflow: hidden;
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
}
</style>
