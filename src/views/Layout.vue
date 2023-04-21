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
.home {
    background-image: url('../assets/side.jpg');
}

.article {
    background-image: url('../assets/control.jpg');
}

.life {
    background-image: url('../assets/right.jpg');
}

.msg {
    background-image: url('../assets/black_side.jpg');
}

.friends {
    background-image: url('../assets/side.jpg');
}

.about {
    background-image: url('../assets/bird.jpg');
}

main {
    width: 100%;
    min-height: calc(100vh - 100px);
    position: relative;
}

.title {
    text-align: center;
    color: white;
    font-size: 1.4em;
    text-shadow: 4px 2px 5px black;
    transform: skewX(-20deg);
}</style>