<template>
  <div
    class="task"
    :class="taskClasses"
    @click="toggleTask(task)"
  >
    <div class="task-header">
      <div
        class="task-delete-button"
        :class="taskClasses"
        @click.stop="deleteTask(task.id)"
      >
        x
      </div>
    </div>
    <div class="task-body">
      <span
        class="task-text"
        :class="taskClasses"
      >
        {{ task.title }}
      </span>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  computed: {
    taskClasses() {
      const classes = {}
      if (this.task.done) classes.done = true
      return classes
    },
  },
  methods: {
    ...mapActions([
      "deleteTask",
      "toggleTask"
    ])
  }
}
</script>

<style scoped>
.task {
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 150px;
  padding: 10px;
  cursor: pointer;
  user-select: none;
  border-radius: 8px;
  margin-top: 10px;
  background-color: #d1382e;
  border-left: 12px solid #b8271c;
}
.task:hover {
  background-color: #fa4538;
  border-left: 12px solid #d83d32;
}

@media(min-width: 576px) {
  .task {
    width: 350px;
    margin: 10px;
  }
}

.task-header {
  display: flex;
  justify-content: flex-end;
}

.task-delete-button {
  font-size: 13px;
  text-align: center;
  border-radius: 10px;
  width: 20px;
  height: 20px;
  top: 10px;
  right: 10px;
  background-color: #b73229;
}

.task-body {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 2;
}

.task-text {
  max-width: 308px;
  font-size: 32px;
  font-weight: 200;
  line-height: 33px;
  overflow-wrap: break-word;
}

.task.done {
  background-color: #4caf50;
  border-left: 12px solid #0a8f08;
}

.task.done:hover {
  background-color:#60d463;
  border-left: 12px solid #0fc40c;
}

.task-text.done {
  text-decoration: line-through;
}

.task-delete-button.done {
  background-color: #0a8f08;
}
</style>
