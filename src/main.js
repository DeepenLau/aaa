import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import index from './views/index.vue'
import index2 from './views/index2.vue'

Vue.use(VueRouter)

const router = new VueRouter()

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
router.start(App, 'app')
