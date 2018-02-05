import Vue from 'vue'
import Router from 'vue-router'
import Zhuye from '@/components/Zhuye' 
import Type from '@/components/Type'
import Gouwuche from '@/components/Gouwuche'
import Myshow from '@/components/Myshow'
import More from '@/components/More'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Zhuye',
      component: Zhuye
    },
    {
      path: '/type',
      name: 'Type',
      component: Type
    },
     {
      path: '/myshow',
      name: 'Myshow',
      component: Myshow
    },
     {
      path: '/gouwuche',
      name: 'Gouwuche',
      component: Gouwuche
    },
    {
      path: '/more',
      name: 'More',
      component: More
    }
  ]
})
