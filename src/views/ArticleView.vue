
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
                    <div v-for="c in data" :key="c.id" class="box_shadow scale contents" @click="() => showArcticle(c)">
                        {{ c.title }}
                    </div>
                    <div class="empty" v-if="data.length === 0">
                        暂无相关文章
                    </div>
                </Card>
            </div>

        </template>
    </Layout>
</template>
  
<script setup>
import Layout from './Layout.vue'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { store } from '@/stores/db'
import Card from '../components/Card.vue'
const router = useRouter()

const keywords = ref(null)
const data = ref(store.DB.list)

const showArcticle = (value) => {
    router.push({ path: '/post', query: { id: value.id } })
}

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
.empty{
    height: 350px;
}
@keyframes moto {
    0%{
        background-position: -350px;
        opacity: 1;
    }

    100%{
        opacity: 0.1;
        background-position: 310px;
    }
    
}
.list::before {
    width: 100%;
    height: 100%;
    content:'';
    display: block;
    position: absolute;
    background-image: url('@/assets/trans_sun.jpg');
    background-repeat: no-repeat;
    background-size: 40%;
    background-position: 310px center;
    animation: moto 2s ease-in-out; 
    opacity: 0.1;
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