<template>
    <div class="goodsImage-container">
        <h4>{{imagesData.title}}</h4>
        <hr>
        <div v-html="imagesData.content"></div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                id:this.$route.params.id,
                imagesData:{}
            }
        },
        created(){
            this.getImageData(this.id);
        },
        methods:{
            // 获取图文详情数据
             getImageData(id){
                this.$http.get("goods/getdesc/"+id).then(result=>{
                    if(result.body.status==0){
                         this.imagesData=result.body.message[0];
                     }
                })
            }
        }
    }
</script>
<style lang="less">
.goodsImage-container{
    h4{
        color:#26a2ff;
        text-align: center;
        margin: 15px 0;
    }
    img{
        width: 100%;
    }
}
</style>

