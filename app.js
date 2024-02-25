const app = Vue.createApp({
  data() {
    return {
      title: 'Hello Coding Garden',
      newTodo: '',
      done: false,
      todos: []
    }
  },
  methods: {
    addTodo() {
      if(this.newTodo !== '') {
        this.todos.push({
          title: this.newTodo,
          done: this.done,
        })
        this.newTodo = ''
      }
    },
    remove(todo) {
      const todoIndex = this.todos.indexOf(todo)
      this.todos.splice(todoIndex, 1)
    },
    allDone() {
      this.todos.forEach(todo => {
        todo.done = true
      });
    }
  }
}).mount("#app")
