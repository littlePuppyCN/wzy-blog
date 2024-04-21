<template>
    <div class="container">
        <Header />
        <main>
            <div class="word" :style="{ ...style }" :class="bg">
                <slot name="word" />
            </div>
            <div class="w1200 layout">
                <div class="title">
                    <slot name="title" />
                </div>
                <div>
                    <slot name="content" />
                </div>
            </div>
        </main>
        <Footer />
    </div>
</template>

<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
const { style = {}, bg = '' } = defineProps(['style', 'bg'])

</script>

<style  scoped>


main {
    width: 100%;
    min-height: calc(100vh - 100px);
    position: relative;
    overflow: hidden;
}

.title {
    color: white;
    font-size: 1.4em;
}</style>