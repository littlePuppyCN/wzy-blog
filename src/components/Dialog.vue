<template>
    <KeepAlive>
        <div class="filterBox" v-show="props.visible">
            <div class="dialog">
                <div class="close" @click="click">X</div>
                <Card>
                    <slot />
                </Card>
            </div>
        </div>
    </KeepAlive>
</template>

<script setup>
import { watch } from 'vue';
import Card from './Card.vue';
const props = defineProps(['visible'])
const emits = defineEmits(['close'])

const click = () => {
    emits('close')
}

watch(() => props.visible,
    (n, o) => {
        if (n) {
            document.getElementsByTagName('html')[0].style.overflow = 'hidden'
        } else {
            document.getElementsByTagName('html')[0].style.overflow = 'auto'
        }
    },
)

</script>

<style scoped>
.filterBox {
    display: flex;
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 2;
    background-color: rgba(0, 0, 0, 0.3);
}

.dialog {
    margin: auto;
}

.close {
    position: absolute;
    width: 30px;
    height: 30px;
    color: white;
    font-weight: bold;
    top: 0;
    right: -41px;
    line-height: 30px;
    text-align: center;
}

.close:hover {
    color: black;
    cursor: pointer;
}
</style>