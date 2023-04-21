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
    setDB(key,value){
        this.DB[key].value = value
        storage.setItem('DB',this.DB)
    }
})