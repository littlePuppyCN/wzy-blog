<template>
    <Layout :style="{ 'height': '500px' }" :bg="'article'">
        <template #content>
            <div class="list w1000">
                <Card>
                    <div class="search_bar">
                        <input @keyup.enter="search" v-model="keywords" type="text" class="global_input"
                            placeholder="搜索文章..">
                        <button @click="search">查找文章</button>
                    </div>
                    <div v-for="c in getLists" :key="c.id" @click="() => showArcticle(c)">
                        <div class="box_shadow scale contents" v-if="!c.visible">
                            <div class="tag" v-if="c.tags">
                                {{ c.tags }}
                            </div>
                            <div>
                                {{ c.title }}
                            </div>
                        </div>
                    </div>
                    <div class="empty" v-if="data.length === 0">
                        暂无相关文章
                    </div>
                </Card>
                <Page :total="data.length" :size="10" @onChange="onChange" />
            </div>
        </template>
    </Layout>
</template>

<script setup>
import Layout from './Layout.vue'
import { useRouter } from 'vue-router'
import { computed, ref } from 'vue'
import { store } from '@/stores/db'
import Card from '../components/Card.vue'
import Page from '../components/Page.vue'
const router = useRouter()

const keywords = ref(null)
const data = ref(store.DB.list)
const curPage = ref(1)

const showArcticle = (value) => {
    router.push({ path: '/post', query: { id: value.id } })
}

const onChange = (p) => {
    curPage.value = p
}
const getLists = computed(() => {
    const start = curPage.value * 10 - 9
    const end = curPage.value * 10
    return data.value.slice(start - 1, end - 1)
})


const search = () => {
    if (keywords.value !== null) {
        data.value = store.DB.list.filter((l) => {
            return Object.keys(l).some((eachKey) => {
                if (eachKey === 'id') {
                    return false
                } else {
                    return l[eachKey].indexOf(keywords.value) > -1
                }
            })
        })
    } else {
        data.value = store.DB.list
    }
}

</script>

<style scoped>
@media (max-width: 1024px) {
    .w1000 {
        width: 100% !important;
    }

    .tag {
        display: none;
    }

    .list::before {
        background-position: 50% !important;
    }
}

.tag {
    position: absolute;
    left: 20px;
    font-size: 15px;
    border-radius: 8px;
    padding: 2px 8px;
    background-color: rgb(225 225 225);
}

.empty {
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
}

@keyframes moto {
    0% {
        background-position: -350px;
        opacity: 1;
    }

    100% {
        opacity: 0.1;
        background-position: 310px;
    }

}

.list::before {
    width: 100%;
    height: 100%;
    content: '';
    display: block;
    position: absolute;
    background-image: url('@/assets/trans_sun.jpg');
    background-repeat: no-repeat;
    background-size: 40%;
    background-position: 310px center;
    animation: moto 2s ease-in-out;
    opacity: 0.1;
}

.isJs {
    background-color: #bfa;
}

.search_bar {
    display: flex;
    justify-content: center;
    height: 60px;
}

.search_bar input {
    flex: 1;
    padding: 4px;
    text-align: center;
}

.search_bar button {
    margin-left: 20px;
    padding: 5px;
}

.contents {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    margin-top: 20px;
    cursor: pointer;
    font-size: 1.1em;
}

.contents:hover {
    font-size: 1.3em;
}
</style>