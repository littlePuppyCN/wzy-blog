<template>
    <div ref="canvas" style="width: 100% ; height: 400px;">

    </div>
</template>

<script setup>
import { nextTick, onMounted, ref, watch } from 'vue'
import * as echarts from 'echarts';
const props = defineProps(['data'])
const canvas = ref(null)
const chart = ref(null)

watch(() => props.data,
    (n, o) => {
        console.log(n)
        initChart(n)
    },
    { deep: true }
)



const initChart = (d) => {
    const option = {
        tooltip: {
            trigger: 'axis'
        },
        xAxis: {
            type: 'category',
            data: d.date
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: d.fat,
                type: 'line',
                smooth: true
            }
        ]
    };

    chart.value.setOption(option)
}


onMounted(async () => {
    chart.value = echarts.init(canvas.value)
    await nextTick()
    initChart(props.data)
})


</script>

<style scoped></style>