import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import One from '@/components/One'
import Two from '@/components/Two'
import Third from '@/components/Third'
import Four from '@/components/Four'
import Five from '@/components/Five'
import Six from '@/components/Six'
import Seven from '@/components/Seven'
import Eight from '@/components/Eight'
import VueTen from '@/components/VueTen'
import Login from '@/components/Login'
import VueTest from '@/components/VueTest'
import VueEight from '@/components/VueEight'
import remoteVideo from '@/components/agron/remoteVideo'
import carVideo from '@/components/carMonter/carVideo'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
/* import {button, select} from 'element-ui' */

Vue.use(Router)
Vue.use(ElementUI)
/* Vue.use(button, select) */

export default new Router({
  mode: 'history',    //在显示页面地址栏上删除#号
  routes: [
    {
      path: '/',             
      redirect: '/carVideo'
    },
    {
      path: '/home',  
      name: 'home',
      component: Home,
      children: [
        {
          path:'one', 
          component: One
        },
        {
          path: 'Two',
          component: Two
        },
        {
          path: 'Third',
          name: 'Third',
          component: Third
        },
        {
          path: '/home/Four/:id/:name',    //url中传参
          name: 'Four',
          component: Four 
        },
        {
          path: '/home/Five/:id/:name',          //编程式传参
          name: 'Five',
          component: Five
        },
        {
          path: '/home/Six',     //子页面6
          name: 'Six',
          component: Six
        },
      ]
    },
    {
      path: '/Seven',       //子页面7
      name: 'Seven',
      component: Seven
    },
    {
      path: '/Eight',       //子页面8
      name: 'Eight',
      component: Eight
    },
    {
      path: '/Login',       //子页面8
      name: 'Login',
      component: Login
    },
    {
      path: '/VueTest',   //测试小功能
      name: 'VueTest',
      component: VueTest
    },
    {
      path: '/VueEight',  //测试
      name: 'VueEight',
      component: VueEight
    },
    {
      path: '/VueTen',
      name: 'VueTen',
      component: VueTen
    },
    {
       path: '/remoteVideo',
       name: 'remoteVideo',
       component: remoteVideo
    },
    {
       path: '/carVideo',
       name: 'carVideo',
       component: carVideo
    }
  ]
})
