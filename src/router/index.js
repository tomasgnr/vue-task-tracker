import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import TasksView from '../views/TasksView.vue'
import AddTaskView from '../views/AddTaskView.vue'

const routes = [
  {
    path: '/',
    name: 'TasksView',
    component: TasksView,
  },
  {
    path: '/AddTaskView',
    name: 'AddTaskView',
    component: AddTaskView,
  },
]

const router = new VueRouter({
  routes
})

export default router
