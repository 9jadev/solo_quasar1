<template>
    <div class="row q-mb-sm" v-if="dueDate">
        <q-input outlined :value="dueTime"  @input="$emit('update:dueTime', $event)" class="col" label="Due time">
            <template v-slot:append>
                <q-icon name="access_time" class="cursor-pointer">
                    <q-popup-proxy transition-show="scale" transition-hide="scale">
                        <q-time :value="dueTime" @input="$emit('update:dueTime', $event)"/>
                    </q-popup-proxy>
                </q-icon>
                <q-icon v-if="dueTime" name="close" @click="$emit('clear_time')" class="cursor-pointer" />
            </template>
        </q-input>
    </div>
</template>
<script>
export default {
 props: ['dueDate', 'dueTime'],   
}
</script>