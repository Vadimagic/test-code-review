import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    tasks: []
  },
  mutations: {
    updateTasks(state, tasks) {
      state.tasks = tasks
    }
  },
  actions: {
    setTasks({ commit }, tasks) {
      localStorage.setItem("tasks", JSON.stringify(tasks))
      commit('updateTasks', tasks)
    },
    getTasks({ dispatch }) {
      const tasks = JSON.parse(localStorage.getItem("tasks")) || []
      dispatch('setTasks', tasks)
    },
    addTask({ state, dispatch }, payload) {
      const newTask = {
        ...payload,
        id: Date.now(),
        done: false
      }
      dispatch('setTasks', [...state.tasks, newTask])
    },
    toggleTask({ state, dispatch }, task) {
      const newTasks = state.tasks.map(item => item.id !== task.id
        ? item 
        : {
          ...item,
          done: !item.done
        }
      )
      dispatch('setTasks', newTasks)
    },
    deleteTask({ state, dispatch }, id) {
      const filteredTasks = state.tasks.filter(item => item.id !== id)
      dispatch('setTasks', filteredTasks)
    }
  },
  getters: {
    progressTasks(state) {
      if (state.tasks.length === 0) return 0
      const tasksDoneCount = state.tasks.reduce((count, task) => count + Number(task.done), 0)
      return  Math.round((100 / state.tasks.length) * tasksDoneCount)
    }
  }
})

export default store