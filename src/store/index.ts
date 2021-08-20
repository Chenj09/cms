import { createStore, Store, useStore as useVuexStore } from 'vuex'
import { IRootState } from './types'

import login from './login/login'
import system from './main/system/system'

import type { IStoreType } from './types'

const store = createStore<IRootState>({
  state: () => {
    return {
      name: 'jiajia'
    }
  },
  mutations: {
    changeName(state) {
      console.log(state)
    }
  },
  getters: {},
  actions: {},
  modules: { login, system }
})

export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}

export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export default store
