<template>
    <Card :config="{ scale : true}" :style="{'margin-top':'20px'}">
        <!-- {{ store.DB.next[0]?.content }}...✔️ -->
        <div v-for="n in store.DB.next">
            {{ n.content }}...✔️
        </div>
    </Card>
</template>

<script setup>
import Card from './Card.vue'
import { store } from '@/stores/db.js'
</script>

<style  scoped></style>