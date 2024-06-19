<template>
  <div class="task-form-container">
    <form class="task-form" @submit.prevent="addTask">
      <input
        class="task-form-input"
        v-model="title"
        type="text"
        placeholder="New task?"
        maxlength="43"
      >
      <button
        class="task-form-button"
        @click.prevent="newTask"
      >+</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      title: "",
    }
  },
  methods: {
    ...mapActions([
      "addTask"
    ]),
    newTask() {
      if (this.title != '') {
        this.addTask({
          title: this.title
        })
        this.title = ''
      }
    }
  }
}
</script>

<style scoped>
.task-form-container {
  margin: 20px 30px 0;
  display: flex;
  justify-content: center;
}

@media (min-width: 576px) {
  .task-form-container {
    margin: 40px 30px 0;
  }
}

.task-form {
  display: flex;
  width: 100%;
  max-width: 600px;
  border: solid 1px white;
  border-radius: 8px;
}

.task-form-input {
  width: 100%;
  padding: 7px 10px;
  background-color: #FFF2;
  color: #FFF;
  font-size: 32px;
  border: none;
  border-right: 1px solid white;
  outline: none;
}

.task-form-button {
  width: 50px;
  margin: none;
  border: none;
  background-color: #1d80d1;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  color: white;
  font-size: 32px;
  outline: none;
}

.task-form-button:hover {
  background-color: #3da8ff;
}
</style>
