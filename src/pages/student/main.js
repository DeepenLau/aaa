import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import index from './views/index.vue'
import index2 from './views/index2.vue'

Vue.use(VueRouter)

Vue.config.debug = true

const router = new VueRouter({
  // 貌似只能首页这是为 true
  // 这里设置 true 会导致在 student 的页面第二个路由页面属性又重新注入 index.js 导致返回首页
  // 设置 false 又会路由后面又会跟着 #!
  history: false,
  root: '/student'
})

router.map({
  '/': {
    name: 'index',
    component: index
  },
  '/index2': {
    name: 'index2',
    component: index2
  }
})

// router.redirect({
//   '*': '/'
// })

router.start(App, 'app')
