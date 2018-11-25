<template>
    <div>
       <div class="goodInfo-container">
           <!-- 加入购物车小球 -->
          <transition name="ball"
           @before-enter="beforeEnter"
           @enter="enter"
           @after-enter="afterEnter"
           >
            <div ref="ball" class="ball" v-show="ballshow"></div>
          </transition>
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
                    <div class="mui-card-header">{{goodsData.title}}</div>
					<div class="mui-card-content-inner">
                        <p>市场价:<span class="oldPrice">￥{{goodsData.market_price}}</span>销售价:<span class="nowPrice">￥{{goodsData.sell_price}}</span></p>
						 <div class="number">
                            数量:<div class="mui-numbox numBox"  data-numbox-min='1'  data-numbox-max='9'>
                            <button @click="sub" class="mui-btn mui-numbox-btn-minus" type="button">-</button>
                            <input class="mui-numbox-input productNum" v-model="goodsNum" type="number" value="1"/>
                            <button @click="add" class="mui-btn mui-numbox-btn-plus" type="button" >+</button>
                            </div>
                         </div>
                        <div class="sell">
                            <mt-button type="primary">立即购买</mt-button>
                            <mt-button @click="addShopCar" type="danger">加入购物车</mt-button>
                        </div>
					</div>
				</div>
			</div>
            <div class="mui-card">
				<div class="mui-card-content">
                     <div class="mui-card-header">商品参数</div>
					<div class="mui-card-content-inner" >
                        <p>商品货号:{{goodsData.goods_no}}</p>
                        <p>库存情况:{{goodsData.stock_quantity}}</p>
                        <p>上架时间:{{goodsData.add_time | dateFormat("YYYY-MM-DD HH:mm:ss")}}</p>
					</div>
                    <div class="mui-card-footer">
                        <mt-button @click="goGoodsImage" type="primary" size="large" plain>图文介绍</mt-button>
                         <mt-button @click="goGoodsComment" type="danger" size="large" plain>商品评论</mt-button>
                    </div>
				</div>
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
                goodsData:{},
                ballshow:false,
                goodsNum:1
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
                        //  console.log(this.bannerData);
                     }
                })
               
            },
            // 获取产品数据
            getGoodData(id){
                this.$http.get("goods/getinfo/"+id).then(result=>{
                    if(result.body.status==0){
                         this.goodsData=result.body.message[0];
                     }
                })
            },
            // 添加商品数量
            add(){
                this.goodsNum=parseInt(this.goodsNum+1);
            },
            // 减少商品数量
            sub(){
                this.goodsNum=parseInt(this.goodsNum-1);
                if(this.goodsNum<=1){
                    this.goodsNum=1
                }
            },
            // 跳转到产品评论组件
            goGoodsComment(){
                this.$router.push("/home/goodsComment/"+this.imgid);
            },
            //跳转到图文详情页
            goGoodsImage(){
                this.$router.push("/home/goodsImage/"+this.imgid);
            },
            // 添加到购物车
            addShopCar(){
                this.ballshow=!this.ballshow;
                console.log(this.goodsNum);
            },
            beforeEnter(el){
                el.style.transform = "translate(0,0)";
            },
            enter(el,done){
                const ballPosition = this.$refs.ball.getBoundingClientRect();
                const goodsNumPosition = document.getElementById("goodsNum").getBoundingClientRect();
                const ballLeft = goodsNumPosition.left - ballPosition.left;
                const ballTop = goodsNumPosition.top - ballPosition.top;
                el.offsetWidth;
                el.style.transform = `translate(${ballLeft}px,${ballTop}px)`;
                el.style.transition = "all 1s cubic-bezier(.83,.11,.97,.71)";
                done();
            },
            afterEnter(el){
                this.ballshow=!this.ballshow;
            }
        }
    }
</script>
<style lang="less">
.goodInfo-container{
    .ball{
        background-color: red;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        position: absolute;
        left:115px;
        top:390px;
        z-index: 99;
    }
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
    .mui-card{
        .mui-card-content-inner{
            .oldPrice{
                text-decoration: line-through;
                margin-right: 10px;
            }
            .nowPrice{
                color: red;
                font-size: 14px;
                font-weight: 600;
            }
            img{
                width: 100%;
            }
        }
        .mui-card-footer{
            display: block;
        }
        .sell{
            margin: 10px 0;
        }
    }
}
</style>
