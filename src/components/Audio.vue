<template>
    <div class="audioContainer" @click="click">
        <div class="audio">
            <div :class="{animation:startRotate}">

            </div>
            <audio ref="audioRef" :src="src"  @ended="end"></audio>
        </div>
    </div>

</template>

<script setup>
import {  ref } from 'vue';
import src from '@/assets/1.mp3'
const audioRef= ref(null)
const startRotate = ref(false)

const click = () => {
    if(startRotate.value){
        audioRef.value.pause()
    }else{
        audioRef.value.play()
    }
    startRotate.value = !startRotate.value
}

const end = () => {
    startRotate.value = false
    audioRef.value.pause()
}
</script>

<style scoped>
.audioContainer {
    position: fixed;
    bottom: 26px;
    right: 22px;
    z-index: 2;
}

.audio div:first-child {
    background: url('@/assets/nsh.jpg');
    background-size: 100% 100%;
    border-radius: 50%;
    width: 54px;
    height: 54px;
    transform: rotate(0);
}

.animation{
    animation: movement linear 12s infinite;
}

@keyframes movement {
    0% {
        transform: rotate(0);
    }

    100% {
        transform: rotate(360deg);
    }
}

.audio div:last-child {
    width: 100px;
}

audio {
    width: 100%;
}
</style>