import { init } from './modules/UI';
import './modules/style.css';
import { State } from './modules/state';
import { Categories } from './modules/helper';
import { LocalStorage } from './modules/localStorage';

// init
// sync model
State.readCategories()
State.readToDo()

// populate model if empty
if (!State.readCategories()) {
    State.createCategories({ name:'personal' })
}
if (!State.readToDo()) {
    State.createToDo({ categoriesUUID:State.readCategories()[0].UUID, title:'Trial' })
}
console.log(State.readCategories())
console.log(State.readToDo())
// // render DOM
// // init()