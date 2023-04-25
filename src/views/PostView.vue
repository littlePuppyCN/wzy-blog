<template>
    <Layout :style="{ 'height': '500px' }" :bg="'article'">
        <template #title>
            <div class="w1000">
                <h1 class="title">
                    {{ article.title }}
                </h1>
                <p class="update">
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
import { ref, computed, onMounted } from 'vue'
import Card from '../components/Card.vue'
import { useRoute } from 'vue-router'
const route = useRoute()
import { store } from '@/stores/db'


const article = computed(() => {
    return store.DB.list.find((a) => a.id === Number(route.query.id))
})

onMounted(() => {
    document.querySelector('header').scrollIntoView({ behavior: 'smooth' })

})

</script>

<style scoped>
.title {
    color: black;
}

.update {
    margin-top: 10px;
    margin-bottom: 30px;
    color: gray;
}
</style>