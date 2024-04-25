<script setup>
import { onMounted, onBeforeMount } from 'vue'
import { RouterView } from 'vue-router'
import { store } from '@/stores/db'
import storage from '@/utils/storage.js'

onBeforeMount(() => {
  if (location.hostname === 'localhost') return
  storage.removeItem('DB')
})


onMounted(() => {
  store.initDB()
})

</script>

<template>
  <RouterView />
</template>

<style scoped></style>
