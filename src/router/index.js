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
import CarMintor from '@/components/CarMonter/CarMintor'
import testVideo from '@/components/CarMonter/testVideo'
import RTSP from '@/components/CarMonter/RTSP'
import TestgetDevice from '@/components/CarMonter/TestgetDevice'
import Time from '@/components/testElement/Time'
import lnput from '@/components/testElement/El-Input'
import Dialog from '@/components/DialogV'
import SelectOption from '@/components/testElement/El-Select'
import elform from '@/components/testElement/el-form'
import container from '@/components/UI/Layout/container'
import elrow from '@/components/UI/Layout/elrow'
import elcascader from '@/components/UI/Layout/elcascader'
import upload from '@/components/testElement/Upload'
import Test$Data from '@/components/TestFunction/Test$Data'
import boundaryGap from '@/components/Echart/boundaryGap'
import Echartbar from '@/components/Echart/Echartbar'
import publish from '@/components/Car/publish.vue'
import Steps from '@/components/testElement/Steps.vue'
import inputnumber from '@/components/testElement/el-input-number.vue'
import timeline from '@/components/testElement/timeline.vue'
import DropDown from '@/components/testElement/DropDown.vue'
import objfor from '@/components/TestFunction/objfor.vue'

import ElementUI, { Select, Form } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
/* import {button, select} from 'element-ui' */

Vue.use(Router)
Vue.use(ElementUI)
/* Vue.use(button, select) */

export default new Router({
  mode: 'history',              //在显示页面地址栏上删除#号
  routes: [
    {
      path: '/',             
      redirect: '/objfor'
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
          path: '/home/Four/:id/:name',        //url中传参
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
       path: '/RTSP',
       name: 'RTSP',
       component: RTSP
    },
    {
       path: '/CarMintor',
       name: 'CarMintor',
       component: CarMintor
    },
    {
       path: '/testVideo',
       name: 'testVideo',
       component: testVideo
    },
    {
       path: '/TestgetDevice',
       name: 'TestgetDevice',
       component: TestgetDevice
    },
    {
      path: '/Time',
      name: 'Time',
      component: Time
    },
    {
      path: '/lnput',
      name: 'lnput',
      component: lnput
    },
    {
      path: '/Dialog',
      name: 'Dialog',
      component: Dialog
    },
    {
      path: '/SelectOption',
      name: 'SelectOption',
      component: SelectOption
    },
    {
      path: '/elform',
      name: 'elform',
      component: elform
    },
    {
       path: '/container',
       name: 'container',
       component: container
    },
    {
       path: '/elrow',
       name: 'elrow',
       component: elrow
    },
    {
       path: '/elcascader',
       name: 'elcascader',
       component: elcascader
    },
    {
       path: '/upload',
       name: 'upload',
       component: upload
    },
    {
       path: '/Test$Data',
       name: 'Test$Data',
       component: Test$Data
    },
    {
       path: '/boundaryGap',
       name: 'boundaryGap',
       component: boundaryGap
    },
    {
       path: '/Echartbar',
       name: 'Echartbar',
       component: Echartbar
    },{
       path: '/publish',
       name: 'publish',
       component: publish
    },
    {
       path:'/Steps',
       name: 'Steps',
       component: Steps
    },
    {
       path: '/inputnumber',
       name: 'inputnumber',
       component: inputnumber
    },
    {
       path:'/timeline',
       name: 'timeline',
       component: timeline
    },
    {
      path: '/DropDown',
      name: 'DropDown',
      component: DropDown
    },
    {
      path: '/objfor',
      name: 'objfor',
      component: objfor
    }
  ]
})
