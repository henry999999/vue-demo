<template>
    <div class="goods-list">
        <div @click="goGoodinfo(item.id)" class="goods-item" v-for="item in goodsData" :key="item.id">
            <img :src="item.img_url" alt="">
            <h4>{{item.title}}</h4>
            <div class="goodInfo">
                <p><span class="nowPrice">￥{{item.sell_price}}</span><span class="oldPrice">￥{{item.market_price}}</span></p>
                <p class="sell"><span class="hot">热卖中</span><span class="">剩{{item.stock_quantity}}件</span></p>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                pageindex:1,
                goodsData:[]
            }
        },
        created(){
            this.getGoods(1);
        },
        methods:{
            getGoods(pageindex){
                this.$http.get("getgoods?pageindex="+pageindex).then(res=>{
                    if(res.body.status==0){
                        this.goodsData=res.body.message;
                         console.log(this.goodsData);
                    }
                })
            },
            goGoodinfo(id){
                this.$router.push("/home/goodInfo/"+id);
                // 相关函数 
                // $router.push(“name”);
                // $router.push({path:”name”});
                // $router.push({path:”name”?a=123}); //传参
                // $router.push({path:”name”，query:{a=123}});
                // $router.go();
                // 参数查询：$router.query.[参数名]

            }
        }

    }
</script>
<style lang="less">
.goods-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 5px;
    .goods-item{
        width: 49%;
         min-height: 233px;
         display: flex;
         flex-direction: column;
         justify-content: space-between;
        h4{
            font-size:16px;
        }
        img{
            width: 100%;
        }
        .goodInfo{
            background-color: #eee;
            margin: 5px 0;
           .nowPrice{
               color:red;
               font-size: 16px;
               font-weight: 700;
           }
           p{
               line-height: 30px;
               margin: 0;
               padding: 0 5px;
           }
           .oldPrice{
               text-decoration: line-through;
               font-size: 12px;
               margin-left: 10px;
           }
           .sell{
               display: flex;
               justify-content: space-between;
           }
        }
    }
}
</style>

