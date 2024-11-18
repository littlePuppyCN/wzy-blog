<template>
    <div class="box">
        <div :class="['wrapper', { border7: (idx+1) % 7 == 0 }]" v-for="(d, idx) in getData" :key="idx"
            @mouseenter="mouseenter(d.index)">
            <div>{{ d.day }}</div> 
            <div>{{ d.weight }}斤</div>
            <div style="font-size: 18px;">
                <span v-if="d.difference > 0">﹢</span>
                <span v-if="d.difference < 0">﹣</span>
                {{ Math.abs(d.difference) }}
                <span v-if="d.difference > 0" style="color: red;">↑</span>
                <span v-if="d.difference < 0" style="color: green;">↓</span>
            </div>
            <div @click="click(d.day)" v-if="visible">删除</div>
        </div>

    </div>
</template>

<script setup>
import { computed } from 'vue';
import { store } from '../stores/db';
const emits = defineEmits(['indexChange'])

const props = defineProps(['data'])
const visible = location.hostname === 'localhost'
const getData = computed(() => {
    return props.data.date.map((d, idx) => {
        return {
            day: d,
            weight: (props.data.fat)[idx],
            difference: ((props.data.fat)[idx] - (props.data.fat)[idx - 1]).toFixed(1),
            index: idx
        }
    }).reverse()
})

const click = (day) => {
    const ok = confirm('确认删除吗？')
    if (ok) {
        store.deleteFitTable(day)
    }
}

const mouseenter = (idx) => {
    store.setTipIndex(idx)
}

</script>

<style scoped>
.wrapper {
    display: flex;
    justify-content: space-around;
    height: 40px;
    background-color: #eee3d7;
    text-indent: 8px;
    align-items: center;
}

.wrapper:hover {
    background-color: #fa605f;
    color: white;
    font-size: 20px;
}

.wrapper:nth-child(1) {
    background-color: #c8dbd9;
    color: white;
    font-size: 20px;
}

.border7{
    border-bottom: 1px solid white;
}

.wrapper div {
    width: 100px;
}

.box {
    max-height: 400px;
    overflow: auto;
    border-radius: 6px;
}
</style>