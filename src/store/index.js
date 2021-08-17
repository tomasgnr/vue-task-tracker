import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: []
  },
  getters: {
    allTasks: state => state.tasks
  },
  mutations: {
    setTasks: (state, tasks) => (state.tasks = tasks),
    newTask: (state, task) => state.tasks.unshift(task),
    removeTask: (state, id) => (state.tasks = state.tasks.filter(task => task.id !== id))
  },
  actions: {
    async fetchTasks({ commit }) {
      const response = await axios.get(
        'api/tasks'
      );

      commit('setTasks',response.data)
    },
    async addTask({ commit }, task) {
      const response = await axios.post(
        'api/tasks',
        task
      );

      commit('newTask', response.data)
    },
    async deleteTask({ commit }, id) {
      await axios.delete(`api/tasks/${id}`)

      commit('removeTask', id)
    },
  },
  modules: {
  }
})
