<template>
    <Layout :style="{ 'height': '500px' }" :bg="'home'">
        <template #word>
            <!-- <h1 class="title">所有文章</h1> -->
        </template>
        <template #content>
            <h1 class="title">
                <label for="article_title">文章标题</label><input class="global_input" type="text" v-model="postData.title">
            </h1>
            <v-md-editor v-model="postData.content" height="500px" @save="save"></v-md-editor>
            
        </template>
    </Layout>
    <div class="fixed_bar scale">
        <Card>
            <div class="bar_box" v-for="c in store.DB.list" :key="c.id">
                <div class="bar_title" :title="c.title">{{ c.title }}</div>
                <div class="options">
                    <span @click="onEdit(c)">编辑</span>
                    <!-- <span @click="onDelete(c)">删除</span> -->
                </div>
            </div>
        </Card>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Layout from './Layout.vue'
import { store } from '@/stores/db'
import Card from '../components/Card.vue'

const postData = ref(
    {
        id: null,
        content: '',
        title: '',
        update: null,
    }
)

const onEdit = (v) => {
    postData.value = {
        ...postData.value,
        ...v
    }
}

const onDelete = (v) => {
    store.deleteArticle(v.id)
}

const reset = () => {
    postData.value = {
        id: null,
        content: '',
        title: '',
        update: null,
    }
}

const save = () => {
    if (!postData.value.title.length) {
        alert('至少需要一个文章标题')
        return
    }
    // 新文章
    if (!postData.value.id) {
        const d = new Date()
        postData.value = {
            ...postData.value,
            id: d.getTime(),
            update: d.toLocaleString()
        }
        store.addArticle(postData.value)
    } else {
        // 编辑
        store.editArticle(postData.value)
    }
    reset()
}



</script>

<style scoped>
.title {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
}


.fixed_bar {
    position: fixed;
    right: 20px;
    top: 50%;
}

.bar_box {
    display: flex;
    justify-content: space-between;
}

.options span {
    margin-left: 6px;
}

.options:hover span {
    font-size: 1.1em;
    cursor: pointer;
}

.bar_title {
    width: 150px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>