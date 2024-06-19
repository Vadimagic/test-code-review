<template>
  <vue-draggable
    v-if="tasks.length"
    class="task-grid"
    id="task-grid"
    :value="tasks"
    @input="setTasks"
    group="people"
    animation=250
    fallbackTolerance=3
  >   
    <task
      v-for="task in tasks" 
      :key="task.id"
      :task="task" 
    />
  </vue-draggable>
  <div v-else class="no-tasks-message">
    No task for today :)
  </div>
</template>

<script>
import Task from "@/components/Task.vue"
import VueDraggable from 'vuedraggable'
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    VueDraggable,
    Task, 
  },
  computed: {     
    ...mapState([
      "tasks"
    ])
  },
  methods: {
    ...mapActions([
      "setTasks"
    ])
  }
}
</script>

<style scoped>
.task-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

@media(min-width: 576px) {
  .task-grid {
    margin-top: 20px;
    margin: 40px 0 0;
  }
}

.no-tasks-message {
  font-size: 26px;
  color: #FFF2;
  margin-top: 100px;
  text-align: center;
}

@media(min-width: 576px) {
  .no-tasks-message {
    font-size: 32px;
  }
}
</style>