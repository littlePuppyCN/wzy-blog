<template>
    <div v-for="(l, idx) in store.DB.fitness" :key="idx" style="margin-top: 20px;">
        <div @dblclick="dblclick(l.time)">
            <p>{{ l.b }}</p>
            <p>
                <span v-for="(y, idx) in l.y" :key="idx" style="margin-right:20px;">
                    {{ y.name }} X {{ y.value }}
                </span>
                <span>
                    总重量: {{ getWeight(l.y) }} KG
                </span>
            </p>
            <p>{{ l.log }}</p>
            <p>{{ l.time }}</p>
        </div>
    </div>
</template>

<script setup>
import { store } from '@/stores/db'

const getWeight = (arr) => {
    let sum = 0
    arr.forEach((item) => {
        sum += item.value * item.factor
    })
    return sum
}

const dblclick = (t) => {
    const ok = confirm('确认删除吗？')
    if(ok){
        store.deleteFitLog(t)
    }
}

</script>

<style scoped>
div {

    font-size: 16px;
    display: flex;
    flex-direction: column;
}

p {
    padding-right: 20px;
    text-indent: 8px;
    height: 40px;
    line-height: 40px;
}

div>p:nth-child(1) {
    background-color: #c8dbd9;
}

div>p:nth-child(2) {
    background-color: #eee3d7;
}

div>p:nth-child(3) {
    background-color: #eee3d7;
}
</style>