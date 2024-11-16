<script setup>
import { onMounted, onBeforeMount } from 'vue'
import { RouterView } from 'vue-router'
import { store } from '@/stores/db'
import storage from '@/utils/storage.js'
import Audio from './components/Audio.vue'
import { useDayOrNight } from './utils/dayOrNight'



onBeforeMount(() => {
  if (location.hostname === 'localhost') return
  storage.removeItem('DB')
})


onMounted(() => {

  // 如果时间超过晚上19点 设置html暗夜模式
  if(useDayOrNight()){
    let dom = document.getElementsByTagName('html')
    dom[0].style.filter = 'brightness(0.9)';
  }

  store.initDB()
})

</script>

<template>
  <Audio />
  <RouterView />
</template>

<style scoped></style>
