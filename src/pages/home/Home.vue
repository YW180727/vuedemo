<template>
<div>
    <home-header/>
    <home-swiper/>
    <icons/>
    <home-recommend/>
    <home-weekend/>

</div>
</template>
<script>
import HomeHeader from './components/Header' 
import HomeSwiper from './components/Swiper'
import Icons from './components/Icons'
import HomeRecommend  from './components/Recommend'
import HomeWeekend from './components/Weekend'
export default {
  name: 'Home',
  components :{
    HomeHeader,
    HomeSwiper,
    Icons,
    HomeRecommend,
    HomeWeekend
  }
}
</script>
<style >
 

</style>
