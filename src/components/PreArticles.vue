<template>
    <Card :style="{ 'margin-bottom': '20px' ,'cursor':'pointer'}" @click="showArcticle(article)" :config="{ scale: true }"
        v-for="article in DB.list" :key="article.id">
        <h1>{{ article.title }}</h1>
        <div style="height:90px; overflow: hidden;">
            <p>{{ article.content }}</p>

        </div>
        <div class="bot">
            <div>{{ article.update }}</div>
            <div class="tags">
                <!-- <div v-for="t in tags" :key="t">
                    {{ t }}
                </div> -->
                vue react
            </div>
        </div>
    </Card>
</template>

<script setup>
import Card from '../components/Card.vue'
import { store } from '@/stores/db'
import { useRouter } from 'vue-router'
const router = useRouter()

const { DB } = store
const showArcticle = (value) => {
    router.push({ path: '/post', query: { id: value.id } })
}

</script>

<style  scoped>
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