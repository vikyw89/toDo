import { Categories, ToDo } from "./helper"
import { LocalStorage } from "./localStorage"

class State {
    static createCategories = ({ name }) => {
        Categories.create({ name })
        LocalStorage.setStorage('Categories',Categories.list)
    }
    
    static readCategories = () => {
        Categories.list = LocalStorage.storage('Categories')
        return Categories.list
    }

    static updateCategories = ({ UUID, name }) => {
        Categories.update({ UUID, name })
        LocalStorage.setStorage('Categories', Categories.list)
    }

    static deleteCategories = ({ UUID }) => {
        Categories.delete({ UUID })
        LocalStorage.setStorage('Categories', Categories.list)
    }

    static createToDo = ({ categoriesUUID, title, description, dueDate, priority }) => {
        ToDo.create({ categoriesUUID, title, description, dueDate, priority })
        LocalStorage.setStorage('ToDo', ToDo.list)
    }

    static readToDo = () => {
        ToDo.list = LocalStorage.storage('ToDo')
        return ToDo.list
    }

    static updateToDo = ({ UUID, categoriesUUID, title, description, dueDate, priority }) => {
        ToDo.update({ UUID, categoriesUUID, title, description, dueDate, priority })
        LocalStorage.setStorage('ToDo', ToDo.list)
    }

    static deleteToDo = ({ UUID }) => {
        ToDo.delete({ UUID })
        LocalStorage.setStorage('ToDo', ToDo.list)
    }
}

export { State }