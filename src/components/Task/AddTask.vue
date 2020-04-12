<template>
    <q-card>
        <model-header>Add Task</model-header>
        <form @submit.prevent="submitForm">
            <q-card-section class="q-pt-none">
                <model-task-name 
                    ref="TaskName" 
                    :name.sync="taskToSubmit.name" />

                <!-- due date -->
                <model-due-date 
                    ref="TaskDate" 
                    :dueDate.sync="taskToSubmit.dueDate" 
                    @clear="clearDuedate()"/>
                
                <!-- due time -->
                
                <model-due-time 
                    :dueDate.sync="taskToSubmit.dueDate" 
                    :dueTime.sync="taskToSubmit.dueTime" 
                    @clear_time="clear_time()"
                    />
            </q-card-section>

               <!-- submit button  -->
               <model-buttons></model-buttons>
            
            <!-- <pre>
                {{ taskToSubmit }}
            </pre> -->
        </form>
    </q-card>
</template>
<script>
import { mapActions } from 'vuex';
import ModelHeader from 'components/Task/Models/Shared/ModelHeader.vue';
import ModelTaskName from 'components/Task/Models/Shared/ModelTaskName.vue';
import ModelDueDate from 'components/Task/Models/Shared/ModelDueDate.vue';
import ModelDueTime from 'components/Task/Models/Shared/ModelDueTime.vue';
import ModelButtons from 'components/Task/Models/Shared/ModelButtons.vue';
export default {
    data(){
        return {
            taskToSubmit: {
                name: '',
                completed: false,
                dueDate: '',
                dueTime: ''
            }
        }
    },
    methods: {
        ...mapActions('tasks', ['addTask']),
        submitForm(){
            this.$refs.TaskName.$refs.name.validate();
            this.$refs.TaskDate.$refs.dueDate.validate();
            if(!this.$refs.TaskName.$refs.name.hasError || !this.$refs.TaskDate.$refs.dueDate.hasError){
                this.submitTask();     
            }
        },
        submitTask(){
            // console.log('data', this.taskToSubmit);
            this.addTask(this.taskToSubmit);
            this.$emit('close');
        },
        clearDuedate(){
            this.taskToSubmit.dueDate = " "
            this.taskToSubmit.dueTime = " "
        },
        clear_time(){
            this.taskToSubmit.dueTime = " "
        }
    },
    components: {
        ModelHeader , ModelTaskName , ModelDueDate , ModelDueTime , ModelButtons
  }
}
</script>