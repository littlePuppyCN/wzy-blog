<script setup>
import { onMounted, ref } from 'vue'
import { RouterView } from 'vue-router'
import { store } from '@/stores/db'

onMounted(() => {
  store.initDB()
})

</script>

<template>
  <RouterView />
</template>

<style scoped></style>
