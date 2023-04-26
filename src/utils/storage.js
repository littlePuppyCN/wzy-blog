const storage = {
    getItem: (key) => {
        const data = localStorage.getItem(key)
        try {
            return JSON.parse(data)
        } catch (err) {
            return data
        }
    },
    setItem: (key, value) => {
        if (typeof value === 'object') {
            value = JSON.stringify(value)
        }
        localStorage.setItem(key, value)
    },
    removeItem: (key) => {
        localStorage.removeItem(key)
    }
}


export default storage