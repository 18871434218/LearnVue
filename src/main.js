// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
<<<<<<< .merge_file_a18408
//添加视频播放库
import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
=======
import echarts from 'echarts'
>>>>>>> .merge_file_a17280

Vue.use(VideoPlayer)
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts

/* eslint-disable no-new */
//Vue是vue.js提供的一个构造函数,
new Vue({               // 配置对象,（属性名必须是指定的一些名称）
  el: '#app',           // elelment, 选择器字符串， 表明将表面哪个元素交给Vue管理
  router,
  components: { App },
  template: '<App/>'
})
