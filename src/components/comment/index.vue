
<template>
    <div class="comment-container">
        <h4 class="comment-title">发表评论</h4>
        <hr>
        <textarea v-model="msg" class="comment-inputBox" placeholder="请输入要评论的内容(不得超过120字)" maxlength="120">

        </textarea>
        <mt-button type="primary" size="large" @click="addComment">发表评论</mt-button>
        <div class="comment-main">
            <div class="comment-content" v-for="(item,i) in commentsData" :key="i">
                <p class="comment-info">第{{i+1}}楼 &nbsp; 用户:{{item.user_name}}  &nbsp; 发表时间:{{item.add_time | dateFormat("YYYY-MM-DD HH:mm:ss")}}</p>
                <p class="comment-text">{{item.content == "undefined" ? "此用户很懒" : item.content  || "此用户没有发表任何评论"}}</p>
            </div>
        </div>
        <mt-button type="danger" size="large" plain @click="loadMore">加载更多...</mt-button>
    </div>

</template>
<script>
    import {Toast} from "mint-ui"
    export default{
        props:["id"],
        data(){
            return {
                commentsData:[],
                // id:this.$route.params.id,
                pageindex:1,
                msg:""
            }
        },
        created(){
            this.getComments();
        },
        methods:{
            getComments(){
                this.$http.get("getcomments/"+this.id+"?pageindex="+this.pageindex).then(res=>{
                    if(res.body.status==0){
                        // this.commentsData = res.body.message;
                        this.commentsData = this.commentsData.concat(res.body.message);
                    }
                })
            },
            loadMore(){
                this.pageindex++;
                this.getComments();
            },
            addComment(){
                if(this.msg.trim()==""){
                    Toast("评论不可为空");
                    return;
                }
                this.$http.post("postcomment/"+this.id,{content:this.msg}).then(res=>{
                    if(res.body.status==0){
                        // 将新评论的数据手动添加到commentsData中
                        this.commentsData.unshift({
                            user_name:"匿名用户",
                            add_time: new Date(),
                            content: this.msg
                        })
                        this.msg="";
                        Toast("发表评论成功");
                       
                    }else{
                        Toast("发表评论失败");
                    }
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
