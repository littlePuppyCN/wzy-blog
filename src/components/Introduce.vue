<template>
    <div class="scale box_shadow">
        <div class="introduce">
        </div>
        <div class="info ">
            <p>{{ getTime }}，</p>
            <p>我是<span style="color:#3273dc;">梓扬</span> </p>
            <p><span style="color:#3273dc;">待业</span>前端工程师</p>
            <p>这是我的个人博客</p>
            <div class="bilibili">
                <a href="https://space.bilibili.com/1275574" target="_blank">哔哩哔哩 Bilibili</a>
            </div>
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
@media (max-width: 1024px) {
    .introduce {
        background-size: contain!important;
    }
}

.introduce {
    height: 220px;
    border-radius: 8px 8px 0 0;
    background-color: white;
    background-image: url('@/assets/zy_low.webp');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.info {
    padding: 20px;
    border-radius: 0 0 8px 8px;
    background-color: white;
    color: black;
}

.info p {
    font-size: 1.3em;
}

.bilibili {
    text-align: center;
    background-color: #3273dc;
    border-radius: 20px;
    margin-top: 13px;
    line-height: 28px;
}

.bilibili:hover {
    background-color: #276cda;
}

a {
    color: white;
    text-decoration: none;
}
</style>