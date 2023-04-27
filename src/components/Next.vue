<template>
    <Card :config="{ scale : true}" :style="{'margin-top':'20px'}">
        {{ store.DB.next[0]?.content }}...✔️
    </Card>
</template>

<script setup>
import Card from './Card.vue'
import { store } from '@/stores/db.js'
</script>

<style  scoped></style>