
<template>
    <div class="comment-container">
        <h4 class="comment-title">发表评论</h4>
        <hr>
        <textarea class="comment-inputBox" placeholder="请输入要评论的内容(不得超过120字)" maxlength="120">

        </textarea>
        <mt-button type="primary" size="large">发表评论</mt-button>
        <div class="comment-main">
            <div class="comment-content" v-for="(item,i) in commentsData" :key="i">
                <p class="comment-info">第{{i+1}}楼 用户:{{item.user_name}}  发表时间:{{item.add_time | dateFormat("YYYY-MM-DD HH:mm:ss")}}</p>
                <p class="comment-text">{{item.content}}</p>
            </div>
        </div>
        <mt-button type="danger" size="large" plain>加载更多...</mt-button>
    </div>

</template>
<script>
    export default{
        props:["id"],
        data(){
            return {
                commentsData:[],
                // id:this.$route.params.id,

                pageindex:1
            }
        },
        created(){
            this.getComments();
        },
        methods:{
            getComments(){
                this.$http.get("getcomments/"+this.id+"?pageindex="+this.pageindex).then(res=>{
                    console.log(res);
                    if(res.body.status==0){
                        this.commentsData = res.body.message;
                    }
                     console.log(this.commentsData);
                })
            }
        }
    }
</script>
<style lang="less">
    .comment-container{
        .comment-title{
            font-size: 18px;
            font-weight: 700;
        }
        .comment-inputBox{
            height: 100px;
        }
        .comment-main{
            margin: 10px 0;
            .comment-content{
                .comment-info{
                    background-color: #ddd;
                    height: 30px;
                    line-height: 30px;
                     color:black;
                }
                .comment-text{
                    font-size: 14px;
                    text-indent: 2em;
                    color: black;
                }
            }
        }
    }
</style>
