<template>
        <div>        <img src="../assets/zy_low.webp" alt=""></div>
        <div>        <img src="../assets/zy_low.webp" alt=""></div>
        <div>        <img src="../assets/zy_low.webp" alt=""></div>
        <div>        <img src="../assets/zy_low.webp" alt=""></div>
        <div>        <img src="../assets/zy_low.webp" alt=""></div>
        <div>        <img src="../assets/zy_low.webp" alt=""></div>
        <div>        <img src="../assets/zy_low.webp" alt=""></div>
        <div>        <img src="../assets/zy_low.webp" alt=""></div>
        <div>        <img src="../assets/zy_low.webp" alt=""></div>
        <div>        <img src="../assets/zy_low.webp" alt=""></div>
        <div>        <img src="../assets/zy_low.webp" alt=""></div>
        <div>        <img src="../assets/zy_low.webp" alt=""></div>
        <div>        <img src="../assets/zy_low.webp" alt=""></div>
        <div>        <img src="../assets/zy_low.webp" alt=""></div>
        <div>        <img src="../assets/zy_low.webp" alt=""></div>
        <div>        <img src="../assets/zy_low.webp" alt=""></div>
        <div>        <img src="../assets/zy_low.webp" alt=""></div>
        <div>        <img src="../assets/zy_low.webp" alt=""></div>
        <div>        <img src="../assets/zy_low.webp" alt=""></div>


</template>

<script setup>
import { onMounted, reactive, ref, watch } from 'vue';
import Layout from './Layout.vue';

const observer = new IntersectionObserver(entries => {
        for (const i of entries) {
                if (i.isIntersecting) {
                        setTimeout(() => {
                                i.target.setAttribute('src', '/src/assets/trans_sun.jpg')
                        }, 1000)
                        observer.unobserve(i.target)
                }
        }
})

onMounted(() => {
        const images = document.getElementsByTagName('img')
        console.log(images)
        for (const i of images) {
                observer.observe(i)
        }
})

</script>

<style scoped></style>