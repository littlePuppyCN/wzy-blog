<script setup>
import { onMounted, ref } from 'vue'
import { store } from '@/stores/scroll'
const now = ref('')

onMounted(() => {
    setInterval(() => {
        const d = new Date()
        now.value = d.toLocaleString()
    },1000)
})

</script>

<template>
    <header :class="['header']" @click="() => store.hidden()">
        <nav>
            <div  class="ho" style="margin-left:10px;">
                <div  :tab="0"><router-link to="/">首页</router-link></div>
            </div>
            <div class="navs" :class="{ navsOn: store.headerVisible }">
                <div :class="{ hide: store.headerVisible }" :tab="1"><router-link to="/article">文章</router-link></div>
                <div :class="{ hide: store.headerVisible }" :tab="2"><router-link to="/life">生活</router-link></div>
                <div :class="{ hide: store.headerVisible }" :tab="3"><router-link to="/fitness">力训</router-link></div>
                <!-- <div :class="{ hide: store.headerVisible }" :tab="4"><router-link to="/friends">友链</router-link></div> -->
                <div :class="{ hide: store.headerVisible }" :tab="5"><router-link to="/about">建站</router-link></div>
            </div>
            <div class="guidao" :class="{ onguidao: !store.headerVisible }">
                {{ now }}
            </div>
            <div class="ho" :tab="6" style="margin-right:10px;">
                <router-link to="/game">小游戏</router-link>
            </div>
        </nav>
    </header>
</template>

<style scoped>
@media (max-width: 1024px) {
    header {
        /* display: none !important; */
        width: 80%;
        display: flex;
        position: fixed;
        left: 50%;
        transform: translateX(-50%);
        z-index: 12;
    }
    nav{
        width: 100%;
    }
    nav > div:last-child{
        display: none;
    }

    .navs{
        width: auto!important;
    }
    .navs div{
        margin-left: 20px;
    }
}

@keyframes mask {
    0% {
        background-position: 0 0;
    }

    100% {
        background-position: -100% 0;
    }
}

.navs {
    width: 480px;
    transition: all 0.4s ease;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
}

.navs div {
    display: flex;
    border-radius: 30px;
    flex-direction: column;
    align-items: center;
    transition: ease-in-out .4s;
}

.navs div:hover a {
    transform: scale(1.2);
}

.ho div:hover {
    transform: scale(1.2);
}

.navsOn {
    width: 240px;
}

.guidao {
    transition: 0.3s;
    background: -webkit-linear-gradient(left, #ffffff, #ff0000 6.25%, #ff7d00 12.5%, #ffff00 18.75%, #00ff00 25%, #00ffff 31.25%, #0000ff 37.5%, #ff00ff 43.75%, #ffff00 50%, #ff0000 56.25%, #ff7d00 62.5%, #ffff00 68.75%, #00ff00 75%, #00ffff 81.25%, #0000ff 87.5%, #ff00ff 93.75%, #ffff00 100%);
    opacity: 1;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 200% 100%;
    z-index: -999;
    position: fixed;
    animation: mask 4s infinite linear;
    font-size: 1.2em;
}

.onguidao {
    opacity: 0;
    position: fixed;
}

.hide {
    display: none !important;
}

header {
    display: flex;
    justify-content: center;
}

header nav {
    height: 60px;
    display: flex;
    align-items: center;
    position: fixed;
    justify-content: space-evenly;
    top: 12px;
    z-index: 1;
    color: var(--theme_font_color);
    font-size: 1.3em;
    text-shadow: 1px 1px 0 #c17575;
    box-shadow: none;
    background-color: rgba(125, 125, 125, .3);
    padding: 0 10px;
    backdrop-filter: saturate(240%) blur(20px);
    border-radius: 60px;
}


header nav div a {
    text-decoration: none;
    color: white;
}
</style>
