<template>
    <div class="keyboard_wrapper">
        <input style="height: 50px;" v-model="result" type="text" @focus="focus">
        <div @click.capture="click" class="keyboard" :style="{ display: boardVisible ? 'flex' : 'none' }">
            <div class="key" v-for="n in num" :key="n">
                {{ n }}
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
const emits = defineEmits(['submit'])
const boardVisible = ref(false)
let arr = Array(10).fill(null).map((val, idx) => idx)
// 把数组第一位的0转换到最后一位
let [first, ...rest] = arr
let newArr = [...rest, first, '.', 'Ce', 'OK']
const num = ref(newArr)
const result = ref('')

const focus = () => {
    boardVisible.value = true
}

const click = (evt) => {
    // 如果点的是归零
    if (evt.target.innerText === 'Ce') {
        result.value = ''
        return
    }
    // 只允许存在一位小数
    if (evt.target.innerText === '.') {
        if (result.value.indexOf('.') > -1) {
            console.error('小数点已存在')
            return
        }
    }

    //   输入完毕
    if (evt.target.innerText === 'OK') {
        if(result.value != ''){
            emits('submit',result.value)
        }
        boardVisible.value = false
        result.value = ''
        return 
    }

    result.value += evt.target.innerText
}

</script>

<style scoped>
.keyboard_wrapper {
    position: relative;
    display: inline-block;
}

.keyboard {
    position: absolute;
    top: 70px;
    z-index: 12;
    width: 210px;
    flex-wrap: wrap;
    border-top: 1px solid black;
    border-left: 1px solid black;
    background-color: #e2e2e2;
}

.key {
    width: 33.3333%;
    height: 70px;
    border-right: 1px solid black;
    border-bottom: 1px solid black;
    line-height: 70px;
    text-align: center;
    cursor: pointer;
}

.key:hover{
    background-color: white;
}

.key:last-child {
    /* width: 100%; */
}
</style>