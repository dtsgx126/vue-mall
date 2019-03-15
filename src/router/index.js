import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index/Index'

import IndexHome from '@/pages/Index/components/Home/Home'
import HomeDetail from '@/pages/Index/components/Home/components/Detail'

import Classify from '@/pages/Index/components/Classify/Classify'
import Area from '@/pages/Index/components/Classify/components/Area'
import Area1 from '@/pages/Index/components/Classify/components/Area1'
import Detail from '@/pages/detail/Detail'

import IndexCart from '@/pages/Index/components/Cart/Cart'
import CartDetail from '@/pages/Index/components/Cart/components/Detail'

import IndexMine from '@/pages/Index/components/Mine/Mine'
import MineDetail from '@/pages/Index/components/Mine/components/Detail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index,
      children: [{
          path: '',
          name: 'IndexHome',
          component: IndexHome
        },{
          path: 'classify',
          component: Classify,
          children:[{
            path: '',
            name: 'defaultArea',
            component: Area
          },{
            path: 'Area',
            name: 'Area',
            component: Area
          },{
            path: 'area1',
            name: 'Area1',
            component: Area1
          }
          ]
        },{
          path: 'cart',
          name: 'IndexCart',
          component: IndexCart
        },{
          path: 'mine',
          name: 'IndexMine',
          component: IndexMine
        },{
          path: 'home/detail',
          name: 'HomeDetail',
          component: HomeDetail
        },{
          path: 'cart/detail',
          name: 'CartDetail',
          component: CartDetail
        },{
          path: 'mine/detail',
          name: 'MineDetail',
          component: MineDetail
        }
      ]
    },{
      path: '/detail',
      component: Detail,
      name: 'Detail'
    }


  ]
})
