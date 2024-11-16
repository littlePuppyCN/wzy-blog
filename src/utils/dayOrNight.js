import { ref, onMounted, onUnmounted, watch } from 'vue'

export function useDayOrNight () {
    const d = new Date()

    const now = d.getHours()
    if(now >= 19){
        return true
    }
    return false
}
