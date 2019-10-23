import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    show:true
  },
  mutations: {
    changeShow(state,payload) {
      state.show = payload.show
    }
  },
  actions: {
  }
})
