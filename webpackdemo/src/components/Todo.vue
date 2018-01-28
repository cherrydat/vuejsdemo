<template>
    <div>
        <div v-show="!isEdit">
            <div class='content'>
                <div class='header'>
                {{ todo.title }}
                </div>
                <div class='meta'>
                {{ todo.project }}
                </div>
                <div class='extra content'>
                    <span v-on:click="showForm" class='right floated edit icon'>
                        <i class='edit icon'></i>
                    </span>
                    <span v-on:click="deleteTodo(todo)" class='right floated delete icon'>
                        <i class='delete icon'></i>
                    </span>
                </div>
            </div>
        </div>
        <div v-show="isEdit">
            <div class="content">
                <div class="ui form">
                    <div class="field">
                        <label >Title</label>
                        <input type="text" v-model="todo.title">
                    </div>
                    <div class="field">
                        <label >Project</label>
                        <input type="text" v-model="todo.project">
                    </div>
                    
                    <button v-on:click="hideForm">Close X</button>
                </div>
            </div>
        </div>

        <div class='ui bottom attached green basic button' v-show="!isEdit && todo.done">
            Completed
        </div>
        <div class='ui bottom attached red basic button' v-show="!isEdit && !todo.done">
            Complete
        </div>
    </div>
</template>

<script>
export default {
  props:['todo'],
  data() {
      return{
          isEdit: false
      }
  },
  methods:{
      showForm(){
          this.isEdit = true;
      },
      hideForm(){
          this.isEdit = false;
      },
      deleteTodo(todo){
          this.$emit('delete-todo', todo);
      }
  }
}
</script>

