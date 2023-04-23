import { reactive} from 'vue'
import storage from '@/utils/storage.js'

const initial = {
    list:[],
    msg:[]
}
const storageDB = storage.getItem('DB')

export const store = reactive({
    DB: initial,
    initDB(){
        if(!storageDB){
            storage.setItem('DB',initial)
            this.DB.list = initial.list
        }else{
            this.DB = storageDB
        }
    },
    setDB(){
        storage.setItem('DB',this.DB)
    },
    addArticle(value){
        this.DB.list.push(value)
        storage.setItem('DB',this.DB)
    },
    deleteArticle(id){
        this.DB.list = this.DB.list.filter(l => l.id !== id)
        storage.setItem('DB',this.DB)
    },
    editArticle(val){
        console.log(val)
        this.DB.list.forEach((l) => {
            if(val.id === l.id){
               l = Object.assign(l,val)
            }
        })
        storage.setItem('DB',this.DB)
    }
})