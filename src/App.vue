<template>
  <div id="app">
    <div class="main-navbar">
      <h1 class="main-navbar-title">Tasks</h1>
    </div>
    <TaskProgress />
    <TaskForm />
    <TaskGrid />
  </div>
</template>

<script>
import TaskProgress from "@/components/TaskProgress.vue"
import TaskForm from "@/components/TaskForm.vue"
import TaskGrid from "@/components/TaskGrid"

import '@/assets/css/index.css'

import { mapActions } from "vuex";

export default {
  components: { TaskProgress, TaskForm, TaskGrid },
  created () {
    this.getTasks()
  },
  methods: {
    ...mapActions([
      'getTasks'
    ])
  }
}
</script>

<style>
.main-navbar {
  text-align: center;
}

.main-navbar-title {
	margin-top: 10px;
	font-weight: 300;
	font-size: 2rem;
}

@media(min-width: 576px) {
	.main-navbar-title {
		margin-top: 20px;
		font-size: 3rem;
	}
}
</style>
