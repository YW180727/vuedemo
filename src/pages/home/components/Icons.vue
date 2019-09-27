<template>
    <div class="icons">
      <swiper>
          <swiper-slide v-for="(page,index) in pages" :key="index">
           <div class="icon" v-for="item in page" :key="item.id">
             <div class="icon-img">
             <img class="icon-img-content" :src="item.imgUrl"/>
            </div>
           <p class="icon-desc"  >{{item.context}}</p>
          </div>
         </swiper-slide>
      </swiper>
      
        
    </div>
</template>
<script>
export default {
    name:'Icons',
    data(){
        return {
            iconList:[{
            id:'01',
            imgUrl:"http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",
            context:'热门景点'
        },{
            id:'02',
            imgUrl:"http://img1.qunarzz.com/piao/fusion/1711/df/86cbcfc533330d02.png",
            context:'滑雪季'
        },{
            id:'03',
            imgUrl:"http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png",
            context:'泡温泉'
        },{
            id:'04',
            imgUrl:"http://img1.qunarzz.com/piao/fusion/1611/35/2640cab202c41b02.png",
            context:'动植圆'
        },{
            id:'05',
            imgUrl:"http://img1.qunarzz.com/piao/fusion/1611/d0/e09575e66f4aa402.png",
            context:'游乐园'
        },{
            id:'06',
            imgUrl:"http://img1.qunarzz.com/piao/fusion/1611/59/569d3c096e542502.png",
            context:'必游榜单'
        },{
            id:'07',
            imgUrl:"http://img1.qunarzz.com/piao/fusion/1611/17/4bd370f3eb1acd02.png",
            context:'演出'
        },{
            id:'08',
            imgUrl:"http://img1.qunarzz.com/piao/fusion/1611/7f/b1ea3c8c7fb6db02.png",
            context:'城市观光' 
        },
        {
            id:'09',
            imgUrl:"http://img1.qunarzz.com/piao/fusion/1611/a9/ffc620dbda9b9c02.png",
            context:'一日游' 
        }]
    }
    },
    computed:{
        pages (){
            const pages=[]
            this.iconList.forEach((item,index)=>{
                const page=Math.floor(index/8)
                if(!pages[page]){
                    pages[page]=[]

            }
            pages[page].push(item)
            }
            
            )
            return pages
        }
    }
    
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
    .icons >>> .swiper-container
        height :0;
        padding-bottom : 50%;
    .icon
        position:relative;
        overflow: hidden;
        width :25%;
        height :0;
        float: left;
        padding-bottom :25%;
        .icon-img
            position :absolute;
            top:0;
            left:0;
            right:0;
            bottom :.44rem
            box-size :border box;
            padding :.1rem;
            .icon-img-content
                display:block;
                margin :0 auto;
                height :100%;
        .icon-desc
            position :absolute;
            left:0;
            right:0;
            bottom :0;
            height :.44rem;
            line-height :.44rem;
            color :$darkTextColor;
            text-align :center;
            ellipsis()

</style>