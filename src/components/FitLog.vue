<template>
    <div class="logBox" style="margin-top: 20px;">
        <div v-for="(l, idx) in list" :key="idx" class="eachBox">
            <div @dblclick="dblclick(l.time)">
                <p :title="`查找全部${l.b}`" @click="filter(l.b)">
                    {{ l.b }}
                </p>
                <p>
                    <span v-for="(y, idx) in l.y" :key="idx" style="margin-right:20px;">
                        {{ y.name }} X {{ y.value }}
                    </span>
                    <span>
                        总重量: {{ getWeight(l.y) }} KG
                    </span>
                </p>
                <p>{{ l.log }}</p>
                <p @click="filter('')">{{ l.time }}</p>
            </div>
        </div>
    </div>

</template>

<script setup>
import { store } from '@/stores/db'
import { ref } from 'vue';
const list = ref(store.fitnessFilter())

const getWeight = (arr) => {
    let sum = 0
    arr.forEach((item) => {
        sum += item.value * item.factor
    })
    return sum
}

const filter = (key) => {
    list.value = store.fitnessFilter(key)
}

const dblclick = (t) => {
    const ok = confirm('确认删除吗？')
    if (ok) {
        store.deleteFitLog(t)
    }
}

</script>

<style scoped>
.logBox {
    display: flex;
    flex-wrap: wrap;
    font-size: 16px;
}

.eachBox {
    width: 50%;
}

.eachBox:nth-child(even) {
    padding-left: 10px;
}

.eachBox:nth-child(odd) {
    padding-right: 10px;
}

p {
    padding-right: 20px;
    text-indent: 8px;
    height: 40px;
    line-height: 40px;
    overflow: hidden;
}

div>p:nth-child(1) {
    display: flex;
    justify-content: space-between;
    background-color: #c8dbd9;
}

div>p:nth-child(2) {
    background-color: #eee3d7;
}

div>p:nth-child(3) {
    background-color: #eee3d7;
}

p:nth-child(1):hover {
    cursor: pointer;

}
</style>