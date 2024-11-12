<template>
    <div ref="canvas" style="width: 100% ; height: 400px;">

    </div>
</template>

<script setup>
import { nextTick, onMounted, ref, watch } from 'vue'
import * as echarts from 'echarts';
const props = defineProps(['data'])
const canvas = ref(null)
var chart = null

watch(() => props.data,
    (n, o) => {
        initChart(n)
    },
    { deep: true }
)

const initChart = (d) => {
    const option = {
        tooltip: {
            show:true,
            trigger:'axis',
            formatter:function(p){
                return p[0].value + ' 斤 '
            },
        },
        xAxis: {
            data: d.date,
        },
        yAxis: {
            type: 'value',
            min: function (value) {
                return value.min - 35;
            }
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
    chart = echarts.init(canvas.value)
    await nextTick()
    initChart(props.data)
})


</script>

<style scoped></style>