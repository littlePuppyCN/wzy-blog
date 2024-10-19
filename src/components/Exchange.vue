<template>
    <div class="nl" v-for="(food, idx) in Object.keys(foodExchange)" :id="idx">
        <label :for="food">{{ foodExchange[food].name }}:</label>
        <input type="text" :id="food" v-model="foodExchange[food].init">
        <span>转换率: <span class="bold">{{ foodExchange[food].value }} %</span></span>
        <span class="bold" style="margin-left: 20px;color: #6f8bdd;"> =>>>>>>> {{foodExchange[food].init / (foodExchange[food].value / 100) }}g</span>

    </div>



</template>

<script setup>
import { ref } from 'vue';

const foodExchange = ref(
    {
        rice: {
            name: '熟米饭',
            value: 30,
            type:'tan',
            init:null
        },
        corn:{
            name:'甜玉米',
            value:18,
            type:'tan',
            init:null
        },
        zhou:{
            name:'米粥',
            value:10,
            type:'tan',
            init:null
        },
        meat:{
            name:'熟瘦肉',
            value:25,
            type:'dan',
            init:null
        },
        egg:{
            name:'鸡蛋',
            type:'dan',
            init:null,
            value:6
        }
    }
)

</script>

<style scoped>
.nl {
    font-size: 18px;
    margin-bottom: 20px;
}

.nl input {
    height: 50px;
    line-height: 50px;
    margin: 0 10px;
    font-size: 20px;
}

label{
    width: 80px;
    display: inline-block;
}

.bold {
    font-weight: bold;
}
</style>