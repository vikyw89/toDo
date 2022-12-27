class LocalStorage {
    static storage = (storageName) => {
        return JSON.parse(localStorage.getItem(storageName))
    }
    static setStorage = (storageName, arg) => {
        arg
            ? localStorage.setItem(storageName, JSON.stringify(arg))
            : localStorage.removeItem(storageName)
    }
}

export {
    LocalStorage
}