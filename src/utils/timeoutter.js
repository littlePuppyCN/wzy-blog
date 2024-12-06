import { onMounted, onUnmounted, ref } from "vue";

export function useTimeoutter(fn,time) {
    let timer = null
    

    function t () {
        timer = setInterval(() => {
            fn()
        }, time );
    }
    
    onMounted(() => {
        t()
    })

    onUnmounted(() => {
        clearInterval(timer)
    })
}