<template>
    <Layout :style="{ 'height': '500px', 'background-position': 'center -120px' }" :bg="'life'">
        <template #content>
            <Lazyload @loadSuccess="t" :src="'https://img2.baidu.com/it/u=2516443844,358800779&fm=253&fmt=auto&app=120&f=JPEG?w=667&h=500'" />
        </template>
    </Layout>
</template>
  
<script setup>
import Layout from './Layout.vue';
import Lazyload from '../components/Lazyload.vue';

const t = (v) => console.log(v)
</script>
  
<style scoped></style>