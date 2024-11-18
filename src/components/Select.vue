<template>
    <div>
        <select :name="props.data.name" :id="props.data.name" @change="onChange" v-model="input">
            <option :value="0">请选择</option>
            <option v-for="(each, idx) in props.data.options" :key="idx" :value="each.value">{{ each.name }}
            </option>
        </select>
    </div>
</template>

<script setup>

import { ref, watch } from 'vue';
const props = defineProps(['data', 'value'])
const input = ref(props.data.value)
const emits = defineEmits(['onChange'])
const onChange = () => {
    emits('onChange', input.value)
}

watch(() => props.data.value,
    (n, o) => {
        if(n === 0){
            input.value = 0
        }
    },
    { deep: true }
)
</script>

<style scoped>
select {
    width: 150px;
    height: 40px;
    line-height: 40px;
}

input {
    height: 50px;
}
</style>