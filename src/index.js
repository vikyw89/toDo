import './modules/style.css';
import { State } from './modules/state';
import { LocalStorage } from './modules/localStorage';
import { UI } from './modules/UI';
import { TaskSuggestions } from './modules/helper';

// sync model to DB
State.readCategories()
State.readToDo()
// LocalStorage.setStorage('ToDo',)
// populate model if empty
if (!State.readCategories()) {
    State.createCategories({ name:'personal' })
}
if (!State.readToDo()) {
    State.createToDo({ categoriesUUID:State.readCategories()[0].UUID, title:'Trials' })
    State.createToDo({ categoriesUUID:State.readCategories()[0].UUID, title:'Trials2' })
    State.createToDo({ categoriesUUID:State.readCategories()[0].UUID, title:'Trials3' })
    State.createToDo({ categoriesUUID:State.readCategories()[0].UUID, title:'Trials4', dueDate:20221229 })
}

// init
UI.render()