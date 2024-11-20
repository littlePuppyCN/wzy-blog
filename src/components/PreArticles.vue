<template>
    <Card @click="showArcticle(article)" :config="{ scale: true }" v-for="article in getLists" :key="article.id"
        :style="{ 'margin-bottom': '20px', 'cursor': 'pointer', 'display': !article.visible ? 'flex' : 'none' }">
        <div v-if="isLocal ? true : !article.visible">
            <h1>{{ article.title }}</h1>
            <div style="height:90px; overflow: hidden;">
                <p>{{ article.content }}</p>

            </div>
            <div class="bot">
                <div class="tags">{{ article.update }}</div>
                <div class="tags">
                    {{ article.tags }}
                </div>
            </div>
        </div>
    </Card>
    <Page :total="DB.list.length" :size="5" @onChange="onChange" />
</template>

<script setup>
import { computed, ref } from 'vue'
import Card from '../components/Card.vue'
import { store } from '@/stores/db'
import { useRouter } from 'vue-router'
import Page from '../components/Page.vue'
const curPage = ref(1)
const router = useRouter()
const isLocal = ref(location.hostname === 'localhost')
const { DB } = store

const onChange = (p) => {
    curPage.value = p
}

const showArcticle = (value) => {
    router.push({ path: '/post', query: { id: value.id } })
}

const getLists = computed(() => {
    const start = curPage.value * 5 - 4
    const end = curPage.value * 5
    return DB.list.slice(start - 1, end)
})

</script>

<style scoped>
h1 {
    text-align: center;
    font-size: 1.5em;
    margin: 0 0 10px 0;
}

p {
    /* 溢出部分隐藏 */
    overflow: hidden;
    /* 溢出部分用省略号代替 */
    text-overflow: ellipsis;
    /* 弹性伸缩盒子模型显示 */
    display: -webkit-box;
    /* 限制一个块元素显示的文本行数 */
    -webkit-line-clamp: 3;
    /* 设置伸缩盒对象子元素的排列方式 */
    -webkit-box-orient: vertical;
    font-size: 1.1em;
}

.bot {
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.tags {
    display: flex;
}

.tags div {
    margin-left: 10px;
}
</style>