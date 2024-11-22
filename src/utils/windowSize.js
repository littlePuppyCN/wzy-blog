import { onMounted, ref } from 'vue'

export function useWindowSize () {
    const windowWidth = ref(0)
    const windowHeight = ref(0)

    onMounted(() => {
        windowWidth.value = globalThis.innerWidth
        windowHeight.value = globalThis.outerHeight
    })

    return {
        windowWidth,
        windowHeight
    }
}