// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
//Vue是vue.js提供的一个构造函数,
new Vue({               // 配置对象,（属性名必须是指定的一些名称）
  el: '#app',           // elelment, 选择器字符串， 表明将表面哪个元素交给Vue管理
  router,
  components: { App },
  template: '<App/>'
})
