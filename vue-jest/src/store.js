import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    inputValue: '',
    list: []
  },
  mutations: {
    changeInputValue (state, payload) {
      state.inputValue = payload
    },
    addTodoItem (state, payload) {
      state.list = [...state.list, { status: 'div', value: payload }]
      state.inputValue = ''
    },
    deleteTodoItem (state, payload) {
      const newList = [...state.list]
      newList.splice(payload, 1)
      state.list = newList
    },
    changeItemStatus (state, payload) {
      const newList = state.list.map((item, index) => {
        if (payload === index) return { status: 'input', value: item.value }
        return item
      })
      state.list = newList
    },
    resetItemStatus (state, payload) {
      const newList = state.list.map((item, index) => {
        if (payload === index) return { status: 'div', value: item.value }
        return item
      })
      state.list = newList
    },
    changeItemValue (state, payload) {
      const newList = state.list.map((item, index) => {
        if (payload.index === index) return { status: item.status, value: payload.value }
        return item
      })
      state.list = newList
    }
  }
})

export default store
