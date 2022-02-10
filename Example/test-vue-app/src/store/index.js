import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    words: 'something'
  },
  mutations: {
    INCREMENT_COUNT (state){
      state.count++;
    },
    DECREMENT_COUNT (state){
      state.count--;
    },
    SET_COUNT (state, newValue){
      state.count = newValue;
    }
  },
  actions: {
    increment(context) {
      context.commit('INCREMENT_COUNT')
    },
    decrement(context) {
      context.commit('DECREMENT_COUNT')
    },
    set(context, newValue) {
      context.commit('SET_COUNT', newValue)
    },
  },
  getters: {
    getCount (state){
      return state.count;
    }
  }
})
