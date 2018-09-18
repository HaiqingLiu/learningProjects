import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import DragEcharts from '@/components/DragEcharts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DragEcharts',
      component: DragEcharts
    }
  ]
})
