<template>
<div>
    <home-header :city='city'/>
    <home-swiper :list='swiperList'/>
    <icons :list='iconList'/>
    <home-recommend :list='recommendList'/>
    <home-weekend :list='weekendList'/>

</div>
</template>
<script>
import HomeHeader from './components/Header' 
import HomeSwiper from './components/Swiper'
import Icons from './components/Icons'
import HomeRecommend  from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios';
export default {
  name: 'Home',
  components :{
    HomeHeader,
    HomeSwiper,
    Icons,
    HomeRecommend,
    HomeWeekend
  },
  data(){
    return{
      city :'',
      swiperList:[],
      iconList:[],
      recommendList:[],
      weekendList:[]

    }
  },
  methods:{
    getHomeInfo () {
      axios.get('/api/index.json').then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc(res){
      res=res.data
      if(res.ret && res.data){
        const data=res.data
        this.city=data.city
        this.swiperList=data.swiperList
        this.iconList=data.iconList
        this.recommendList=data.recommendList
        this.weekendList=data.weekendList

      }
     
    }
  },
  mounted(){
    this.getHomeInfo()
  }
}
</script>
<style >
 

</style>
