<template>
    <div class="load" :style="{ width: props.width+'px', height: props.height+'px' }" v-if="!show">加载中...</div>
    <img v-else :width="props.width" :height="props.height" :src="props.src" alt="">
</template>

<script setup>
import { onMounted, ref } from 'vue'
const props = defineProps(['src', 'width', 'height'])
const show = ref(false)

onMounted(() => {
    new Promise((resolve) => {
        let img = new Image()
        img.src = props.src
        img.onload = () => {
            resolve()
            img = null
        }
    }).then(res => {
        show.value = true
    })
})

</script>

<style scoped>
.load {
   display: flex;
   justify-content: center;
   align-items: center;
}

</style>