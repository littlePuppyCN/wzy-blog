<template>
    <Layout :style="{ 'height': '500px', 'background-position': 'center -120px' }" :bg="'life'">
        <template #content>
            <Lazyload @loadSuccess="t" :src="Img" />
        </template>
    </Layout>
</template>
  
<script setup>
import Layout from './Layout.vue';
import Lazyload from '../components/Lazyload.vue';
import Img from '@/assets/r3.webp';

const t = (v) => console.log(v)
</script>
  
<style scoped></style>