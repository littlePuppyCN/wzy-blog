<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import {RouterView } from 'vue-router'

</script>

<template>
  <div class="container">
    <Header />
    <main>
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<style scoped>



</style>
