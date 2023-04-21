
<template>
    <Layout :style="{ 'background-image': `url(../src/assets/control.jpg)`, 'height': '500px' }">
        <template #title>
            <h1>所有文章</h1>
        </template>
        <template #content>
            <Card>
                <div v-for="l in store.DB.list">
                    {{ l.content }}
                </div>
            </Card>
        </template>
    </Layout>
</template>
  
<script setup>
import Layout from './Layout.vue'
import { ref } from 'vue'
import Card from '../components/Card.vue'
import { store } from '@/stores/db'

</script>
  
<style scoped></style>