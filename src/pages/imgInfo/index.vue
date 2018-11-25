<template>
    <div class="imgInfo-container">
        <div class="info-header  text-center">
           <h4 class="info-title">{{imageContent.title}}</h4>
           <p class="subtitle">
             <span>发表时间:{{imageContent.add_time | dateFormat("YYYY-MM-DD HH:mm:ss")}}</span>
             <span class="mui-pull-right">点击:{{imageContent.click}}次</span>
           </p>
        </div>  
        <hr>
        <div class="imgInfo-preview">
            <!-- 缩略图 -->
            <!-- <img class="preview-img" v-for="(item, index) in imgInfo" :key="index" :src="item.src" height="100" @click="$preview.open(index, imgInfo)"> -->
            <!-- <img class="preview-img" v-for="(item, index) in imgInfo" :key="index" :src="'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1017084271,1312577123&fm=26&gp=0.jpg'" height="100" @click="$preview.open(index, imgInfo)"> -->
             <img class="preview-img" v-for="(item, index) in list" :key="index" :src="item.src" height="100" @click="$preview.open(index, list)">
        </div>
        <div class="imageContent" v-html="imageContent.content"></div>

         <!-- 评论组件 -->
        <comment :id="id"></comment>
    </div>
</template>
<script>
   
    import comment from "../../components/comment"
    export default{
        data(){
            return {
                id:this.$route.params.id,
                imgInfo:[],
                imageContent:{},
                list: [
                    {
                    src: 'https://placekitten.com/600/400',
                    w: 600,
                    h: 400
                        }, 
                    {
                    src: 'https://placekitten.com/1200/900',
                    w: 1200,
                    h: 900
                         },
                     {
                    src: 'https://placekitten.com/1200/900',
                    w: 1200,
                    h: 900
                         },
                     {
                    src: 'https://placekitten.com/600/400',
                    w: 600,
                    h: 400
                        }
                    ]

            }
        },
        created(){
            this.getImgInfo();
            this.getImageContent();
        },
        methods:{
            // 获取缩略图数组
            getImgInfo(){
                this.$http.get("getthumimages/"+this.id).then(res=>{
                   if(res.body.status==0){
                       this.imgInfo=res.body.message;
                   }
                   console.log(this.imgInfo);
                })
            },
            // 获取图片详情
            getImageContent(){
                this.$http.get("getimageInfo/"+this.id).then(result=>{
                    console.log(result);
                    if(result.body.status==0){
                        this.imageContent=result.body.message[0];
                          console.log(this.imageContent);
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
    .imgInfo-container{
        padding: 0 5px;
        .info-header {
            >h4{
                text-align: center;
                color: #26a2ff;
                font-size: 16px;
                margin: 15px 0;
                font-weight: 700;
            }
           
        }
        .imgInfo-preview{
             .preview-img{
                 width: 120px;
                // margin-left: 10px;
                padding: 10px;
            }
        }
        .imageContent{
            font-size: 13px;
            // text-indent: 2em;
            color: black;
            font-weight:600;
            line-height: 25px;
        }
    }
</style>
