<template>
    <div class="scale box_shadow">
        <div class="introduce">
        </div>
        <div class="info ">
            <p>{{ getTime }}，</p>
            <p>我是<span style="color:#013485;">梓扬</span> </p>
            <p><span style="color:#013485;">待业</span>前端工程师</p>
            <p>这是我的个人博客</p>
        </div>
    </div>
</template>

<script setup>
import { computed } from '@vue/reactivity';
import { ref } from 'vue';
const time = ref('')

const getTime = computed(() => {
    const t = new Date()
    const hour = parseInt(t.toTimeString().slice(0, 2))
    if (hour >= 0 && hour < 6) {
        return '凌晨好'
    }
    if (hour >= 6 && hour < 8) {
        return '早上好'
    }
    if (hour >= 8 && hour < 12) {
        return '上午好'
    }
    if (hour >= 12 && hour < 18) {
        return '下午好'
    }
    return '晚上好'
})

</script>

<style scoped>
.introduce {
    height: 220px;
    border-radius: 8px 8px 0 0;
    background-color: white;
    background-image: url('@/assets/zy.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.info {
    font-size: 1.3em;
    padding: 20px;
    border-radius: 0 0 8px 8px;
    background-color: white;
    color: black;
}
</style>