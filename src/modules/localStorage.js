class LocalStorage {
    static storage = () => {
        return JSON.parse(localStorage.getItem('toDos'))
    }
    static setStorage = (arg) => {
        arg
            ? localStorage.setItem('toDos', JSON.stringify(arg))
            : localStorage.removeItem('toDos')
    }
}

export {
    LocalStorage
}