import { ref } from "vue";

export function useVisible() {
    const visible = ref(false)

    function open () {
        visible.value = true
    }

    function close () {
        visible.value = false
    }

    return {
        open,close,visible
    }
}