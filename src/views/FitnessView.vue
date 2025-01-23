<template>
    <Layout :style="{ 'height': '500px' }" :bg="'article'">
        <template #content>
            <div class="w1000">


                <Card :style="{ 'margin': '0 0 30px 0' }">
                    <h2 style="text-align: center;">体重记录</h2>
                    <Charts :data="store.DB.fat || {}" />
                </Card>

                <Card :style="{ 'margin': '0 0 30px 0' }">
                    <FitTable :data="store.DB.fat || {}" />
                </Card>

                <Card :style="{ 'margin': '0 0 30px 0' }">
                    <h2 style="text-align: center;">BMI 中国标准 ( 当日体重 )</h2>
                    <BMI :weight="(store.DB.fat.fat)[(store.DB.fat.fat).length - 1]" />
                </Card>

                <Card :style="{ 'margin': '0 0 30px 0' }">
                    <h2 style="text-align: center;">碳蛋脂转换器</h2>
                    <Exchange />
                </Card>

                <Card :style="{ 'margin': '0 0 30px 0' }">
                    <h2 style="text-align: center;">力训记录</h2>
                    <FitLog />
                </Card>

            </div>
        </template>
    </Layout>
</template>

<script setup>
import Layout from './Layout.vue';
import Card from '../components/Card.vue';
import Charts from '../components/Charts.vue';
import Exchange from '../components/Exchange.vue';
import BMI from '../components/BMI.vue';
import { store } from '@/stores/db';
import FitLog from '../components/FitLog.vue';
import FitTable from '../components/FitTable.vue';

</script>

<style scoped></style>