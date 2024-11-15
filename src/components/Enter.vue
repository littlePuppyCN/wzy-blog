<template>
    <div v-if="visible" class="enter" @click="click">
        ENTER
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue';
const visible = ref(location.hostname === 'localhost')
const router = useRouter()

const click = () => {
    router.push({path:'/markDown'})
}
</script>

<style  scoped>
.enter{
    position: fixed;
    bottom: 30px;
    left: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #bfa;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
}
</style>