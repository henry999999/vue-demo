<template>
    <div class="imgList-conyainer ">
        <div id="slider" class="mui-slider ">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a v-for="item in images" :key="item.id" @click="getImageList(item.id)" :class="[{'mui-control-item':true},{'mui-active':item.id==0}] " href="#item1mobile" data-wid="tab-top-subpage-1.html">
							{{item.title}}
						</a>
					</div>
				</div>
			</div>

            <!-- 图片列表 -->
     <ul class="imgList-list">
        <li v-for="item in imageList" :key="item.id">
           <router-link :to="'imgInfo/'+item.id">
                 <!-- <img v-lazy="item.img_url"> -->
                <img  v-lazy="'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1017084271,1312577123&fm=26&gp=0.jpg'">
                <div class="imgTitle" v-html="item.title"></div>
           </router-link>
        </li>
     </ul>
    </div>
</template>
<script>
    import mui from "../../lib/mui/dist/js/mui.js"
    import {Toast} from "mint-ui"
  export default{
      data(){
          return {
              images:[],
              imageList:[]
          }
      },
      mounted(){
           mui('.mui-scroll-wrapper').scroll({
	       deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
       });

      
      },
      created(){
          this.getImg();
          this.getImageList(0);
      },
      methods:{
          getImg(){
              this.$http.get("getimgcategory").then(res=>{
                  if(res.body.status==0){
                      this.images=res.body.message;
                      this.images.unshift({
                          title:"全部",
                          id:0
                      })
                  }else{
                      Toast("加载分类数据失败");
                  }
              })
          },
        getImageList(id){
          this.$http.get("getimages/"+id).then(res=>{
              if(res.body.status==0){
                  this.imageList = res.body.message;
              }else{
                  Toast("加载图片列表失败");
              }
                 console.log(this.imageList);
          })
      }
      },
     
  }
</script>
<style lang="less">
    .imgList-conyainer{
        padding: 0 5px;
         img[lazy=loading] {
            width: 100px;
            height: 300px;
            margin: auto;
            background-color: red;
            background: url("http://webjike.com/upload/images/2018/4/7f47a94504cc79a5.gif");
            background-position: center center;
            background-size: cover;
            }
        .imgList-list{
            >li{
                position: relative;
                width: 100%;
                margin-bottom: 8px;
               >a{
                    width: 100%;
                    >img{
                    width: 100%;
                    vertical-align: bottom;
                     box-shadow: 10px,10px,5px,#333;
                }
                .imgTitle{
                    width: 100%;
                    // height: 30px;
                    line-height: 30px;
                    color:#fff;
                    position: absolute;
                    bottom: 0;
                    background-color: rgba(0, 0, 0, 0.5);
                    font-size: 13px;
                }
               }
            }
        }
    }

</style>
