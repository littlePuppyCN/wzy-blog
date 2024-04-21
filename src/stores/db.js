import { reactive} from 'vue'
import storage from '@/utils/storage.js'
import {localdb} from '@/stores/localdb'

const initial = {
    list:[],
    msg:[],
    life:[],
    friend:[],
    construct:[],
    next:[],
    img:null
}
const storageDB = storage.getItem('DB')

export const store = reactive({
    DB: localdb,
    initDB(){
        if(!storageDB){
            storage.setItem('DB',localdb)
            this.DB.list = localdb.list
        }else{
            this.DB = storageDB
        }
    },
    setDB(){
        storage.setItem('DB',this.DB)
    },
    addArticle(value,type){
        this.DB[type].unshift(value)
        storage.setItem('DB',this.DB)
    },
    deleteArticle(id,type){
        this.DB[type] = this.DB[type].filter(l => l.id !== id)
        storage.setItem('DB',this.DB)
    },
    editArticle(val,type){
        this.DB[type].forEach((l) => {
            if(val.id === l.id){
               l = Object.assign(l,val)
            }
        })
        storage.setItem('DB',this.DB)
    }
})