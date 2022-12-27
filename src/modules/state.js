import { Categories, ToDo } from "./helper"
import { LocalStorage } from "./localStorage"

class State {
    static createCategories = (name) => {
        const newCategory = new Categories({ name:name })
        LocalStorage.setStorage([...LocalStorage.storage() ?? []].concat(newCategory))
    }

    static readCategories = () => {
        return LocalStorage.storage()
    }
    
    static updateCategories = ({ UUID, name, content }) => {
        LocalStorage.setStorage(LocalStorage.storage().reduce((result, category)=>{
            if (category.UUID === UUID) {
                if (name) {
                    category.name = name
                }
                if (content) {
                    category.content = content
                }
            }
            return result.concat(category)
        },[]))
    }

    static deleteCategories = (categoryUUID) => {
        LocalStorage.setStorage(LocalStorage.storage().filter(item=>{
            return item.UUID != categoryUUID
        }))
    }

    static createToDo = ({ title, categoryUUID }) => {
        const newToDo = new ToDo({ title:title })
        const updatedStorageContent = LocalStorage.storage().reduce((result, category)=>{
            if (category.UUID === categoryUUID) {
                category.content.push(newToDo)
            }
            return result.concat(category)
        },[])
        LocalStorage.setStorage(updatedStorageContent)
    }

    static readToDo = (categoryUUID) => {
        return LocalStorage.storage().filter(category=>{
            return category.uuid === categoryUUID
        })
    }

    static deleteToDo = ({ categoryUUID, UUID }) => {
        const updatedCategoryContent = LocalStorage.storage().reduce((result, category)=>{
            if (category.UUID === categoryUUID) {
                category.content = category.content.filter(toDo=>{
                    return toDo.UUID !== UUID
                })
            }
            return result.concat(category)
        },[])
        LocalStorage.setStorage(updatedCategoryContent)
    }

    static updateToDo = ({ categoryUUID, UUID, })=>{
        const updatedCategoryContent = LocalStorage.storage().reduce((result, category)=> {
            if (category.UUID === categoryUUID)
        })
    }
}

export { State }