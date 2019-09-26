import Vue from 'vue'
import Router from 'vue-router'
// import  Home from '@/pages/home/Home.vue'
// import List from '@/pages/list/List.vue'

let Home = () => import('@/pages/home/Home.vue')


// let test1 = import('@/pages/home/Home.vue')
// let test2 = () => import('@/pages/home/Home.vue')
// console.log(test1)
// console.log(test2)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    
  ]
})
