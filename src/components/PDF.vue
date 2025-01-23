<template>

    <Card style="margin-top: 20px;">
        <span @click="open" style="cursor: pointer;"> {{ props.title }}</span>
        <Dialog :visible="visible" @close="close">
            <iframe :src="props.pdfUrl" :width="windowWidth * 0.8" :height="windowHeight * 0.7"
                style="border:none;"></iframe>
        </Dialog>
    </Card>

</template>

<script setup>
import { onMounted, ref } from 'vue';
import Dialog from './Dialog.vue';
import { useVisible } from '../utils/visible';
import Card from './Card.vue';
import { useWindowSize } from '../utils/windowSize';
const props = defineProps(['title', 'pdfUrl'])
const { open, close, visible } = useVisible()

const {
    windowWidth,
    windowHeight
} = useWindowSize()

</script>

<style scoped></style>