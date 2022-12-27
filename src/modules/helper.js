import { v4 as uuidv4 } from 'uuid';

class ToDo {
    constructor({ title, description, dueDate, priority }){
        this.UUID = uuidv4()
        this.title = title
        this.description = description ?? ''
        this.priority = priority ?? 'Normal'
        this.createdDate = `${new Date().getFullYear()}${new Date().getMonth()+1}${new Date().getDay()}`
        this.dueDate = dueDate ?? this.createdDate
    }
}

class Categories {
    constructor ({ name, content }){
        this.UUID = uuidv4()
        this.name = name
        this.content = content ?? []
    }
}

const newCategory = new Categories({ name:'personal'})

export { ToDo, Categories }