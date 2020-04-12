<template>
    <div>
        <list-header bgColor = "bg-orange-4">Todo</list-header>
        <q-list v-if="Object.keys(tasksTodo).length" separator bordered>
            <tasks 
                v-for="(task, key) in tasksTodo" 
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
    props: ['tasksTodo'],
    components: { Tasks , ListHeader }
}
</script>