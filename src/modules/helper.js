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
        this.dueDate = dueDate ?? `${new Date().getFullYear()}${new Date().getMonth()+1}${new Date().getDate()}`
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

class TaskSuggestions {
    static taskList = {
        Call:`
        <span class="material-symbols-outlined">
            call
        </span>`,
        Check:`
        <span class="material-symbols-outlined">
            search_check
        </span>
        `,
        Get:`
        <span class="material-symbols-outlined">
            approval_delegation
        </span>
        `,
        Email:`
        <span class="material-symbols-outlined">
            mail
        </span>
        `,
        Buy:`
        <span class="material-symbols-outlined">
            shopping_cart
        </span>
        `,
        'Meet / Schedule':`
        <span class="material-symbols-outlined">
            schedule
        </span>
        `,
        Clean:`
        <span class="material-symbols-outlined">
            cleaning_services
        </span>
        `,
        Take:`
        <span class="material-symbols-outlined">
            takeout_dining
        </span>
        `,
        Send:`
        <span class="material-symbols-outlined">
            send
        </span>
        `,
        Pay:`
        <span class="material-symbols-outlined">
            payments
        </span>
        `,
        Make:`
        <span class="material-symbols-outlined">
            draw
        </span>
        `,
        Pick:`
        <span class="material-symbols-outlined">
            hail
        </span>
        `,
        Do:`
        <span class="material-symbols-outlined">
            assignment
        </span>
        `,
        Read:`
        <span class="material-symbols-outlined">
            menu_book
        </span>
        `,
        Print:`
        <span class="material-symbols-outlined">
            print
        </span>
        `,
        Finish:`
        <span class="material-symbols-outlined">
            golf_course
        </span>
        `,
        Study:`
        <span class="material-symbols-outlined">
            visibility
        </span>
        `
    }
    static inputCheck = (arg) => {
        if (arg) {
            return Object.fromEntries(Object.entries(TaskSuggestions.taskList).filter(([key, value])=>{
                if (key.toLowerCase().match(new RegExp(String.raw`${arg.toLowerCase()}`),'g')){
                    return true
                }
            }))
        } else {
            return TaskSuggestions.taskList
        }
    }
}

export { ToDo, Categories, TaskSuggestions }