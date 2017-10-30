import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

jest.mock('axios')

Vue.use(Vuex)

const state = {
  data: {}
}

export const mutations = {
  SET_DATA (state, data) {
    state.data = data
  }
}

export const actions = {
  getAsync ({ commit }) {
    return axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
      console.log('res', response)
      commit('SET_DATA', response.data)
    })
    .catch(err => console.log(err))
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
