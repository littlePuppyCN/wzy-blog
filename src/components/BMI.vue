<template>
    <main>
        <ul>
            
            <li>
                <div>分类</div>
                <div>BMI范围 | {{ bmi.toFixed(1) }}</div>
            </li>
            <li :class="{high:getColor === idx}" v-for="(val, idx) in data" :key="idx">
                <div>
                    {{ val.name }}
                </div>
                <div>
                    {{ val.value }}
                </div>
            </li>
        </ul>
    </main>
</template>

<script setup>

import { computed, ref } from 'vue';
const props = defineProps(['weight'])
const bmi = props.weight / 2 / 1.82 / 1.82

const data = ref(
    [
        { name: '偏瘦', value: '<= 18.4' },
        { name: '正常', value: '18.5 ~ 23.9' },
        { name: '过重', value: '24.0 ~ 27.9' },
        { name: '肥胖', value: '>= 28.0' }
    ]
)


const getColor = computed(() => {
    let result = null

    if( bmi <= 18.4){
        result = 0
    }
    if( bmi > 18.5 && bmi < 23.9){
        result = 1
    }
    if( bmi > 24 && bmi < 27.9){
        result = 2
    }
    if( bmi >= 28.0){
        result = 3
    }
    return result
})

</script>

<style scoped>

ul li:first-child{
    font-weight: 1000;
    font-size: 20px;
    background-color: #c8dbd9!important;
}
li {
    height: 40px;
    align-items: center;
    display: flex;
    justify-content: space-evenly;
    background-color: #eee3d7;
}


li div:nth-child(2){
    width: 150px;
}

main{
    margin-top: 30px;
}

.high{
    background-color: #fa605f;
    color: white;
}
</style>