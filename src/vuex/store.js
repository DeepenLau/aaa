// Vendor
import Vue from 'vue'
import Vuex from 'vuex'

// Install plugin
Vue.use(Vuex)

const state = {
  init: [],

  detail: {
    foo: 'bar'
  },

  newList: []
}

const mutations = {
  ADD_NEW_LIST (state) {
    state.newList = [4, 5, 6, 7, 8, 9]
  },
  PUSH_LIST (state, listObject) {
    state.init.push(listObject)
  },
  INIT_LIST (state, initlist) {
    state.init = initlist
  }
}

const store = new Vuex.Store({
  state,
  mutations
})

export default store
