<template>
    <div class="page_wrap">
        <div class="page" @click="changePage(current === 1 ? 1 : current - 1)"> ← </div>
        <div class="page" :class="{ active: current === idx + 1 }" @click="changePage(idx + 1)"
            v-for="(_, idx) in Array(Math.ceil(props.total / props.size)).fill(null)" :key="idx">{{ idx + 1 }}</div>
        <div class="page"
            @click="changePage(current === Math.ceil(props.total / props.size) ? Math.ceil(props.total / props.size) : current + 1)"> → </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps(['size', 'total'])
const emits = defineEmits(['onChange'])
const current = ref(1)

const changePage = (index) => {
    if(index === current.value) return 
    current.value = index
    emits('onChange', index)
}

</script>

<style scoped>
.page_wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;

}

.page {
    width: 45px;
    height: 45px;
    background-color: rgba(211, 211, 211,.5);
    border-radius: 8px;
    margin: 0 4px;
    text-align: center;
    line-height: 45px;
    cursor: pointer;
    font-size: 1.2em;
    transition: .1s all linear;
}

.page:hover {
    background-color: rgba(211, 211, 211);
    transform: scale(1.1);
}

.active {
    background-color: rgba(211, 211, 211);
    transform: scale(1.1);
}
</style>