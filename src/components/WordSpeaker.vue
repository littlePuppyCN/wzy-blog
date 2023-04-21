<script setup>
import { onMounted, ref, watch } from 'vue';

const props = defineProps(['words'])
const timeSpeak = ref('')
const cn = ref(false)

const speaker = () => {
    cn.value = false
    const wordToArray = props.words.en.split('')
    new Promise((r) => {
        const timer = setInterval(() => {
            if (wordToArray.length === 0) {
                clearInterval(timer)
                return r()
            }
            timeSpeak.value += wordToArray.shift() 
        }, 80)
    }).then(res => {
        setTimeout(() => {
            cn.value = true
            timeSpeak.value = ''
        }, 3000)
    })
}

watch(
    () => timeSpeak.value,
    (n) => {
        if (n === '') {
            setTimeout(() => {
                speaker()
            }, 60000)
        }
    }
)

onMounted(() => {
    speaker()
})

</script>

<template>
    <div class="wrap">
        <div v-if="!cn">
            {{ timeSpeak }}
        </div>
        <div v-else>{{ props.words.cn }}</div>
    </div>
</template>

<style scoped>
    .wrap  div{
        font-weight: 700;
        word-spacing: 10px;
        font-size: 40px;
    }
</style>
