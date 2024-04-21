<script setup>
import { store } from '@/stores/scroll'
import WordSpeaker from '../components/WordSpeaker.vue'
import Introduce from '../components/Introduce.vue'
import PreArticles from '../components/PreArticles.vue'
import Layout from './Layout.vue'
import Next from '../components/Next.vue'
import Contact from '../components/Contact.vue'
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
      <div class="fastGo">
        <div>
          <a href="https://cn.vuejs.org/">
            <svg class="logo" viewBox="0 0 128 128" width="30" height="30" data-v-0495d436="">
              <path fill="#42b883" d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z"
                data-v-0495d436=""></path>
              <path fill="#35495e" d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z" data-v-0495d436=""></path>
            </svg>
            <span>Vue.js</span>
          </a>
        </div>
        <div>
          <a href="https://es6.ruanyifeng.com/">
            <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" style="background-color:rgb(247, 222, 31);">
              <text x="50%" y="50%" text-anchor="middle" alignment-baseline="middle" fill="black" font-size="14"
                font-family="Arial">
                ES
              </text>
            </svg>
            <span>ES6</span>
          </a>

        </div>
        <div>
          <a href="https://chat.baidu.com/">
            <img style="width: 30px;height: 30px;" src="https://gips0.baidu.com/it/u=2675190506,1465883752&fm=3028&app=3028&f=PNG&fmt=auto&q=75&size=f84_84" alt="">
            <span>Baidu_Ai</span>
          </a>
        </div>
      </div>
      <div class="scroll"><span @click="onScroll">》</span></div>
    </template>

    <template #content>
      <div class="phone" style="display: flex;">
        <div class="articles">
          <PreArticles />
        </div>
        <div class="sidebar">
          <Introduce />
          <Next />
          <Contact />
        </div>
      </div>
    </template>
  </Layout>
</template>

<style scoped>
.fastGo {
  display: none;
}

@media (max-width: 1024px) {
  h1 {
    display: none;
  }

  a {
    text-decoration: none;
    display: flex;
    color: #fbfbfb;
    align-items: center;
    margin-top: 30px;
  }

  /* .fastGo div:nth-child(1)  a{
    transform: translateX(-50px) translateY(-20px);

  }

  .fastGo div:nth-child(2)  a{
    transform: translateX(0px);
  }

  .fastGo div:nth-child(3)  a{
    transform: translateX(30px) translateY(20px);
  } */

  .phone {
    flex-direction: column;
  }

  .sidebar {
    width: 100% !important;
    margin-left: 0 !important;
    margin-top: 20px;
  }

  .fastGo {
    display: block;
    transform: translateY(-56px);
  }

  .fastGo>div {
    display: flex;
    align-items: center;
  }

  .fastGo span {
    font-size: 16px;
    font-weight: 500;
    margin-left: 10px;
  }

  .fastGo>div a:active {
    opacity: .6;
  }
}

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
