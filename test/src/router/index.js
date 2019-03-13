import Vue from 'vue'
import Router from 'vue-router'
import '../assets/icon/iconfont.css'

import runcardComponent from '../pages/runcard'
import reprintruncardComponent from '../pages/reprintruncard'
import assemblyComponent from '../pages/assembly'
import holdComponent from '../pages/hold'




Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:'/card/runcard'},
   {path:'/card/runcard',component:runcardComponent},
   {path:'/card/reprintruncard',component:reprintruncardComponent},
   {path:'/croute/assembly',component:assemblyComponent},
   {path:'/control/hold',component:holdComponent},
  ]
})
