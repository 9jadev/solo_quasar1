<template>
    <div class="row q-mb-sm">
        <q-input 
        outlined 
        :value="dueDate" 
        :rules="[val => !!val || '* Required']"
        @input="$emit('update:dueDate', $event)" 
        ref="dueDate" lass="col" label="Due date">
            <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                        <q-date 
                            :value="dueDate"
                            @input="$emit('update:dueDate', $event)"
                            />
                    </q-popup-proxy>
                </q-icon>
                <q-icon v-if="dueDate" name="close" @click="$emit('clear')" class="cursor-pointer" />
            </template>
        </q-input>
    </div>
</template>
<script>
export default {
    props: ["dueDate"],
}
</script>