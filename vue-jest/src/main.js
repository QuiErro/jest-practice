import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueRouter from 'vue-router'
import TodoList from './containers/TodoList/TodoList.vue'
import TodoListVuex from './containers/TodoListVuex/TodoList.vue'
import NotFoundPage from './containers/NotFoundPage/NotFoundPage.vue'

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  {
    path: '/',
    component: TodoList
  },
  {
    path: '/todolist-vuex',
    component: TodoListVuex
  },
  {
    path: '*',
    component: NotFoundPage
  }
]

const router = new VueRouter({ routes })

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
