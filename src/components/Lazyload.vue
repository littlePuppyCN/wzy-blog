<template>
    <div v-if="!show">Loading ...</div>
    <img width="500" v-else :src="props.src" alt="">
</template>

<script setup>
import { onMounted, ref } from 'vue'
const props = defineProps(['src'])
const emits = defineEmits(['loadSuccess'])
const show = ref(false)

// const p = (url) => {
//     return new Promise((resolve) => {
//         const img = new Image()
//         img.onload = () => {
//             console.log('图片加载完毕')
//             resolve()
//             show.value = true
//             emits('loadSuccess',show.value)
//         }
//         img.src = url
//     })
// }

onMounted(() => {
    new Promise((resolve) => {
        const img = new Image()
        img.onload = () => {
            resolve()
        }
        img.src = props.src
    }).then(res => {
        console.log('图片加载完毕')
        show.value = true
        emits('loadSuccess', show.value)
    })
})

</script>

<style scoped></style>