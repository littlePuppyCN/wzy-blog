// mouse.js
import { ref, onMounted, onUnmounted, watch } from 'vue'

// 按照惯例，组合式函数名以“use”开头
export function useLazy(db) {
    // 被组合式函数封装和管理的状态
    let observer = new IntersectionObserver(entries => {
        entries.forEach((i) => {
            console.log(i.isIntersecting)
            if (i.isIntersecting) {
                setTimeout(() => {
                    const src = db.filter((l) => l.id == i.target.id)[0]
                    i.target.setAttribute('src', src.content)
                }, 1000)
                observer.unobserve(i.target)
            }
        })
    })


    watch(db,(n) => {
        if(n.length){
            const images = document.getElementsByTagName('img')
            for (const i of images) {
                observer.observe(i)
            }
        }
    })
  
    onUnmounted(() => observer = null)
}