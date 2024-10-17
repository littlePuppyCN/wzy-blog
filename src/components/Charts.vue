<template>
    <div ref="canvas" style="width: 100% ; height: 400px;">

    </div>
</template>

<script setup>
import { nextTick, onMounted, ref, watch } from 'vue'
import * as echarts from 'echarts';
const props = defineProps(['data'])
const canvas = ref(null)

watch(() => props.data,
    (n, o) => {
        initChart(n)
    }
)



const initChart = (d) => {
    const chart = echarts.init(canvas.value)
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
    chart.setOption(option)
}


onMounted(async () => {
    await nextTick()
    initChart(props.data)
})


</script>

<style scoped></style>