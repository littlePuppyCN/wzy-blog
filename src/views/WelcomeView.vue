<script setup>
import { store } from '@/stores/scroll'
import WordSpeaker from '../components/WordSpeaker.vue'
import Introduce from '../components/Introduce.vue'
import PreArticles from '../components/PreArticles.vue'
import Layout from './Layout.vue'
import { ref } from 'vue'
const onScroll = () => {
  document.querySelector('.layout').scrollIntoView({ behavior: 'smooth' })
  store.visible()
}

</script>

<template>
  <Layout :style="{
    height: '100vh',
  }" :bg="'home'">
    <template #word>
      <div class="mask">
      </div>
      <h1>
        <WordSpeaker :words="{ en: `What Doesn't Kill You Makes You Stronger!`, cn: '斗罢艰险，又出发！' }" />
      </h1>
      <div class="scroll"><span @click="onScroll">》</span></div>
    </template>

    <template #content>
      <div style="display: flex;">
        <div class="articles">
          <PreArticles/>
        </div>
        <div class="sidebar">
          <Introduce />
        </div>
      </div>

    </template>
  </Layout>
</template>

<style scoped>
.mask {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.55);
}

.wrapper {
  display: flex;
  margin-top: 200px;
  color: white;
}

.articles {
  flex: 1;
}

.sidebar {
  width: 260px;
  margin-left: 25px;
}

section {
  overflow: hidden;
  height: 2000px;
}




h1 {
  transform: scale(1.5) skewX(-20deg);
  color: white;
}

.scroll {
  position: absolute;
  bottom: 10px;
  width: 100%;
  color: white;
  font-size: 22px;
  text-align: center;
}

.scroll span {
  transform: rotate(90deg) scale(1.3);
  display: inline-block;
  animation: upAndDown 1s linear infinite;
  cursor: pointer;
}

@keyframes upAndDown {
  0% {
    bottom: 0px;
    opacity: 1;
  }

  50% {
    bottom: 5px;
    opacity: 0.5;
  }

  100% {
    bottom: 0px;
    opacity: 1;
  }
}
</style>
