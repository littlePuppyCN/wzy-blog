<script setup>
import Card from './Card.vue';
</script>

<template>
    <Card 
    :style="{
        'height': 'auto',
        'padding':0
    }">
        <footer>
            <div>梓扬个人博客</div>
            <div>
                <span>本系统由</span>
                <span>Vue3.0</span>
                <span>Vue Router</span>
                <span>Vite</span>
                <span>vercel</span>
                <span>搭建</span>
            </div>
        </footer>
    </Card>
</template>

<style scoped>
footer {
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

footer span {
    margin: 0 4px;
}
</style>
