import { v4 as uuidv4 } from 'uuid';

class ToDo {
    static list = []

    static create = ({ categoriesUUID, title, description, dueDate, priority }) => {
        const newToDo = new ToDo({ categoriesUUID, title, description, dueDate, priority })
        ToDo.list = [...ToDo.list ?? [], newToDo]
    }

    static read = () => {
        return ToDo.list
    }

    static update = ({ UUID, categoriesUUID, title, description, dueDate, priority , status}) => {
        const updatedToDo = ToDo.list.reduce((result, item)=>{
            if (item.UUID === UUID) {
                item.title = title ?? item.title
                item.categoriesUUID = categoriesUUID ?? item.categoriesUUID
                item.description = description ?? item.description
                item.dueDate = dueDate ?? item.dueDate
                item.priority = priority ?? item.priority
                item.status = status ?? item.status
            }
            return result.concat(item)
        },[])
        ToDo.list = updatedToDo
    }

    static delete = ({ UUID }) => {
        const updatedToDo = ToDo.list.filter(item=>{
            return item.UUID !== UUID
        })
        ToDo.list = updatedToDo
    }

    constructor({ categoriesUUID, title, description, dueDate, priority }){
        this.categoriesUUID = categoriesUUID
        this.UUID = uuidv4()
        this.title = title
        this.description = description ?? ''
        this.priority = priority ?? 'Normal'
        this.createdDate = `${new Date().getFullYear()}${new Date().getMonth()+1}${new Date().getDate()}`
        this.dueDate = dueDate ?? null
        this.status = 'queue'
    }
}

class Categories {
    static list = []

    static create = ({ name }) => {
        const newCategory = new Categories({ name })
        Categories.list = [...Categories.list ?? [], newCategory]
    }

    static read = () => {
        return Categories.list
    }

    static update = ({ UUID, name }) => {
        const updatedCategories = Categories.list.reduce((result, item)=>{
            if (item.UUID === UUID) {
                item.name = name ?? item.name
            }
            return result.concat(item)
        },[])
        Categories.list = updatedCategories
    }

    static delete = ({ UUID }) => {
        if (Categories.list.length === 1) {
            return
        }
        const updatedCategories = Categories.list.filter(item=>{
            return item.UUID !== UUID
        })
        Categories.list = updatedCategories
    }

    constructor ({ name }) {
        this.UUID = uuidv4()
        this.name = name
    }
}

export { ToDo, Categories }