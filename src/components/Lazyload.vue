<template>
    <div v-if="!show">Loading ...</div>
    <img width="500" v-else :src="'https://lzxjack.top/assets/bg1.47ad3fba..webp'" alt="">
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
        img.src = props.src
        img.onload = () => {
            resolve()
        }
    }).then(res => {
        console.log('then')
        show.value = true
        emits('loadSuccess', show.value)
    })
})

</script>

<style scoped></style>