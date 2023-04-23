<template>
    <Layout :style="{ 'height': '500px' }" :bg="'article'">
        <template #title>
            <div class=" w1000">
                <h1>
                    {{ article.title }}
                </h1>
                <p>
                    {{ article.update }}
                </p>
            </div>
        </template>
        <template #content>
            <div class=" w1000">
                <Card>
                    <v-md-editor :model-value="article.content" mode="preview"></v-md-editor>
                </Card>
            </div>
        </template>
    </Layout>
</template>

<script setup>
import Layout from './Layout.vue'
import { ref, computed } from 'vue'
import Card from '../components/Card.vue'
import { useRoute } from 'vue-router'
const route = useRoute()
import { store } from '@/stores/db'


const article = computed(() => {
    return store.DB.list.find((a) => a.id === Number(route.query.id))
})


</script>

<style scoped></style>