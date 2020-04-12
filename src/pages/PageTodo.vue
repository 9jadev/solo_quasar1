<template>
  <q-page padding>
    <no-tasks v-if="!Object.keys(tasksTodo).length"></no-tasks>
    <tasks-todo 
      v-else
      :tasksTodo="tasksTodo"/> 
     
    <tasks-completed 
      v-if="Object.keys(tasksCompleted).length"
      :tasksCompleted="tasksCompleted" />

    <div class="absolute-bottom q-mb-lg text-center">
      <q-btn round color="blue" size="24px" icon="add" @click="ShowAddTask = true" /> 
    </div>  
     <q-dialog v-model="ShowAddTask" no-backdrop-dismiss>
       <Addtask @close="ShowAddTask = false"/>
    </q-dialog>

  </q-page>
</template>

<script>
import Addtask from 'components/Task/AddTask.vue';
import NoTasks from 'components/Task/Models/Shared/NoTasks.vue';
import TasksTodo from 'components/Task/TasksTodo.vue';
import TasksCompleted from 'components/Task/TasksCompleted.vue';
import { mapGetters } from 'vuex';

export default {
  data(){
    return {
      ShowAddTask: false
    }
  },
  computed: {
    ...mapGetters('tasks', ['tasksTodo', 'tasksCompleted'])    
  },
  components: {
    Addtask , TasksTodo , TasksCompleted , NoTasks
  },
  mounted(){
    this.$root.$on('showAddTask', () => {
      this.ShowAddTask = true
    })
  }
}

</script>
