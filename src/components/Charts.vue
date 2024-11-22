<template>
    <div ref="canvas" style="width: 100% ; height: 400px;">

    </div>

</template>

<script setup>
import { nextTick, onMounted, ref, watch } from 'vue'
import { store } from '../stores/db';
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

watch(() => store.tipIndex,
    (n, o) => {
        chart.dispatchAction({
            type: 'showTip',
            seriesIndex: 0,
            dataIndex: n
        })
        if (n === undefined) {
            chart.dispatchAction({
                type: 'hideTip',
            })
        }
    }
)

const initChart = (d) => {

    const weekArr = []

    Array((d.date).length).fill(null).forEach((e, idx) => {
        if (idx % 7 == 0) {
            weekArr.push({
                xAxis: idx
            })
        }
    })

    const option = {
        animationDuration: 2000,
        tooltip: {
            show: true,
            trigger: 'axis',
            formatter: function (p) {
                return p[0].value + ' 斤 '
            },
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: d.date,
        },
        yAxis: {
            type: 'value',
            min: function (value) {
                return value.min - 17;
            }
        },
        series: [
            {
                data: d.fat,
                type: 'line',
                lineStyle: {
                    color: '#5470C6',
                    width: 5
                },
                markPoint: {
                    data: [
                        { type: 'min', name: '最小体重' },
                        { type: 'max', name: '最大体重' }
                    ]
                },
                label: {
                    show: false,
                    rotate:45,
                    distance:-30
                },
                markLine: {
                    symbol: ['none', 'none'],
                    label: { show: true },
                    data: weekArr
                },
            }
        ],

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