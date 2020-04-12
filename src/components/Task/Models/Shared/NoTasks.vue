<template>
    <q-banner dense class="bg-grey-3 mb q-mb-lg">
      <template v-slot:avatar>
        <q-icon name="check" color="primary" />
      </template>
        No Task Todo Today.
      <template v-slot:action>
        <q-btn 
            flat 
            color="primary" 
            @click="$root.$emit('showAddTask')"
            label="Add Task" />
      </template>
    </q-banner>
</template>
<script>
export default {
    
}
</script>