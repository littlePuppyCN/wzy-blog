<template>
    <img :id="props.id" style="margin-top: 20px;" :width="props.width" :height="props.height" src="../assets/loaddata.gif" alt="">
</template>

<script setup>
import { onMounted, ref } from 'vue'
const props = defineProps(['src', 'width', 'height','id'])

</script>

<style scoped>
.load {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>