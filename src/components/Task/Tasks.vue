<template>
      <q-item 
        @click="updateTask({id, updates: {completed: !task.completed}} )"
        :class="!task.completed ? 'bg-orange-1' : 'bg-green-1'"
        clickable
        v-ripple>
        <q-item-section side top>
          <q-checkbox v-model="task.completed" />
        </q-item-section>

        <q-item-section>
          <q-item-label :class="{ 'text-strikethrough' : task.completed }">
            {{ task.name }}
          </q-item-label>
        </q-item-section>

        <q-item-section v-if="task.dueDate"
         side
         top>
          <q-icon name="event" />
          <q-item-label caption>
            {{ task.dueDate }}
          </q-item-label>
          <q-item-label caption>
            <small>{{ task.dueTime }}</small>
          </q-item-label>
        </q-item-section>

         <q-item-section side>
          <div class="row">
            <q-btn flat round dense color="green" @click.stop="showEditTask = true" icon="edit"></q-btn>
            <q-btn flat round dense color="red" @click.stop="promptToDelete(id)" icon="delete"></q-btn>
          </div>
        </q-item-section>

        <q-dialog v-model="showEditTask" no-backdrop-dismiss>
          <EditTask :task="task" :id="id" @close="showEditTask = false"/>
        </q-dialog>

      </q-item>
</template>

<script>
import { mapActions } from 'vuex';
import EditTask from 'components/Task/EditTask.vue';
export default {
    data(){
      return {
        showEditTask: false
      }
    },
    props: ['task', 'id'],
    methods: {
      ...mapActions('tasks', ['updateTask', 'deleteTask']),
      promptToDelete(id){
        this.$q.dialog({
        title: 'Confirm',
        message: 'Would you like to really delete ?',
        cancel: true,
        persistent: true
        }).onOk(() => {
          this.deleteTask(id);
        })
      }
    },
    components: {
      EditTask
    }
}
</script>

<style>

</style>