<template>
    <Layout :style="{ 'height': '500px' }" :bg="'home'">
        <template #word>
        </template>
        <template #content>
            <div class="nav">
                <div :class="{ highlight: t.name === postType }" v-for="t in types" :key="t.name"
                    @click="changeType(t.name)">
                    <div>{{ t.title }}</div>
                </div>
            </div>
            <h1 class="title">
                <label for="article_title">{{ getTitle }}</label><input class="global_input" type="text"
                    v-model="postData.title">
                <select v-model="selectValue" @change="changeOptions">
                    <option value='none' disabled>请选择</option>
                    <option v-for="o in options" :value="o.text" :key="o.text">{{o.text}}</option>
                </select>
            </h1>
            <v-md-editor :disabled-menus="[]" @upload-image="handleUploadImage" v-model="postData.content" height="500px"
                @save="save"></v-md-editor>
        </template>
    </Layout>
    <div class="fixed_bar scale box_shadow" v-if="store.DB[postType].length">
        <Card>
            <div class="bar_box" v-for="c in store.DB[postType]" :key="c.id">
                <div class="bar_title" :title="c.title">{{ c.title }}</div>
                <div class="options">
                    <span @click="onEdit(c)">编辑</span>
                    <span @click="onDelete(c)">删除</span>
                </div>
            </div>
        </Card>
    </div>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import Layout from './Layout.vue'
import { store } from '@/stores/db'
import Card from '../components/Card.vue'
import { getUrlBase64 } from '@/utils/base64.js'

const postType = ref('list')
const selectValue = ref('none')

const options = [{ text: 'javascript' }, { text: 'vue' }, { text: 'react' }, { text: 'html' }, { text: '性能优化' },{text:'有感而发'},{text:'摩托车说'}]

const types = ref([
    { name: 'list', title: '文章' },
    { name: 'life', title: '生活' },
    { name: 'msg', title: '留言板' },
    { name: 'friend', title: '友链' },
    { name: 'next', title: '待办' },
    { name: 'construct', title: '建站' }]
)

const handleUploadImage = (event, insertImage, files) => {

    let reader = new FileReader();
    reader.readAsDataURL(files[0]); // 这里是最关键的一步，转换就在这里
    reader.onloadend = function () {
        postData.value.content = this.result
    }
}

const postData = ref(
    {
        id: null,
        content: '',
        title: '',
        update: null,
        tags:''
    }
)

const getTitle = computed(() => (types.value.find((t) => t.name === postType.value)).title)

const changeOptions = (evt) => {
    const type = evt.target.value
    if(postData.value.tags.includes(type)) return 
    postData.value.tags = evt.target.value
} 

const changeType = (v) => {
    postType.value = v
    reset()
}

const onEdit = (v) => {
    postData.value = {
        ...postData.value,
        ...v
    }
    selectValue.value = v.tags
}

const onDelete = (v) => {
    store.deleteArticle(v.id, postType.value)
    reset()
}

const reset = () => {
    postData.value = {
        id: null,
        content: '',
        title: '',
        update: null,
        tags:''
    }
    selectValue.value = 'none'
}

const save = () => {
    if (!postData.value.title.length && postType.value === 'list') {
        alert('至少需要一个文章标题')
        return
    }

    // 新内容
    if (!postData.value.id) {
        const d = new Date()
        postData.value = {
            ...postData.value,
            id: d.getTime(),
            update: d.toLocaleString()
        }
        store.addArticle(postData.value, postType.value)
    } else {
        // 编辑
        store.editArticle(postData.value, postType.value)
    }
    reset()
}



</script>

<style scoped>
.highlight {
    color: #0c9;
}

.title {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    margin-top: 50px;
}

select{
    height: 30px;
    margin-left: 20px;
}

.fixed_bar {
    position: fixed;
    right: 20px;
    top: 50%;
    max-height: 400px;
    overflow-y: auto;
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

.nav {
    display: flex;
    flex-direction: row;
    font-size: 1.3em;
    justify-content: center;
}

.nav div {
    margin: 0 10px;
}
</style>