import Vue from 'vue'
import Router from 'vue-router'
import HelloTodo from '@/components/HelloTodo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloTodo',
      component: HelloTodo
    }
  ]
})
