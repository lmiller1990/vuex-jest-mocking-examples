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
        mutations,
        actions
    })
  })

  it('tests with a mock commit', () => {
    let count = 0
    let data 

    let mockCommit = (state, payload) => { 
      data = payload
      count += 1 
    }

    actions.getAsync({ commit: mockCommit })
      .then(() => {
        expect(count).toBe(1)
        expect(data).toEqual({ title: 'Mock with Jest' })
    })
  })

  it('tests using a mock mutation but real store', () => {
    store.hotUpdate({
      mutations: { SET_DATA: setDataMock }
    })

    return store.dispatch('getAsync')
      .then((res) => {
        expect(setDataMock.mock.calls[0][1])
          .toEqual({ title: 'Mock with Jest' })
        expect(setDataMock.mock.calls).toHaveLength(1)
      })
  })

  it('tests using a mock axios and full store ', () => {
    return store.dispatch('getAsync')
      .then(() => expect(store.state.data)
        .toEqual({ title: 'Mock with Jest' } )
      )
  })
})
