import { reactive, ref } from 'vue'

globalThis.addEventListener('mousewheel', (evt) => {
    if (evt.deltaY === 100) {
        if (store.headerVisible) return
        store.visible()
    } else {
        if (!store.headerVisible) return
        store.hidden()
    }
})

export const store = reactive({
    headerVisible: false,
    visible() {
        this.headerVisible = true
    },
    hidden() {
        this.headerVisible = false
    }
})