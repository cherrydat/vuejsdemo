<template>
    <div>
        <p>Completed Tasks: {{todos.filter(todo => {return todo.done === true}).length}}</p>
        <p>Pending Tasks: {{todos.filter(todo => {return todo.done === false}).length}}</p>
        <todo class='ui centered card' v-for="todo in todos" :key="todo.id" v-bind:todo="todo"> todo content </todo>
    </div>
</template>

<script>
import Todo from "./Todo";

export default {
  props: ["todos"],
  components: {
      Todo
  },
  methods:{
    //   deleteTodo(todo){
    //       const todoIndex = this.todos.indexOf(todos);
    //       console.log(todo);
    //       this.todos.splice(todoIndex,1);
    //   }
  }
};
</script>

<style scoped>

</style>


