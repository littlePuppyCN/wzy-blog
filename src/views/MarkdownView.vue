<template>
    <Layout :style="{ 'background-image': `url(../src/assets/side.jpg)`, 'height': '500px' }">
        <template #word>
            <!-- <h1 class="title">所有文章</h1> -->
        </template>
        <template #content>
            <v-md-editor v-model="text" height="400px" @save="save"></v-md-editor>
            <!-- <v-md-editor :model-value="text" mode="preview"></v-md-editor> -->
        </template>
    </Layout>
</template>

<script setup>
import { ref } from 'vue'
import Layout from './Layout.vue'
import { store } from '@/stores/db'
const text = ref('')

const save = () => {
    const DB = store.DB
    const d = new Date()
    const timeStamp = d.toLocaleString()
    const listParams = {
        id: d.getTime(),
        content: text.value,
        update: timeStamp
    }
    DB.list.push(listParams)
    store.setDB('list', DB)
}

</script>

<style scoped></style>