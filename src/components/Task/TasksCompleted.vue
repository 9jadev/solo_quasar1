<template>
    <div class="q-mt-lg">
        <list-header bgColor = "bg-green-4">Completed</list-header>
        <q-list 
            separator
            bordered>
            <tasks 
                v-for="(task, key) in tasksCompleted" 
                :key="key"
                :task="task" 
                :id="key"
                />
        </q-list>
    </div>
    
</template>
<script>
import ListHeader from 'components/Shared/ListHeader.vue';
import Tasks from 'components/Task/Tasks.vue';
export default {
    props: ['tasksCompleted'],
    components: { Tasks , ListHeader }
}
</script>