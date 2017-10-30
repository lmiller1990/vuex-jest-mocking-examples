import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import { actions, mutations } from './store'

describe('actions', () => {
  let store
  let setDataMock

  beforeEach(() => {
    setDataMock = jest.fn()

    store = new Vuex.Store({
      state: { data: {} },
      mutations: mutations,
      actions: {
        getAsync: actions.getAsync
      }
    })
  })

  it('mocks an ajax calling using axios', () => {
    return store.dispatch('getAsync')
      .then(() => expect(store.state.data)
        .toEqual({ title: 'Mock with Jest' } )
      )
  })
})
