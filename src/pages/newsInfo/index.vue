<template>
    <div class="newsInfo-container">
        <div class="info-hesder  text-center">
           <h4 class="info-title">{{newsInfo.title}}</h4>
           <p class="subtitle">
             <span>发表时间:{{ newsInfo.add_time | dateFormat("YYYY-MM-DD HH-mm-ss") }}</span>
             <span class="mui-pull-right">点击:{{ newsInfo.click }}次</span>
           </p>
        </div>   
        <hr>    
        <div class="info-content" v-html="newsInfo.content">
            
         </div>   
         <comment :id="id"></comment>     
    </div>
</template>
<script>
    import {Toast} from "mint-ui"
    import comment from "../../components/comment"
    export default{
        data(){
            return {
                newsInfo:[],
                id:this.$route.params.id
            }
        },
        created(){
            this.getnewsInfo();
        },
        methods:{
            getnewsInfo(){
                this.$http.get("getnew/"+this.id).then(res=>{
                    if(res.status==200){
                        this.newsInfo=res.body.message[0];
                    }else{
                        Toast("加载新闻详情失败");
                    }
                })
            }
        },
        components:{
            comment
        }
    }
</script>
<style lang="less">
    .newsInfo-container{
        padding: 0 5px;
        .info-hesder {
            >h4{
                text-align: center;
                color: red;
                font-size: 16px;
                margin: 15px 0;
                font-weight: 700;
            }
            .subtitle{
                color:#26a2ff;
            }
        }
    }
</style>
