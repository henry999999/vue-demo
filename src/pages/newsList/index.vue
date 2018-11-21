<template>
    <div class="newsList-container">
       <ul class="mui-table-view">
				<li v-for="item in listData" :key="item.id" class="mui-table-view-cell mui-media">
					<router-link :to="'newsInfo/'+item.id">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							<h4 class="mui-ellipsis">{{item.title}}</h4>
							<p><span>发表时间: {{ item.add_time | dateFormat("YYYY-MM-DD HH:mm:ss")}}</span><span class="mui-pull-right">点击:{{item.click}}次</span></p>
						</div>
					</router-link>
				</li>	
			</ul>
    </div>
</template>
<script>
    import {Toast} from "mint-ui"
    export default{
        data(){
            return {
               listData:[] 
            }
        },
        created(){
            this.getNewsList();
        },
        methods:{
            getNewsList(){
                this.$http.get("getnewslist").then(res=>{
                    console.log(res);
                    if(res.status==200){
                        this.listData=res.body.message;
                    }else{
                        Toast("加载新闻列表失败");
                    }
                })
            }
        }
    }
</script>
<style lang="less">
    .newsList-container{
        .mui-table-view{
            .mui-table-view-cell{
                .mui-media-body{
                    >h4{
                        font-weight: 700;
                    }
                    >p{
                        color: #26a2ff;
                    }
                }
            }
        }
    }
</style>
