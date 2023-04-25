<template>
    <div class="load" :style="{ width: props.width+'px', height: props.height+'px' }" v-if="!show"></div>
    <img v-else :width="props.width" :height="props.height" :src="props.src" alt="">
</template>

<script setup>
import { onMounted, ref } from 'vue'
const props = defineProps(['src', 'width', 'height'])
const show = ref(false)

console.log(props.src)
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
    background-image: url('https://img.lzxjack.top/img/202203302022741.webp');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
}
</style>