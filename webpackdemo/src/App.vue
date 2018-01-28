<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <todo-list v-on:delete-todo="deleteTodo" v-bind:todos="todos"></todo-list>
  </div>
</template>

<script>
import TodoList from './components/TodoList'

export default {
  name: 'app',
  components: {
    TodoList
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      todos:[{
        title: "todo A",
        project: "project A",
        done:true
      },{
        title: "todo B",
        project: "project B",
        done:true
      },{
        title: "todo C",
        project: "project C",
        done:true
      }
      ]
    }
  },
  methods:{
    deleteTodo(todo){
      const todoIndex = this.todos.indexOf(todos);
      console.log(todo);
      this.todos.splice(todoIndex,1);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

a {
  color: #42b983;
}
</style>
