import Vue from 'vue'
import Router from 'vue-router'
import '../assets/icon/iconfont.css'

import runcardComponent from '../pages/runcard'
import reprintruncardComponent from '../pages/reprintruncard'


Vue.use(Router)

export default new Router({
  routes: [
   {path:'/card/runcard',component:runcardComponent},
   {path:'/card/reprintruncard',component:reprintruncardComponent},

  ]
})
