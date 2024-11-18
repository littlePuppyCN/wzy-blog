<template>
    <div>
        <Select @onChange="onChange" :data="{ name: 'maso', options: options, value: body }" />
    </div>

    <div>
        <div v-for="(each, idx) in yaLin">
            {{ each.name }}
            <select :key="idx" :name="each.name" :id="each.name" v-model="each.value">
                <option :value="0">0</option>
                <option :value="e" v-for="(e, idx) in [1, 2, 3, 4, 5, 6]" :key="idx">{{ e }}</option>
            </select>
        </div>
    </div>

    <div>
        <input type="text" placeholder="这里记录组数和训练状态" v-model="log">
    </div>

    <div>
        <button @click="onClick">确认</button>
    </div>
</template>

<script setup>
import { store } from '@/stores/db';
import { ref } from 'vue';
import Select from './Select.vue';
const body = ref(0)
const log = ref('')

const options = ref(
    [
        {
            value: 1,
            name: '胸'
        },
        {
            value: 2,
            name: '背'
        },
        {
            value: 3,
            name: '肱二头肌'
        },
        {
            value: 4,
            name: '肱三头肌'
        },
        {
            value: 5,
            name: '肩后束'
        },
        {
            value: 6,
            name: '肩前束'
        },
        {
            value: 7,
            name: '大腿'
        },
        {
            value: 8,
            name: '腹肌'
        }
    ]
)

const initYaLin = [
    { name: '大哑铃', value: 0, factor: 3 },
    { name: '中哑铃', value: 0, factor: 2.5, },
    { name: '小哑铃', value: 0, factor: 1.5 },
]

const yaLin = ref(JSON.parse(JSON.stringify(initYaLin)))

const onChange = (v) => {
    body.value = v
}

const yaLinChange = (evt) => {
    // console.log(yaLin.value)
}

const onClick = () => {
    const d = new Date()
    const result = {
        b: (options.value.filter((op) => op.value === body.value))[0].name,
        y: yaLin.value,
        log: log.value,
        time: d.toLocaleString()
    }
    store.addFitLog(result)
    reset()
}

const reset = () => {
    body.value = 0
    yaLin.value = JSON.parse(JSON.stringify(initYaLin))
    log.value = ''
}

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

button {
    height: 50px;
    width: 100px;
}
</style>